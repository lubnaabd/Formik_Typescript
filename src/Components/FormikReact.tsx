import React from "react";
import { Formik } from "formik";
import WorkExperienceForm from "./workExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from '../Redux/store'
import {
  WorkExperienceFormShema,
  WorkExperienceArrayShema,
} from "../Utils/Validation";
import { addItem, EditItemById } from "../Redux/List/action";
import { Form } from "formik";
import { MyFormValues, workExperienceArrays } from "../@type/type"
interface Iprops {
  isEditing: boolean
  setIsEditing: Function
}
const FormikReact = (props: Iprops) => {
  const { list: { isEditings, list } } = useSelector((state: AppState): AppState => state);
  const dispatch = useDispatch();
  const initialValues: MyFormValues = {
    jobTitle: "",
    jobField: "",
    jobLocation: "",
    startDate: "",
    endDate: "",
    description: "",
    companyName: "",
    companyAddress: "",
    currentlyWork: false,
    companyIndustry: "",
    companySize: "",
    companySector: "",
    reasonOfLeaving: "",
    numberEmployees: "",
    id: "",
  }
  const workExperienceArrayofOject: workExperienceArrays = { workExperienceArray: [] }
  return (
    <div className="form">
      <Formik
        initialValues={workExperienceArrayofOject}
        validationSchema={WorkExperienceArrayShema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ errors, setValues, submitForm }) => (
          <>
            <Formik
              initialValues={initialValues}
              onSubmit={(values: MyFormValues, actions) => {
                if (isEditings) {
                  dispatch(EditItemById(values));
                } else {
                  values.id = `${Math.random() * 1000}`;
                  dispatch(addItem(values));
                  setValues((prev: workExperienceArrays) => {
                    return {
                      workExperienceArray: [...prev.workExperienceArray, values],
                    };
                  });
                }
                actions.setSubmitting(false);
                actions.resetForm({});
              }}
              validationSchema={WorkExperienceFormShema}
              children={formikProps =>
                <WorkExperienceForm  {...formikProps}  {...props} />
              }

            />
            <Form>
              <div>
                <button
                  type={"button"}
                  className="btn_submit"
                  onClick={submitForm}
                >
                  Next
                </button>
                <>
                  {errors.workExperienceArray && (
                    <div className={"error"}>{errors.workExperienceArray}</div>
                  )}
                </>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormikReact;

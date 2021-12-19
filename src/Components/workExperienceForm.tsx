import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from '../Redux/store'
import WorkExperienceSelectComponent from "./workExperienceReactSelect/workExperienceSelectComponent";
import WorkExperienceSelect from "./workExperienceReactSelect/workExperienceSelect";
import workExperienceStaticData from "./StaticData/staticData";
import { FormikProps, Form } from 'formik';
import { MyFormValues } from "../@type/type"
import FormInput from "./FormInput";
import DateInput from "./Date/DateInput";
import FieldDate from "./Date/FieldDate";
import { boolean } from "yup";
interface OtherProps {
  isEditing: boolean;
  setIsEditing: Function
}
const WorkExperienceForm = (props: OtherProps & FormikProps<MyFormValues>) => {
  const { errors, touched, values, setFieldValue, isEditing, setIsEditing } = props;
  const { list: { list,ListById ,isEditings} } = useSelector((state: AppState): AppState => state);

  useEffect(() => {
    if (isEditing) {
      const fields = ['jobTitle',
        'jobField',
        'jobLocation',
        'startDate',
        'endDate',
        'description',
        'companyName',
        'companyAddress',
        'currentlyWork',
        'companyIndustry',
        'companySize',
        'companySector',
        'reasonOfLeaving',
        'numberEmployees',
        'id'];
      fields.forEach(field => setFieldValue(field, ListById[0][field]));
      setIsEditing((isEditing: boolean) => !isEditing)
     
    }
  }, [isEditing]);


  return (
    <Form>
      <span>Job Detials</span>
      <div>
        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="jobTitle"
          options={workExperienceStaticData.jobTitleOptions}
          placeholder="Job Title"
        />

        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="jobField"
          options={workExperienceStaticData.jobFieldOpeions}
          placeholder="Job Field"
        />
        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="jobLocation"
          options={workExperienceStaticData.jobLocationOpeions}
          placeholder="Job Location"
        />
        <div className="div_date">
          <FieldDate
            component={DateInput}
            name={"startDate"}
            placeholder={"Start Date"}
            touched={touched}
            errors={errors}
            className="date"
          />
          {!values.currentlyWork && (
            <FieldDate
              component={DateInput}
              name={"endDate"}
              placeholder={"End Date"}
              touched={touched}
              errors={errors}
              className="date"
            />
          )}
        </div>
        <FormInput
          type={"checkbox"}
          name={"currentlyWork"}
          touched={touched}
          errors={errors}
          className="checkbox"
          label="Currently Work There"
        />
        <FormInput
          component="textarea"
          name={"description"}
          placeholder={"Description"}
          touched={touched}
          errors={errors}
          className="input"
        />
      </div>
      <span>Company Detials</span>
      <div>

        <FormInput
          type="input"
          name={"companyName"}
          placeholder={"Company Name"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <FormInput
          type="input"
          name={"companyAddress"}
          placeholder={"Company Address"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="companyIndustry"
          options={workExperienceStaticData.companyIndustryOptions}
          placeholder="Company Industry"
        />
        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="companySize"
          options={workExperienceStaticData.companySizeOptions}
          placeholder="company Size"
        />
        <WorkExperienceSelect
          as={WorkExperienceSelectComponent}
          name="companySector"
          options={workExperienceStaticData.companySectorOptions}
          placeholder="Company Sector "
        />
        <FormInput
          type="input"
          name={"numberEmployees"}
          placeholder={"# of Employees Superives by You"}
          touched={touched}
          className="input"
          errors={errors}
        />
        {!values.currentlyWork && (
          <FormInput
            type="input"
            name={"reasonOfLeaving"}
            placeholder={"Reason Of Leaving"}
            touched={touched}
            className="input"
            errors={errors}
          />
        )}
      </div>
      <button type={"submit"} className="btn_save">
       {isEditings?"UPDAT RECORD" :'+ SAVE & ADD ANOTHER RECORD'}
      </button>
    </Form>
  );
};

export default WorkExperienceForm;

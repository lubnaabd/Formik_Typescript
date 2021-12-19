import { object, ref, string, boolean, date, number, SchemaOf } from 'yup';
import { IAddItems } from "../../@type/vaildation"
const workExperienceFormShema = (): SchemaOf<IAddItems> => {
  return object().shape({
    currentlyWork: boolean(),
    jobTitle: string().required("Please Select job title"),
    jobField: string().required("Please Select job Field"),
    jobLocation: string().required("Please Select job Location"),
    companyName: string().required("Please Enter Company Name"),
    companyIndustry: string().required("Please Select Company Inustry"),
    companySize: string().required("Please Select Company Size"),
    companySector: string().required("Please Select Company Sectore"),
    companyAddress: string().required("Please Enter Company Address"),
    description: string().required("Please Select job Description"),
    startDate: date().required("Please Enter Start Date"),
    endDate: date().when("currentlyWork", {
      is: true,
      then: date(),
      otherwise:
        date()
          .required("Please Enter End Date")
          .min(ref("startDate"), "End date should be later than start Date")
    }),
    reasonOfLeaving: string().when("currentlyWork", {
      is: true,
      then: string(),
      otherwise: string().required("Please Enter Reason Of Leaving "),
    }),
    numberEmployees: number()
      .typeError("Should be Number")
      .integer()
      .min(0, "Please Enter more than one")
      .required("Please Enter Number Of Supervise by you"),
  });
};

export default workExperienceFormShema;

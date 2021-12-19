import { object, SchemaOf, array } from 'yup';
import WorkExperienceFormShema from "./workExperienceFormShema";
import { WorkExperienceArray } from "../../@type/vaildation"

const WorkExperienceArrayShema = (): SchemaOf<WorkExperienceArray> => {
  return object().shape({
    workExperienceArray:
      array()
        .of(
          WorkExperienceFormShema().required("Please Enter new work Experience")
        )
        .min(1, "there is no new work Experinece")
        .required("Please Enter new work Experience"),
  });
};
export default WorkExperienceArrayShema;

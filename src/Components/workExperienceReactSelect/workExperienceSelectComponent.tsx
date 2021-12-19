
import Select from "react-select";
interface ISelect {
  label: string;
  value: string;
}
interface Iprops {
  setFieldTouched: (name: string, x: boolean) => {},
  value: string,
  setFieldValue: (name: string, value: any) => {},
  options: Array<ISelect>,
  name: string,
  placeholder: string,
  onBlur: Function
}
function WorkExperienceSelectComponent({
  value,
  setFieldValue,
  options,
  name,
  placeholder,
  onBlur,

}: Iprops) {
  return (
    <div>
      <Select
        className="select_work_experinece"
        placeholder={placeholder}

        isSearchable={true}
        onBlur={onBlur(name)}
        name={name}
        value={
          value[name] ? options.find((option=>option.value===(value as any).value)) : null
        }
        options={options}
        onChange={value => setFieldValue(name, (value as any).value)}

      />
    </div>
  );
};

export default WorkExperienceSelectComponent;

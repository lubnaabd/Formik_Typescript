import { useState, ChangeEvent } from "react";
interface Iprops {
  placeholder: string,
  className: string,
  field: { name: string, onBlur: Function, value: string },
  form: { setFieldValue: (name: string, value: string) => {} },
};

function DateInput(props: Iprops) {
  const { field: { name, onBlur, value },
    form: { setFieldValue }, placeholder, className } = props
  const [isFoucs, setIsFocus] = useState<boolean>(false);
  return (
    <input
      onFocus={() => setIsFocus(true)}
      value={value && value}
      className={className}
      type={isFoucs ? "date" : "text"}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value)}
      onBlur={onBlur(name)}
      placeholder={placeholder}
    />
  );
};

export default DateInput;

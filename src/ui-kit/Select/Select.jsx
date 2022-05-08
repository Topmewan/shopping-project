import React from "react";
import { default as ReactSelect } from "react-select";
import s from "./Select.module.scss";

const Select = ({
  value,
  onChange,
  onFocus,
  onBlur,
  options,
  styles,
  className,
}) => {
  return (
    <ReactSelect
      className={`${className}`}
      value={value}
      options={options}
      styles={styles}
      onChange={onChange}
      onFucus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Select;

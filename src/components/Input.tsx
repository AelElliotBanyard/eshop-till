import { InputProps } from "@/types";
import React from "react";

const Input = ({
  label,
  type,
  value,
  onChange,
  error,
  errorMessage,
}: InputProps) => {
  return (
    <div className="fullInput">
      <label>
        {label}
        {error ? <p className="error">{errorMessage}</p> : null}
      </label>
      <input className={"input "+(error? "error":"")} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;

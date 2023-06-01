import { CustomOption, CustomSelectProps } from "@/types";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CustomSelect = ({ label, options, onChange }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="customSelect" onClick={() => setOpen(!open)}>
      <div className="customSelectLabel">
        <p>{label}</p>
        <AiFillCaretDown className={"icon " + (open ? "open" : "")} size={16} />
      </div>
      <div className={"customSelectDropdown " + (open ? "open" : "closed")}>
        {options.map((option: CustomOption) => {
          return (
            <div
              onClick={() => {
                setOpen(false);
                onChange(option.value as string);
              }}
            >
              <option value={option.value}>{option.label}</option>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelect;

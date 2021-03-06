import React from "react";

type Props = {
  checked?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ checked, label, onChange }: Props) {
  return (
    <label className="m-1 cursor-pointer select-none">
      <input
        className="cursor-pointer"
        type="checkbox"
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        checked={checked}
      ></input>
      <span className="ml-1 font-light"> {label}</span>
    </label>
  );
}

export default Checkbox;

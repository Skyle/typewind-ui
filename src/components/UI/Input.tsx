import React, { useRef, useState } from "react";

type Props = {
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  color?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

function Input({
  name,
  value,
  onChange,
  color = "neutral",
  placeholder = "Hier Eingeben",
  type = "text",
  ...props
}: Props) {
  const [focus, setfocus] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className={"inline-block my-2"}>
      <div
        className={
          "relative border rounded shadow" +
          (color === "neutral"
            ? " border-neutral-800 dark:border-neutral-500 hover:border-neutral-700 dark:hover:border-neutral-600"
            : "") +
          (focus ? " ring-1 ring-neutral-500 ring-opacity-60" : "")
        }
      >
        <div
          onClick={(e) => {
            setfocus(true);
          }}
          className={
            "absolute cursor-pointer bg-neutral-50 transition-all text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300" +
            (focus === false
              ? " translate-x-4 translate-y-1.5"
              : " translate-x-2.5 -translate-y-2.5 text-xs")
          }
        >
          <label htmlFor={name} className="cursor-pointer">
            {placeholder}
          </label>
        </div>

        <div>
          <input
            onChange={(e) => {
              if (onChange) onChange(e);
            }}
            onFocus={(e) => {
              setfocus(true);
            }}
            onBlur={() => {
              if (value === "") {
                setfocus(false);
              } else {
                // do nothing
              }
            }}
            ref={inputRef}
            value={value}
            id={name}
            name={name}
            type={type}
            className={
              "cursor-pointer appearance-none focus:outline-none px-4 py-1.5 rounded bg-neutral-50 dark:bg-neutral-900"
            }
            {...props}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;

import React, { useRef, useState } from "react";

type Props = {
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  color?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  shadow?: boolean;
};

function Input({
  name,
  value,
  onChange,
  color = "neutral",
  placeholder = "Hier Eingeben",
  type = "text",
  shadow = true,
}: Props) {
  const [focus, setfocus] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="inline-block my-2 mx-1">
      <div
        className={
          "relative border rounded" +
          (color === "neutral"
            ? " border-neutral-500 dark:border-neutral-500 hover:border-neutral-600 dark:hover:border-neutral-400"
            : "") +
          (focus
            ? " ring-1 ring-neutral-500 dark:ring-neutral-500 ring-opacity-40 dark:ring-opacity-40"
            : "") +
          (shadow ? " shadow dark:shadow-none" : "")
        }
      >
        <div
          onClick={(e) => {
            setfocus(true);
          }}
          className={
            "absolute cursor-pointer bg-neutral-50 transition-all text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300" +
            (focus === true || value !== ""
              ? " translate-x-2.5 -translate-y-2.5 text-xs "
              : " translate-x-4 translate-y-1.5")
          }
        >
          <label htmlFor={name} className="cursor-pointer">
            {placeholder}
          </label>
        </div>

        <div>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            onFocus={(e) => {
              setfocus(true);
            }}
            onBlur={() => {
              setfocus(false);
            }}
            ref={inputRef}
            value={value}
            id={name}
            name={name}
            type={type}
            className={
              "cursor-pointer appearance-none focus:outline-none px-4 py-1.5 rounded bg-neutral-50 dark:bg-neutral-900"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Input;

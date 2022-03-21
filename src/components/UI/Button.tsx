import React, { useEffect, useState } from "react";

type Props = {
  children?: React.ReactChildren | string;
  onClick?: React.MouseEventHandler;
  color?: string;
  disabled?: boolean;
  fat?: boolean;
  shadow?: boolean;
};

function Button({
  children,
  onClick,
  color = "neutral",
  disabled = false,
  fat = false,
  shadow = true,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={
        "m-1 rounded px-4 py-1 shadow-sm active:ring-1 focus:ring-1 bg-neutral-50 leading-relaxed border focus:ring-opacity-40 active:ring-opacity-50" +
        (disabled === true
          ? " shadow-none border-neutral-300  hover:border-neutral-300 active:border-neutral-300  active:ring-neutral-400 focus:outline-none text-neutral-500 cursor-wait"
          : "") +
        (color === "neutral" && disabled === false
          ? "  border-neutral-500 hover:border-neutral-600 active:border-neutral-700  active:ring-neutral-400 focus:outline-none text-neutral-900 focus:ring-neutral-300"
          : "") +
        (color === "neutral" && disabled === false && shadow
          ? " shadow-neutral-500"
          : "") +
        (color === "green" && disabled === false
          ? " border-lime-500 hover:border-lime-600 active:border-lime-700  active:ring-lime-400 focus:outline-none text-lime-600 focus:ring-lime-300"
          : "") +
        (color === "green" && disabled === false && shadow
          ? " shadow-lime-600"
          : "") +
        (color === "blue" && disabled === false
          ? " border-sky-500 hover:border-sky-600 active:border-sky-700  active:ring-sky-400 focus:outline-none text-sky-600 focus:ring-sky-300"
          : "") +
        (color === "blue" && disabled === false && shadow
          ? " shadow-sky-600"
          : "") +
        (color === "red" && disabled === false
          ? " border-rose-500 hover:border-rose-600 active:border-rose-700  active:ring-rose-400 focus:outline-none text-rose-600 focus:ring-rose-300"
          : "") +
        (color === "red" && disabled === false && shadow
          ? " shadow-rose-600"
          : "")
      }
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {children ? children : "Button"}
    </button>
  );
}

export default Button;

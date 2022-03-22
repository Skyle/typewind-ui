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
        "m-1 rounded px-4 py-1 shadow-sm dark:shadow-none active:ring-1 focus:ring-1 bg-neutral-50 dark:bg-neutral-900 leading-relaxed border focus:ring-opacity-40 active:ring-opacity-50 dark:focus:ring-opacity-40 dark:active:ring-opacity-50" +
        (disabled === true
          ? " shadow-none border-neutral-300 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-700 active:border-neutral-300 dark:active:border-neutral-700   focus:outline-none text-neutral-500 dark:text-neutral-600 cursor-wait"
          : "") +
        // neutral
        (color === "neutral" && disabled === false
          ? " border-neutral-500 hover:border-neutral-600 dark:hover:border-neutral-400 active:border-neutral-700 dark:active:border-neutral-300 active:ring-neutral-400 dark:active:ring-neutral-600 focus:outline-none text-neutral-900 dark:text-neutral-50 focus:ring-neutral-300 dark:focus:ring-neutral-700"
          : "") +
        (color === "neutral" && disabled === false && shadow
          ? " shadow-neutral-500 dark:shadow-none"
          : "") +
        // green
        (color === "green" && disabled === false
          ? " border-lime-500 hover:border-lime-600 dark:hover:border-lime-400 active:border-lime-700 dark:active:border-lime-300 active:ring-lime-400 dark:active:ring-lime-600 focus:outline-none text-lime-600 dark:text-lime-400 focus:ring-lime-300 dark:focus:ring-lime-700"
          : "") +
        (color === "green" && disabled === false && shadow
          ? " shadow-lime-600 dark:shadow-none"
          : "") +
        // blue
        (color === "blue" && disabled === false
          ? " border-sky-500 hover:border-sky-600 dark:hover:border-sky-400 active:border-sky-700 dark:active:border-sky-300 active:ring-sky-400 dark:active:ring-sky-600 focus:outline-none text-sky-600 dark:text-sky-400 focus:ring-sky-300 dark:focus:ring-sky-700"
          : "") +
        (color === "blue" && disabled === false && shadow
          ? " shadow-sky-600 dark:shadow-none"
          : "") +
        // red
        (color === "red" && disabled === false
          ? " border-rose-500 hover:border-rose-600 dark:hover:border-rose-400 active:border-rose-700 dark:active:border-rose-300  active:ring-rose-400 dark:active:ring-rose-600 focus:outline-none text-rose-600 dark:text-rose-500 focus:ring-rose-300 dark:focus:ring-rose-700"
          : "") +
        (color === "red" && disabled === false && shadow
          ? " shadow-rose-600 dark:shadow-none"
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

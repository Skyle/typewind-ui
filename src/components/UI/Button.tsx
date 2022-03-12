import React, { useEffect, useState } from "react";

type Props = {
  children?: React.ReactChildren;
  onClick?: React.MouseEventHandler;
  color?: string;
};

function Button({ children, onClick, color }: Props) {
  return (
    <button
      className={
        "appearance-none select-none shadow dark:shadow-none rounded border px-4 py-1 bg text" +
        (color === "green" ? "" : "") +
        (color === undefined ? " " : "")
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

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
        "button-base" +
        (color === "green" ? " border-green bg-green" : "") +
        (color === "red" ? " border-red bg-red" : "") +
        (color === undefined ? " border-neutral bg-neutral" : "")
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

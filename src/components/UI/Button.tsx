import React from "react";

type Props = {
  children?: React.ReactChildren;
  onClick?: React.MouseEventHandler;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      className="rounded border px-4 py-1"
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {children ? children : "Button"}
    </button>
  );
}

export default Button;

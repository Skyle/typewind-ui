import React, { useEffect, useState } from "react";

type Props = {
  children?: React.ReactChildren | string;
  onClick?: React.MouseEventHandler;
  color?: string;
  loading?: boolean;
};

function Button({
  children,
  onClick,
  color = "neutral",
  loading = false,
}: Props) {
  return (
    <button
      disabled={loading}
      className={
        "m-1 rounded px-4 py-1 bg-neutral-50 text-neutral-900 leading-relaxed border-2 border-neutral-500 hover:border-neutral-600"
      }
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {loading ? "Lädt..." : children ? children : "Button"}
    </button>
  );
}

export default Button;

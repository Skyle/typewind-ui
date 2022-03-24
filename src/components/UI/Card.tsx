import React from "react";

type Props = { children: React.ReactNode; title?: string };

function Card({ children, title }: Props) {
  return (
    <div className="border p-4 rounded shadow max-w-xl">
      <div className="text-2xl pb-4">{title}</div>
      {children}
    </div>
  );
}

export default Card;

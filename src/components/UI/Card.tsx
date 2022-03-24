import React from "react";

type Props = { children: React.ReactNode };

function Card({ children }: Props) {
  return <div className="border p-4 rounded">{children}</div>;
}

export default Card;

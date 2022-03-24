import React from "react";

type Props = { children: React.ReactNode };

function Title({ children }: Props) {
  return <div className="pb-2 text-xl">{children}</div>;
}

export default Title;

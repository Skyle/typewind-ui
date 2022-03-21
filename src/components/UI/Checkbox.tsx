import React from "react";

type Props = { checked: boolean };

function Checkbox({ checked }: Props) {
  return <input type="checkbox" checked={checked}></input>;
}

export default Checkbox;

import React from "react";

type Props = {
  name: string;
  value: Item;
  onChange: (item: Item) => void;
  items: Item[];
};

export type Item = {
  value: string;
  text: string;
};

function Menu({ name, value, onChange, items }: Props) {
  return (
    <select
      className="border border-neutral-600 rounded appearance-none shadow px-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 py-1 bg-neutral-50 text-neutral-600 cursor-pointer"
      value={value.value}
      onChange={(e) => {
        onChange(items.find((item) => item.value === e.target.value)!);
      }}
      name={name}
      id={name}
    >
      {items.map((item) => (
        <option key={item.text} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}

export default Menu;

import React from "react";

type Props = {
  name: string;
  value: MenuItem;
  onChange: (item: MenuItem) => void;
  items: MenuItem[];
};

export type MenuItem = {
  value: string;
  text: string;
};

function Menu({ name, value, onChange, items }: Props) {
  return (
    <div className="inline-block m-1 relative text-neutral-700 dark:text-neutral-300">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-inherit">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      <select
        className="border py-1 border-neutral-500 dark:border-neutral-500 hover:border-neutral-600 dark:hover:border-neutral-400 rounded appearance-none shadow dark:shadow-none px-4 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:focus:ring-neutral-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 bg-neutral-50 dark:bg-neutral-900 cursor-pointer"
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
    </div>
  );
}

export default Menu;

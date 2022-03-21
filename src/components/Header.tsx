import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="text-center pb-8 grid justify-center">
      <h1 className="text-5xl font-extralight py-4">Typewind UI</h1>
      <div className="relative">
        <h2 className="text-xl font-light pb-2">React UI Component Library</h2>
      </div>

      <div className="font-light">
        <ul className="">
          <li>minimalistic styling with tailwindcss</li>
          <li>build with Typescript</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

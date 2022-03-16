import { useState } from "react";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [password, setpassword] = useState("");
  const [alter, setalter] = useState("");

  return (
    <div>
      <header className="text-center pb-8 grid justify-center">
        <h1 className="text-5xl font-extralight py-4">Typewind UI</h1>
        <div className="relative">
          <h2 className="text-xl font-light pb-2">
            React UI Component Exhibition
          </h2>
          <div className="absolute -right-24 -top-1  text-sm font-extralight">
            * maybe Library
          </div>
        </div>

        <div className="font-light">
          <ul className="">
            <li>minimalistic styling with tailwindcss</li>
            <li>build with Typescript</li>
          </ul>
        </div>
      </header>
      <main className="px-2">
        <section className="mx-auto max-w-xl pb-8">
          <h3 className="w-full pb-2">Buttons</h3>
          <div className="flex flex-wrap space-x-2">
            <Button></Button>
            <Button color="green"></Button>
            <Button color="red"></Button>
          </div>
        </section>
        <section className="mx-auto max-w-xl">
          <h3 className="w-full pb-2">Input</h3>
          <div className="grid">
            <div>
              <Input
                value={inputtext}
                onChange={(e) => {
                  setinputtext(e.target.value);
                }}
                placeholder="Benutzername"
                name="username"
              />
            </div>

            <div>
              <Input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                placeholder="Passwort"
                name="password"
              />
            </div>
            <div>
              <Input
                value={alter}
                onChange={(e) => {
                  setalter(e.target.value);
                }}
                type="number"
                placeholder="Alter"
                name="alter"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

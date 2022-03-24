import React, { useState } from "react";
import Input from "./UI/Input";

type Props = {};

function InputSection({}: Props) {
  const [inputtext, setinputtext] = useState("");
  const [password, setpassword] = useState("");
  const [alter, setalter] = useState("");
  return (
    <section className="md:flex justify-center md:space-x-4">
      <div>
        <h3 className="w-full pb-2 text-xl">Input</h3>
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
      </div>
      <div className="font-light max-w-sm pt-4 md:p-10">
        Eingabefelder können in Forms eingebunden werden und schwenken ihren
        Placeholder bei Eingabe aus dem Weg.
        {(inputtext !== "" || password !== "" || alter !== "") && (
          <div className="pt-2">
            {JSON.stringify({
              text: inputtext,
              password: password,
              number: alter,
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default InputSection;

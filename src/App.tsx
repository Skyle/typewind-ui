import { useState } from "react";
import ButtonSection from "./components/ButtonSection";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Menu, { Item } from "./components/UI/Menu";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [password, setpassword] = useState("");
  const [alter, setalter] = useState("");

  return (
    <div>
      <Header></Header>
      <main className="px-2 grid gap-8 justify-items-center">
        <div>
          <ButtonSection></ButtonSection>
        </div>
        <div>
          <section className="mx-auto">
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
        </div>
        <div>
          <MenuSection></MenuSection>
        </div>
      </main>
    </div>
  );
}

export default App;

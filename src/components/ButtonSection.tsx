import React, { useState } from "react";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

type Props = {};

function ButtonSection({}: Props) {
  const [disabletest, setDisabletest] = useState(false);
  const [fat, setFat] = useState(false);
  const [shadow, setShadow] = useState(true);
  return (
    <section className="">
      <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
        <div className="">
          <h3 className="pb-2">Buttons</h3>
          <div className="flex flex-wrap">
            <Button shadow={shadow}>Klick Mich</Button>
            <Button color="green" shadow={shadow}></Button>
            <Button color="blue" shadow={shadow}></Button>
            <Button disabled={true}></Button>
            <Button
              disabled={disabletest}
              onClick={() => {
                setDisabletest(true);
                setTimeout(() => {
                  setDisabletest(false);
                }, 1000);
              }}
              color="red"
              shadow={shadow}
            >
              Nicht Klicken
            </Button>
          </div>
        </div>
        <div className="">
          <div className="font-light">
            Buttons kommen in drei Varianten. Plus einem Design für{" "}
            <code className="inline">disabled=true</code> und einer Farbe für
            gefährliche Aktionen.
          </div>
          <div>
            <Checkbox
              label="Schatten"
              onChange={(e) => {
                console.log(e.target.checked);

                setShadow(e.target.checked);
              }}
              checked={shadow}
            ></Checkbox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonSection;

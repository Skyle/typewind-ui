import React, { useState } from "react";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

type Props = {};

function ButtonSection({}: Props) {
  const [disabletest, setDisabletest] = useState(false);
  const [fat, setFat] = useState(false);
  const [globalDisable, setGlobalDisable] = useState(false);
  const [shadow, setShadow] = useState(true);
  const [clickCounter, setClickCounter] = useState(0);
  return (
    <section className="">
      <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
        <div className="">
          <h3 className="pb-2">Buttons</h3>
          <div className="flex flex-wrap">
            <Button
              onClick={() => {
                setClickCounter(clickCounter + 1);
              }}
              shadow={shadow}
              disabled={globalDisable}
            >
              Klick Mich
            </Button>
            <Button
              color="green"
              onClick={() => {
                setClickCounter(clickCounter + 1);
              }}
              disabled={globalDisable}
              shadow={shadow}
            ></Button>
            <Button
              color="blue"
              onClick={() => {
                setClickCounter(clickCounter + 1);
              }}
              shadow={shadow}
              disabled={globalDisable}
            ></Button>
            <Button disabled={true}></Button>
            <Button
              disabled={disabletest || globalDisable}
              onClick={() => {
                setDisabletest(true);
                if (clickCounter < 0) {
                  setClickCounter(clickCounter - 20);
                } else {
                  setClickCounter(-20);
                }
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
              label="shadow"
              onChange={(e) => {
                setShadow(e.target.checked);
              }}
              checked={shadow}
            ></Checkbox>
          </div>
          <div>
            <Checkbox
              label="disabled"
              onChange={(e) => {
                setGlobalDisable(e.target.checked);
              }}
              checked={globalDisable}
            ></Checkbox>
          </div>
          <div className="font-extralight">
            {clickCounter !== 0 && clickCounter !== 1 && (
              <div>{clickCounter} Klicks</div>
            )}
            {clickCounter === 1 && <div>Dein erster Klick!</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonSection;

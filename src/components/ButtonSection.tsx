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
    <section>
      <div className="md:flex justify-center md:space-x-4">
        <div className="">
          <div className="max-w-sm">
            <h3 className="pb-2 text-xl">Buttons</h3>
            <div className="flex flex-wrap">
              <Button
                onClick={() => {
                  setClickCounter(clickCounter + 1);
                }}
                shadow={shadow}
                disabled={globalDisable}
              >
                Neutral
              </Button>
              <Button
                color="green"
                onClick={() => {
                  setClickCounter(clickCounter + 1);
                }}
                disabled={globalDisable}
                shadow={shadow}
              >
                Green
              </Button>
              <Button
                color="blue"
                onClick={() => {
                  setClickCounter(clickCounter + 1);
                }}
                shadow={shadow}
                disabled={globalDisable}
              >
                Blue
              </Button>
              <Button disabled={true}>Disabled</Button>
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
                Red (nicht klicken)
              </Button>
            </div>
            <div className="font-extralight">
              {clickCounter !== 0 && clickCounter !== 1 && (
                <div>{clickCounter} Klicks</div>
              )}
              {clickCounter === 1 && <div>Dein erster Klick!</div>}
            </div>
          </div>
        </div>
        <div className="pt-4 md:p-8">
          <div className="max-w-sm">
            <p className="font-light">
              Buttons kommen in drei Varianten. Plus einem Design für{" "}
              <code className="inline">disabled=true</code> und einer Farbe für
              gefährliche Aktionen.
            </p>
            <p className="font-light">
              Alle Komponenten lassen sich duch verschiedene Properties
              modifizieren.
            </p>
            <div className="pt-2">
              <div>
                <Checkbox
                  label="Schatten"
                  onChange={(e) => {
                    setShadow(e.target.checked);
                  }}
                  checked={shadow}
                ></Checkbox>
              </div>
              <div>
                <Checkbox
                  label="disable Buttons"
                  onChange={(e) => {
                    setGlobalDisable(e.target.checked);
                  }}
                  checked={globalDisable}
                ></Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonSection;

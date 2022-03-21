import React, { useState } from "react";
import Button from "./UI/Button";

type Props = {};

function ButtonSection({}: Props) {
  const [disabletest, setDisabletest] = useState(false);
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div>
        <h3 className="pb-2">Buttons</h3>
        <div className="flex flex-wrap">
          <Button>Klick Mich</Button>
          <Button color="green"></Button>
          <Button
            loading={disabletest}
            onClick={() => {
              setDisabletest(true);
              setTimeout(() => {
                setDisabletest(false);
              }, 1000);
            }}
            color="red"
          >
            Nicht Klicken
          </Button>
          <Button loading={true}></Button>
        </div>
      </div>
      <div>Buttoneinstellungen</div>
    </section>
  );
}

export default ButtonSection;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./UI/Button";
import Card from "./UI/Card";
import List, { Item } from "./UI/List";
import Title from "./UI/Title";
import ukpic from "../bilder/uk.jpg";

type Props = {};
const basicList: Array<Item> = [
  {
    id: uuidv4(),
    title: "Erster Eintrag",
    text: "macht Sachen in Skandinavien.",
  },
  {
    id: uuidv4(),
    title: "Justus der Zweite",
    text: "Auch ein hinterer Platz schreckt ihn nicht zurück.",
  },
  {
    id: uuidv4(),
    title: "Justus der Zwese",
    text: "Auch ein hinterer Platz schreckt ihn nicht zurück. Und noch ein etwas längerer Text",
  },
  {
    id: uuidv4(),
    text: "optionaler Titel.",
  },
  {
    id: uuidv4(),
    text: "optionaler Titel.",
  },
  {
    id: uuidv4(),
    text: "optionaler Titel.",
  },
  {
    id: uuidv4(),
    text: "optionaler Titel.",
  },
  {
    id: uuidv4(),
    title: "nur tttttttt.",
  },
  {
    id: uuidv4(),
    title: "nur tttttttt.",
  },
  {
    id: uuidv4(),
    title: "optionaler Titel.",
  },
];
function ListSection({}: Props) {
  const [list, setList] = useState<Array<Item>>(basicList);
  return (
    <div>
      <Card title="Card">
        <div className="font-light">
          Karten ermöglichen es einem Informationen herauszustellen. Durch Text,
          Bilder und weitere Komponenten.
        </div>
        <div className="-mx-4 pt-4">
          <img src={ukpic} alt="" />
        </div>
        {list.length !== 0 && (
          <div className="pt-4">
            <List
              items={list}
              onDelete={(neueListe: Array<Item>) => {
                setList(neueListe);
                console.log(neueListe);
              }}
            />
          </div>
        )}

        <div className="pt-4">
          <Button
            color="green"
            onClick={() => {
              setList(basicList);
            }}
          >
            Liste Erneuern
          </Button>
          <Button
            color="red"
            onClick={() => {
              setList([]);
            }}
          >
            Alle Items löschen
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ListSection;

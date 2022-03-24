import React, { useState } from "react";
import { List } from "./UI/List";
import ListItem from "./UI/ListItem";

type Props = {};

function ListSection({}: Props) {
  const [list, setList] = useState<List>({
    items: [
      { title: "Erster Eintrag", text: "macht Sachen in Skandinavien." },
      {
        title: "Justus der Zweite",
        text: "Auch ein hinterer Platz schreckt ihn nicht zurück.",
      },
      {
        title: "Justus der Zwese",
        text: "Auch ein hinterer Platz schreckt ihn nicht zurück.",
      },
    ],
  });
  return <div></div>;
}

export default ListSection;

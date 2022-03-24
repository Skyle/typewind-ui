import React from "react";
import ListItem, { Item } from "./ListItem";

type Props = { list: List; onChange: Function };

export type List = { items: Item[] };

function List({ list, onChange }: Props) {
  return (
    <div>
      {list.items.map((item) => (
        <ListItem item={item}></ListItem>
      ))}
    </div>
  );
}

export default List;

import React from "react";

type Props = { item: Item };
export type Item = { title: string; text: string };

function ListItem({ item }: Props) {
  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="text-xl">{item.title}</div>
      <div className="font-light">{item.text}</div>
    </div>
  );
}

export default ListItem;

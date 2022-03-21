import React, { useState } from "react";
import Menu, { Item } from "./UI/Menu";

type Props = {};

function MenuSection({}: Props) {
  const [items] = useState<Item[]>([
    { value: "react", text: "React" },
    { value: "vue", text: "Vue" },
    { value: "angular", text: "Angular" },
    { value: "svelte", text: "Svelte" },
    { value: "vanilla", text: "Pure DOM" },
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  return (
    <section className="">
      <h3 className="w-full pb-2">Menu</h3>
      <div className="flex flex-wrap space-x-2">
        <Menu
          items={items}
          name="Menu"
          value={selectedItem}
          onChange={(value: any) => {
            setSelectedItem(value);
          }}
        ></Menu>
      </div>
    </section>
  );
}

export default MenuSection;

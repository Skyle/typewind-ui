import React, { useState } from "react";
import Menu, { MenuItem } from "./UI/Menu";

type Props = {};

function MenuSection({}: Props) {
  const [items] = useState<MenuItem[]>([
    { value: "react", text: "React" },
    { value: "vue", text: "Vue" },
    { value: "angular", text: "Angular" },
    { value: "svelte", text: "Svelte" },
    { value: "vanilla", text: "Pure DOM" },
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedfuse, setSelectedfuse] = useState(false);
  return (
    <section className="md:flex justify-center md:space-x-4">
      <div className="pb-4 md:pb-0">
        <h3 className=" pb-2 text-xl">Menu</h3>
        <div className="flex flex-wrap space-x-2">
          <Menu
            items={items}
            name="Menu"
            value={selectedItem}
            onChange={(value: any) => {
              setSelectedfuse(true);
              setSelectedItem(value);
            }}
          ></Menu>
        </div>
      </div>
      <div className="font-light md:p-10 max-w-sm">
        Menus nehmen ein Array aus Items an und geben bei Veränderung das
        ausgewählt Item zurück.
        {selectedfuse && (
          <div className="pt-2">{JSON.stringify(selectedItem)}</div>
        )}
      </div>
    </section>
  );
}

export default MenuSection;

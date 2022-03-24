import Card from "./Card";

type Props = {
  items: Array<Item>;
  onDelete?: (items: Array<Item>) => void;
};
export type Item = { id: string; title?: string; text?: string };

function List({ items, onDelete }: Props) {
  return (
    <div>
      <div className="grid gap-2">
        {items.map((item) => (
          <div className="flex items-center max-w-lg" key={item.id}>
            <div className="flex-grow">
              <div className="text-xl">{item.title}</div>
              <p className="font-light">{item.text}</p>
            </div>
            <div
              className="m-2 ml-4 cursor-pointer"
              onClick={(e) => {
                if (onDelete) {
                  onDelete(items.filter((element) => element.id !== item.id));
                }
              }}
            >
              🗑
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

import { useCallback, useState } from "react";

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;
        e.currentTarget.value = "";

        setLista((old) => {
          if (old.some((listItem) => listItem.title === value)) return old;

          return [
            ...old,
            {
              title: value,
              isSelected: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>{lista.filter((listItem) => listItem.isSelected).length}</p>

      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.title}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() =>
                  setLista((old) => {
                    return old.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isSelected
                          : oldListItem.isSelected;
                      return {
                        ...oldListItem,
                        isSelected: newIsSelected,
                      };
                    });
                  })
                }
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

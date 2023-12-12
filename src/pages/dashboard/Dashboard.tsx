import { useCallback, useState } from "react";

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>([
    "teste1",
    "teste2",
    "teste3",
    "teste4",
  ]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;
        e.currentTarget.value = "";

        setLista((old) => {
          if (old.includes(value)) return old;

          return [...old, value];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />

      <ul>
        {lista.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

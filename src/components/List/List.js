import shortid from "shortid";
import { useState } from "react";
import Column from "./Column";
import ColumnForm from "./ColumnForm";
import styles from "./List.module.scss";
function List() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: "Books",
      icon: "book",
      cards: [
        { id: 1, title: "This is Going to Hurt" },
        { id: 2, title: "Interpreter of Maladies" },
      ],
    },
    {
      id: 2,
      title: "Movies",
      icon: "film",
      cards: [
        { id: 1, title: "Harry Potter" },
        { id: 2, title: "Star Wars" },
      ],
    },
    {
      id: 3,
      title: "Games",
      icon: "gamepad",
      cards: [
        { id: 1, title: "The Witcher" },
        { id: 2, title: "Skyrim" },
      ],
    },
  ]);

  const addColumn = ({ title, icon }) => {
    setColumns((prevState) => [
      ...prevState,
      { id: shortid(), title, icon, cards: [] },
    ]);
  };

  const addCard = (text, columnID) => {
    setColumns((prevState) =>
      prevState.map((column) => {
        if (column.id === columnID)
          return {
            ...column,
            cards: [...column.cards, { id: shortid(), title: text }],
          };
        else return column;
      })
    );
  };

  return (
    <div>
      <header className={styles.header}>
        <p className={styles.title}>
          Things to do <span>soon</span>
        </p>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            columnTitle={column.title}
            icon={column.icon}
            cards={column.cards}
            addCard={addCard}
          />
        ))}
        <ColumnForm action={addColumn} />
      </section>
    </div>
  );
}
export default List;

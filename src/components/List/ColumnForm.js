import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";
import { addColumn } from "../../redux/columnsReducer";

function ColumnForm({ listId }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label htmlFor="title">Text:</label>
      <TextInput
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="icon">Icon:</label>
      <TextInput
        id="icon"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
}

export default ColumnForm;

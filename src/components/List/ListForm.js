import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";
import { addList } from "../../redux/store";

function ListForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label htmlFor="title">Text:</label>
      <TextInput
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <TextInput
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </form>
  );
}

export default ListForm;

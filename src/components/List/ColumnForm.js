import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";
function ColumnForm(props) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title, icon });
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

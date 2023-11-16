import styles from "./TextInput.module.scss";

function TextInput({ placeholder, id, value, onChange }) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      type="text"
    />
  );
}

export default TextInput;

import styles from "./TextInput.module.scss";
function TextInput({ placeholder }) {
  return (
    <input placeholder={placeholder} className={styles.input} type="text" />
  );
}

export default TextInput;

import TextInput from "./TextInput/TextInput";
import Button from "./Button/Button";
import styles from "./SearchForm.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addSearchString } from "../redux/store";

function SearchForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearchString(inputText));
    setInputText("");
  };

  return (
    <form onSubmit={handelSubmit} className={styles.searchForm}>
      <TextInput
        onChange={(e) => {
          setInputText(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
}

export default SearchForm;

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CardForm({ columnId }) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CARD", payload: { columnId, title: inputText } });
    setInputText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button>ADD CARD</Button>
    </form>
  );
}

export default CardForm;

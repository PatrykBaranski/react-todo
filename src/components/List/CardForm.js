import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
function CardForm({ actionHandler, columnId }) {
  const [inputText, setInputText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    actionHandler(inputText, columnId);
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
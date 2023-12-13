import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";

function CardForm({ columnId }) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId, title: inputText }));
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

import React from "react";
import Input from "../../../shared/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAdd }) => {
  const inputRef = React.useRef();
  const [valid, setValid] = React.useState(true);

  const InputObj = {
    id: "amount_" + id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setValid((prevState) => !prevState);
    }

    onAdd(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input ref={inputRef} label="Amount" input={InputObj} />
      <button>+ Add</button>
      {!valid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

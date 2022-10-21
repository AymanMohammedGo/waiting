import { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectValue, setSelectValue] = useState("null");
  const [isvalid, setIsValid] = useState(true);

  const NameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const ServiceInputChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue, selectValue);
    setEnteredValue("");
    setSelectValue("null");
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isvalid ? "invalid" : ""}`}>
          <label>Client Name</label>
          <input
            value={enteredValue}
            type="text"
            onChange={NameInputChangeHandler}
          />
        </div>
        <div className={`form-control`}>
          <label>Service Name</label>
          <select value={selectValue} onChange={ServiceInputChangeHandler}>
            <option value="cheshore">cheshore</option>
            <option value="pedicure">pedicure</option>
            <option value="null"></option>
          </select>
        </div>
        <button className="button" type="submit">
          Add Goal
        </button>
      </form>
    </>
  );
};
export default InputForm;

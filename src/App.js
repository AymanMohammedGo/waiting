import React, { useState } from "react";

import "./App.css";
import InputForm from "./components/InputForm";
import ViewData from "./components/ViewData";

const App = () => {
  const [date, setData] = useState([
    { name: "Ayman", service: "cheshore", id: "1" },
    { name: "Mohammed", service: "pedicure", id: "2" },
    { name: "Ayman1", service: "cheshore", id: "3" },
    { name: "Mohammed1", service: "pedicure", id: "4" },
    { name: "Ayman2", service: "cheshore", id: "5" },
    { name: "Mohammed2", service: "pedicure", id: "6" },
  ]);

  const addHandler = (enteredValue, selectValue) => {
    setData((prevData) => {
      const updated = [...prevData];
      updated.push({
        name: enteredValue,
        service: selectValue,
        id: Math.random().toString(),
      });
      return updated;
    });
  };
  const deleteItemHandler = (goalId) => {
    setData((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (date.length > 0) {
    content = <ViewData items={date} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <>
      <section id="goal-form">
        <InputForm onAddGoal={addHandler} />
      </section>
      <section id="goals">{content}</section>
    </>
  );
};

export default App;

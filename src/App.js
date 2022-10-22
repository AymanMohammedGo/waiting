import React, { useState } from "react";

import "./App.css";
import InputForm from "./components/InputForm";
import ViewData from "./components/ViewData";

const App = () => {
  const [data, setData] = useState([]);

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
  let content = <p style={{ textAlign: "center" }}>لايوجد اي حجوزات</p>;

  if (data.length > 0) {
    content = <ViewData items={data} onDeleteItem={deleteItemHandler} />;
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

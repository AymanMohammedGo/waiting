import ItemsData from "./ItemsData";
import "./ViewData.css";
const ViewData = (props) => {
  const cheshore = props.items.filter((goal) => goal.service === "cheshore");
  const pedicure = props.items.filter((goal) => goal.service === "pedicure");
  let num = 0;
  let num1 = 0;
  return (
    <ul className="goal-list">
      <h1>cheshore</h1>
      {cheshore.map((goal) => (
        <ItemsData key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {`${++num} - ${goal.name}`}
        </ItemsData>
      ))}
      <h1>pedicure</h1>
      {pedicure.map((goal) => (
        <ItemsData key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {`${++num1} - ${goal.name}`}
        </ItemsData>
      ))}
    </ul>
  );
};
export default ViewData;

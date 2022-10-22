import { useState } from "react";
import ItemsData from "./ItemsData";
import "./ViewData.css";
const ViewData = (props) => {
  const services = Array.from(new Set(props.items.map((goal) => goal.service)));

  //   for (let index1 = 0; index1 < a.length; index1++) {
  //     //console.log(a[index1].id);
  //     <ItemsData
  //       key={a[index1].id}
  //       id={a[index1].id}
  //       onDelete={props.onDeleteItem}
  //     >
  //       {`${a[index1].name}`}
  //     </ItemsData>;
  //   }
  //   //console.log(a);
  // }

  // const cheshore = props.items.filter((goal) => goal.service === "cheshore");
  // const pedicure = props.items.filter((goal) => goal.service === "pedicure");
  let num = 0;
  // let num1 = 0;

  return (
    <ul className="goal-list">
      {/* {props.items.map(
        (goal) =>
          //props.items.filter((ele) => ele.service === goal.service)
          services[0] === goal.service && (
            <ItemsData key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
              {`${++num} - ${goal.name}`}
            </ItemsData>
          )
      )} */}
      {services.map((el) =>
        props.items.map(
          (goal) =>
            el === goal.service && (
              <ItemsData
                key={goal.id}
                id={goal.id}
                onDelete={props.onDeleteItem}
              >
                {`${++num} - ${goal.name} - ${goal.service}`}
              </ItemsData>
            )
        )
      )}

      {/*<h1>pedicure</h1>
      {pedicure.map((goal) => (
        <ItemsData key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {`${++num1} - ${goal.name}`}
        </ItemsData>
      ))} */}
    </ul>
  );
};
export default ViewData;

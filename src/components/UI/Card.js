import classes from "./Card.module.css";

import React from "react";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h3>{props.name}</h3>
      <div> {props.description}</div>
      <div> ${props.price.toFixed(2)}</div>
    </div>
  );
};

export default Card;

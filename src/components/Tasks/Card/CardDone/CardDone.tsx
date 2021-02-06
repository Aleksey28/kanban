import React from "react";
import { Card } from "react-bootstrap";
import { CardText } from "react-bootstrap-icons";
import classes from "../Card.module.css";

function CardDone({ id, title, price }: { id: string, title: string, price: number }) {

  return (
    <Card key={id}>
      <div className={classes.card}>
        <CardText/>
        <div className={classes.card__data}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </Card>
  );
}

export default CardDone;

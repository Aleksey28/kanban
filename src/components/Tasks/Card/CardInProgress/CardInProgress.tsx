import React from "react";
import { Button, Card } from "react-bootstrap";
import { CardText } from "react-bootstrap-icons";
import classes from "../Card.module.css";

function CardInProgress({ id, title, time }: { id: string, title: string, time: number }) {

  return (
    <Card key={id}>
      <div className={classes.card}>
        <CardText/>
        <div className={classes.card__data}>
          <p>{title}</p>
          <p>{time}</p>
        </div>
        <Button variant="success">Resolve</Button>
      </div>
    </Card>
  );
}

export default CardInProgress;

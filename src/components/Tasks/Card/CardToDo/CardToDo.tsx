import React from "react";
import { Button, Card } from "react-bootstrap";
import { CardText } from "react-bootstrap-icons";
import classes from "../Card.module.css"

function CardToDo({ id, title }: { id: string, title: string }) {

  return (
    <Card key={id}>
      <div className={classes.card}>
        <CardText/>
        <div className={classes.card__data}>
          <p>{title}</p>
        </div>
        <Button variant="primary">Start</Button>
      </div>
    </Card>
  );
}

export default CardToDo;

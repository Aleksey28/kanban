import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CardText from '../../icons/CardText';

interface TaskInterface {
  id: string,
  title: string,
  subtitle?: string,
  textButton?: string,
  variantButton?: string,
  onClickButton?: Function,
}

function Task({
  id, title, subtitle, textButton, variantButton, onClickButton,
}: TaskInterface) {
  const handleClickOnButton = () => {
    if (onClickButton) {
      onClickButton({ tskId: id, title, subtitle });
    }
  };

  return (
    <Card key={id} className="d-flex flex-row mb-2 align-items-center" style={{ minHeight: '80px' }}>
      <Card.Body className="d-flex p-2 align-self-start">
        <CardText className="mt-1 mr-2" />
        <div>
          <p className="font-weight-normal mb-3">
            {title}
          </p>
          <p className="font-weight-normal text-muted m-0">
            {subtitle}
          </p>
        </div>
      </Card.Body>
      {textButton
      && <Button variant={variantButton} className="mr-3" onClick={handleClickOnButton}>{textButton}</Button>}
    </Card>
  );
}

Task.defaultProps = {
  subtitle: '',
  textButton: '',
  variantButton: '',
  onClickButton: null,
};

export default Task;

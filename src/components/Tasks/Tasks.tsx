import React from 'react';
import { Container } from 'react-bootstrap';

interface TasksInterface {
  title: string,
  data: any,
  children?: React.ReactNode | undefined
}

function Tasks({ title, data, children }: TasksInterface) {
  return (
    <Container className="h-100 rounded-lg p-2 bg-secondary d-flex flex-column">
      <div className="d-flex text-white-50">
        <p
          className="d-flex  bg-dark rounded-circle justify-content-center align-items-center mr-1"
          style={{ width: '20px', height: '20px' }}
        >
          {data.length}
        </p>
        <h6>{title}</h6>
      </div>
      <div>
        {data}
      </div>
      {children}
    </Container>
  );
}

Tasks.defaultProps = {
  children: undefined,
};

export default Tasks;

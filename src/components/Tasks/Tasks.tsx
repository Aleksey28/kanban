import React from 'react';
import { Container } from 'react-bootstrap';

interface TasksInterface {
  title: string,
  data: any,
  children?: React.ReactNode | undefined
}

function Tasks({ title, data, children }: TasksInterface) {
  return (
    <Container
      className="h-100 rounded-lg bg-light px-3 d-flex flex-column"
      style={{ border: '2px solid #ecedef' }}
    >
      <div className="d-flex ml-1 mt-3">
        <p
          className="d-flex rounded-circle text-secondary justify-content-center align-items-center mr-2"
          style={{ width: '22px', height: '22px', backgroundColor: '#e4e7ee' }}
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

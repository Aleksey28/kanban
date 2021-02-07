import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Tasks from "../Tasks/Tasks";
import Plus from "../icons/Plus";
import Task from "../Tasks/Card/Task";

const PRICE_FOR_HOUR = 14;

const initialState = {
  toDo: [
    {
      id: "toDo1",
      title: "Build a house",
    },
    {
      id: "toDo2",
      title: "Plant a tree",
    },
  ],
  inProgress: [
    {
      id: "inProgress1",
      title: "Go to grocery",
      time: 1000,
    },
  ],
  done: [
    {
      id: "done1",
      title: "Take out the trash",
      price: 5.15,
    },
    {
      id: "done2",
      title: "Walk the dog",
      price: 11.87,
    },
  ],
};

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 60 / 60).toString().padStart(2, "0");
  const m = Math.floor(seconds / 60 % 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
};

function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function App() {

  const [stateToDo, setStateToDo] = useState<Array<{ id: string, title: string }>>(initialState.toDo);
  const [stateInProgress, setStateInProgress] = useState<Array<{ id: string, title: string, time: number }>>(
    initialState.inProgress);
  const [stateDone, setStateDone] = useState<Array<{ id: string, title: string, price: number }>>(initialState.done);
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleOpenAddNewTask = () => {
    setAddTaskIsOpen(true);
  };

  const handleCloseAddTask = () => {
    setAddTaskIsOpen(false);
  };

  const handleChangeNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newTask) {
      setStateToDo(prevState => [...prevState, {
        id: createUUID(),
        title: newTask,
      }]);
      setAddTaskIsOpen(false);
    }
  };

  const startTask = ({ id }: { id: string }) => {
    const data = stateToDo.find(item => item.id === id);
    if (!data) {
      return;
    }
    setStateInProgress((prev) => [...prev, {
      id: data.id,
      title: data.title,
      time: 0,
    }]);
    setStateToDo(stateToDo.filter(item => item.id !== id));
  };

  const resolveTask = ({ id }: { id: string }) => {
    const data = stateInProgress.find(item => item.id === id);
    if (!data) {
      return;
    }
    setStateDone((prev) => [...prev, {
      id: data.id,
      title: data.title,
      price: Number(data.time) / 60 / 60 * PRICE_FOR_HOUR,
    }]);
    setStateInProgress(stateInProgress.filter(item => item.id !== id));
  };

  useEffect(() => {
    window.clearInterval();
    const interval = window.setInterval(() => setStateInProgress(stateInProgress.map(item => ({
      ...item,
      time: item.time + 1,
    }))), 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, [stateInProgress]);

  const toDoListElements = stateToDo.map(item => (
    <Task key={item.id}
          id={item.id}
          title={item.title}
          textButton="Start"
          variantButton="primary"
          onClickButton={startTask}/>
  ));
  const inProgressListElements = stateInProgress.map(item => (
    <Task key={item.id}
          id={item.id}
          title={item.title}
          subtitle={formatTime(item.time)}
          textButton="Resolve"
          variantButton="success"
          onClickButton={resolveTask}
    />
  ));
  const doneListElements = stateDone.map(item => (
    <Task key={item.id} id={item.id} title={item.title} subtitle={`$${(item.price.toFixed(2)).toString()}`}/>
  ));

  return (
    <Container fluid className="d-flex flex-column bg-light vh-100 py-3">
      <h1 className="h1">Anyway Labs Test Project</h1>
      <p className="h2">Just some good deeds</p>
      <Row className="flex-grow-1">
        <Col>
          <Tasks title="To do" data={toDoListElements}>
            <Button type="button"
                    onClick={handleOpenAddNewTask}
                    variant="light"
                    className="mt-4 mx-auto font-weight-bold d-flex align-items-center">
              <Plus className="mr-1"/>
              New task
            </Button>
          </Tasks>
        </Col>
        <Col>
          <Tasks title="In progress" data={inProgressListElements}/>
        </Col>
        <Col>
          <Tasks title="Done" data={doneListElements}/>
        </Col>
      </Row>
      <Modal show={addTaskIsOpen} onHide={handleCloseAddTask}>
        <Modal.Header closeButton>
          <Modal.Title>New task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicNewTask">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={newTask} onChange={handleChangeNewTask} placeholder="Enter title"/>
            </Form.Group>
            <Button type="submit" variant="primary">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;

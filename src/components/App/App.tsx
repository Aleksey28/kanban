import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Tasks from "../Tasks/Tasks";
import Plus from "../icons/Plus";
import Task from "../Tasks/Card/Task";

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

function App() {

  const toDoListElements = initialState.toDo.map(item => (
    <Task id={item.id} title={item.title} textButton="Start" variantButton="primary" />
  ));
  const inProgressListElements = initialState.inProgress.map(item => (
    <Task id={item.id} title={item.title} subtitle={(item.time).toString()} textButton="Resolve" variantButton="success" />
  ));
  const doneListElements = initialState.done.map(item => (
    <Task id={item.id} title={item.title} subtitle={(item.price).toString()}/>
  ));

  return (
    <Container fluid className="d-flex flex-column bg-light vh-100 py-3">
      <h1 className="h1">Anyway Labs Test Project</h1>
      <p className="h2">Just some good deeds</p>
      <Row className="flex-grow-1">
        <Col>
          <Tasks title="To do" data={toDoListElements}>
            <Button type="button" variant="light" className="mt-4 mx-auto font-weight-bold d-flex align-items-center">
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
    </Container>
  );
}

// function App() {
//
//   const [value, setValue] = useState(0);
//   const [myInterval, setMyInterval] = useState(0);
//   const [isRunTimer, setIsRunTimer] = useState(false);
//
//   useEffect(() => {
//     const interval = window.setInterval(() => setValue((prev) => prev + 1), 1000 / INTERVAL);
//     setMyInterval(interval);
//     setIsRunTimer(true);
//     return () => {
//       window.clearInterval(interval);
//     };
//   }, []);
//
//   const stopTimer = () => {
//     if (isRunTimer) {
//       window.clearInterval(myInterval);
//       setIsRunTimer(false);
//     } else {
//       const interval = window.setInterval(() => setValue((prev) => prev + 1), 1000 / INTERVAL);
//       setMyInterval(interval);
//       setIsRunTimer(true);
//     }
//   };
//
//   const clearTimer = () => {
//     setValue(0);
//   };
//
//   return (
//     <div className="container-fluid align-items-center">
//       <h1 className="display-1">Timer:</h1>
//       <p className="display-1">
//         <span><kbd>{Math.floor(value / INTERVAL / 60 / 60)} : </kbd></span>
//         <span><kbd>{Math.floor(value / INTERVAL / 60) % 60} : </kbd></span>
//         <span><kbd>{Math.floor(value / INTERVAL) % 60} . </kbd></span>
//         <span><kbd>{value % INTERVAL < 10 ? "0" : ""}{value % INTERVAL}</kbd></span>
//       </p>
//       <div className="container-button">
//         <Button variant="success" onClick={stopTimer}>Stop</Button>
//         <Button variant="danger" onClick={clearTimer}>Clear</Button>
//       </div>
//     </div>
//   );
// }

export default App;

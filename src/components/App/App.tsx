import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import Tasks from "../Tasks/Tasks";
import CardToDo from "../Tasks/Card/CardToDo/CardToDo";
import CardInProgress from "../Tasks/Card/CardInProgress/CardInProgress";
import CardDone from "../Tasks/Card/CardDone/CardDone";

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
    <CardToDo id={item.id} title={item.title}/>
  ));
  const inProgressListElements = initialState.inProgress.map(item => (
    <CardInProgress id={item.id} title={item.title} time={item.time}/>
  ));
  const doneListElements = initialState.done.map(item => (
    <CardDone id={item.id} title={item.title} price={item.price}/>
  ));

  return (
    <Container>
      <h1 className="h1">Anyway Labs Test Project</h1>
      <p className="h2">Just some good deeds</p>
      <Row>
        <Col>
          <Tasks title="To do" data={toDoListElements}>
            <Button variant="light"
                    style={{
                      display: "block",
                      margin: "30px auto 0",
                      backgroundColor: "#fff",
                    }}><Plus/>New task</Button>
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Container, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  
  return (
    tasks.length > 0 && (
      <Container>
        <Button onClick={() => {dispatch(toggleHideDone())}}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  
)};

export default Buttons;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, fetchExampleTasks } from "../tasksSlice";
import { Container, Button } from "./styled";

const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  
  return (
      <Container>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </Button>
        {tasks.length > 0 && (
        <>
        <Button onClick={() => {dispatch(toggleHideDone())}}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={() => {dispatch(setAllDone())}}
        >
          Ukończ wszystkie
        </Button>
        </>
        )}
      </Container>
    
  
)};

export default Buttons;
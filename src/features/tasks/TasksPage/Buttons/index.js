import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, fetchExampleTasks, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone } from "../../tasksSlice";
import { Container, Button } from "./styled";

const Buttons = () => {
  const dispatch = useDispatch();
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  return (
    <Container>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => { dispatch(setAllDone()) }}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>


  )
};

export default Buttons;
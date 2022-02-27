import React from "react";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Container, Button } from "../Buttons/styled";

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Container>
    )
};

export default ButtonExampleTasks;
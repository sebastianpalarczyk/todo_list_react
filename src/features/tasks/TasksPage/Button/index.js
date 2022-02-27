import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Container, Button } from "../Buttons/styled";

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Container>
            <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
                {
                    loading
                        ? "Ładowanie..."
                        : "Pobierz przykładowe zadania"
                }
            </Button>
        </Container>
    );
};

export default ButtonExampleTasks;
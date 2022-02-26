import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (

        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania !!"}
                body={task ?
                    <>
                        <strong>Ukończono:</strong> {task.done ? "Tak 😀" : "Nie 😟"}
                    </>
                    :
                    <>
                        <strong>Bardzo nam przykro 😟😟</strong>
                    </>
                }
            />
        </Container>

    );
}

export default TaskPage;
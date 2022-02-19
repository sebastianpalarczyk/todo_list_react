import React, { useState } from "react";
import { FormContainer, Input, Button } from "./styled.js"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button> Dodaj zadanie </Button>
        </FormContainer>
    );
};

export default Form;
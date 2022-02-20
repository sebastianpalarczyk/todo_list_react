import React, { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled.js"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef= useRef("");

    const focusInput = () => {
        inputRef.current.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent;

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
                ref={inputRef}
            />
            <Button onClick={focusInput}> Dodaj zadanie </Button>
        </FormContainer>
    );
};

export default Form;
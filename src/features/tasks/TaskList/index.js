import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice.js";
import { List, Item, Content, Button } from "./styled.js";

const TaskList = ({removeTask, toggleTaskDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✓" : ""}</Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => removeTask(task.id)}
                    >🗑</Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { List, Item, Content, Button, LinkTask } from "./styled.js";

const TaskList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}</Button>
                    <Content done={task.done}>
                        <LinkTask to={`/zadania/${task.id}`}>{task.content}</LinkTask>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >🗑</Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;
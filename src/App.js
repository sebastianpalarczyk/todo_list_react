import React from "react";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import TechnologiesPage from "./features/TechnologiesPage";


const App = () => (

    <HashRouter basename="/todo_list_react">
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/zadania">Lista zadań</NavLink>
                </li>
                <li>
                    <NavLink exact to="/technologie">Technologie</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route exact path="/zadania">
                    <TasksPage />
                </Route>
                <Route exact path="/technologie">
                    <TechnologiesPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
)

export default App;
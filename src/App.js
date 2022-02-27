import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import TechnologiesPage from "./features/TechnologiesPage";
import { StyledNavLink } from "./styled";


const App = () => (

    <HashRouter basename="/todo_list_react">
        <nav>
            <ul>
                <li>
                    <StyledNavLink exact to="/zadania">Lista zadań</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink exact to="/technologie">Technologie</StyledNavLink>
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
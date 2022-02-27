import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import TechnologiesPage from "./features/TechnologiesPage";
import { Nav, List, Row, StyledNavLink} from "./common/Navigation/styled";


const App = () => (

    <HashRouter basename="/todo_list_react">
        <Nav>
            <List>
                <Row>
                    <StyledNavLink exact to="/zadania">Lista zadań</StyledNavLink>
                </Row>
                <Row>
                    <StyledNavLink exact to="/technologie">Technologie</StyledNavLink>
                </Row>
            </List>
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
        </Nav>
    </HashRouter>
)

export default App;
import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import TechnologiesPage from "./features/TechnologiesPage";
import Navigation from "./common/Navigation";
import { toTask, toTasks, toTechnologies } from "./routes";


const App = () => (

    <HashRouter>
        
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route exact path={toTasks()}>
                <TasksPage />
            </Route>
            <Route exact path={toTechnologies()}>
                <TechnologiesPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>

    </HashRouter>
)

export default App;
import React from "react";
import { HashRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Technologies from "./features/technologies/Technologies";


const App = () => (
    <HashRouter basename="/todo_list_react">
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/home">Strona główna</NavLink>
                </li>
                <li>
                    <NavLink exact to="/technologies">Technologie</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/home">
                    <Tasks />
                </Route>
                <Route path="/technologies">
                    <Technologies/>
                </Route>
            </Switch>
        </nav>
    </HashRouter>
)

export default App;
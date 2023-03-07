import TasksPage from "./features/tasks/tasksPage";
import TaskPage from "./features/tasks/taskPage";
import { NavLink, HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";

export default () => (
    <HashRouter basename="/todos-list-react">
    <nav>
        <ul>
            <li>
                <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/autor">O autorze</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </nav>
    </HashRouter>
)
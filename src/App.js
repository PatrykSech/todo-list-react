import TasksPage from "./features/tasks/tasksPage";
import TaskPage from "./features/tasks/taskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { Nav, StyledNavLink, NavItem } from "./styled";

export default () => (
    <HashRouter basename="/todos-list-react">
    <nav>
        <Nav>
            <NavItem>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </NavItem>
        </Nav>
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
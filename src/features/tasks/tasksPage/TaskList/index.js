import { Container, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../taskSlice";
import { Link, useLocation } from "react-router-dom";

const Tasks = () => {
    const location = useLocation();

    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query))
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Container>
        {tasks.map(task => (
            <Item
                key={task.index}
                hidden={task.done && hideDone}
            >
                <Button
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                    toggleDone
                >
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                </Content>
                <Button
                    remove
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </Container>
    )
};

export default Tasks;
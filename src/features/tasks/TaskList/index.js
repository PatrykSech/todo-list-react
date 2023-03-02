import { Container, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../taskSlice";

const Tasks = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                    {task.content}
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
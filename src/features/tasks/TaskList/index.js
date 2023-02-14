import { Container, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../taskSlice";

const Tasks = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                    onClick={() => removeTask(task.id)}
                    remove
                >
                    🗑
                </Button>
            </Item>
        ))}
    </Container>
    )
};

export default Tasks;
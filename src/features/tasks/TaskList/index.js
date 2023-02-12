import { Container, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <Container>
        {tasks.map(task => (
            <Item
                key={task.index}
                hidden={task.done && hideDone}
            >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
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
);

export default Tasks;
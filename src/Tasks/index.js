import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list__tasks">
        {tasks.map(task => (
            <li key={task.index}
                className = {`list__task ${task.done && hideDoneTasks ? " tasksItemHidden" : ""}`}>
                <button className="task_button-done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? " list__task--done" : ""}`}>{task.content}</span>
                <button className="task__button-remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;
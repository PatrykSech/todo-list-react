import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="list__tasks">
        {tasks.map(task => (
            <li key={task.index}
                className={`list__task ${task.done && hideDone ? " tasksItemHidden" : ""}`}>
                <button className="task_button-done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="task__button-remove">
                    🗑
                    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
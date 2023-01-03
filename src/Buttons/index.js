import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="container__event--buttons">
            <button className={`evenButton--left`}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="evenButton--right"
                disabled={tasks.every(({done}) => done)}>
                Ukończ wszytskie
            </button>
        </div>
));

export default Buttons;
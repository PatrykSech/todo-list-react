import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
        <div className="container__event--buttons">
            {tasks.lenght > 0 && (
            <>
            <button className={`evenButton--left`}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="evenButton--right"
                disabled={tasks.every(({done}) => done)}>
                Ukończ wszytskie
            </button>
            </>
            )}
        </div>
);

export default Buttons;
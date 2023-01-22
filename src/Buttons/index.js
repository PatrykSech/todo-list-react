import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setTasksDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick={toggleHideDone}
                className={`buttons__button`}
                >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setTasksDone}
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszytskie
            </button>
        </div>
    ));

export default Buttons;
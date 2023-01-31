import { Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setTasksDone }) => (
    tasks.length > 0 && (
        <>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setTasksDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszytskie
            </Button>
        </>
    ));

export default Buttons;
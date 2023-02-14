import { Button } from "./styled"
import {useSelector, useDispatch} from "react-redux";
import { selectTasks, toggleHideDone } from "../taskSlice";

const Buttons = ({ setTasksDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
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
        )
    )
}

export default Buttons;
import { Button } from "./styled"
import {useSelector, useDispatch} from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../taskSlice";

const Buttons = () => {
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
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytskie
                </Button>
            </>
        )
    )
}

export default Buttons;
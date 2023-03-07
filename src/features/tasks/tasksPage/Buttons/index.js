import { Button } from "./styled"
import {useSelector, useDispatch} from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, selectIsEveryTaskDone } from "../../taskSlice"

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

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
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszytskie
                </Button>
            </>
        )
    )
}

export default Buttons;
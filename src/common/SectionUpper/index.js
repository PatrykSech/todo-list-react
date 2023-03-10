import { Wrapper, Body, Tittle, Header, Button  } from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../features/tasks/taskSlice";


const SectionUpper = ({title, body, extraHeaderContent}) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Wrapper>
        <Header>
            <Tittle>
                {title}
                <Button disabled={loading === true} onClick={() => dispatch(fetchExampleTasks())}>
                    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
                </Button>
            </Tittle>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
    )
};
export default SectionUpper; 
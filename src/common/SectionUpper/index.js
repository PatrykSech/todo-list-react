import { Wrapper, Body, Tittle, Header, Button  } from "./styled"
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../features/tasks/taskSlice";


const SectionUpper = ({title, body, extraHeaderContent, content}) => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
        <Header>
            <Tittle>
                {title}
                <Button onClick={() => dispatch(fetchExampleTasks())}>
                    {content}
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
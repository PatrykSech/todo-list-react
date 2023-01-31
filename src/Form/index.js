import { useRef, useState } from "react";
import { Container, Input, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }
        setNewTaskContent("")

        if (newTaskContent.length !== 0) {
            addNewTask(newTaskContent.trim());
        };
    };

    return (
        <Container onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </Container>
    );
};

export default Form;
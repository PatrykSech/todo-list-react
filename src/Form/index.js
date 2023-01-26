import { useState } from "react";
import { Container, Input, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

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
        <Container
         onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </Container>
    );
};

export default Form;
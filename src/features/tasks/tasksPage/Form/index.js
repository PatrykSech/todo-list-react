import { useRef, useState } from "react";
import { StyledForm, Button } from "./styled"
import { useDispatch } from "react-redux"
import { addTask } from "../../taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }

        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: nanoid(),
        }))

        setNewTaskContent("")

        if (newTaskContent.length !== 0) {
            addTask(newTaskContent.trim());
        };
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
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
        </StyledForm>
    );
};

export default Form;
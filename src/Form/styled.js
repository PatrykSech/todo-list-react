import styled from "styled-components";

export const Container = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }
`

export const Button = styled.button`
    border: none;
    background-color: teal;
    padding: 11px 20px;
    color: #fff;
    transition: 0.5s;

    &:hover{
        transform: scale(1.05);
        background-color: hsl(180, 100%, 30%);
    }
`

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px 15px;
`
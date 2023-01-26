import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: teal;
    background-color: transparent;
    transition: 1s;
    padding: 15px 15px;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: grey;
    }

    @media (max-width: 767px){
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        padding-bottom: 15px;
    }
`
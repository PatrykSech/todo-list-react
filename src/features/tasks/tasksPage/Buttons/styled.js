import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    transition: 1s;
    padding: 15px 15px;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver}
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        padding: 10px 0;
    }
`
import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }
`

export const Button = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 11px 20px;
    color: ${({ theme }) => theme.color.white};
    transition: 0.5s;

    &:hover{
        transform: scale(1.05);
        filter: brightness(110%);
    }
`
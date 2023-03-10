import styled from "styled-components";

export const Wrapper = styled.section`
    -webkit-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
`
export const Body = styled.div`
    margin-top: 2px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 15px 20px;
    font-weight: 500;
`

export const Tittle = styled.h2`
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    margin: 10px 0px 0px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 5px;
    background-color: ${({ theme }) => theme.color.white};
    margin-top: 20px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    }
`
export const Button = styled.button`
    border: none;
    color: teal;
    background-color: transparent;
    font-size: 16px;
    transition: 1s;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver}
    }
`
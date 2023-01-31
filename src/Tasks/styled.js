import styled, {css} from "styled-components";

export const Container = styled.ul`
    padding: 0px;
    margin-top: 2px;
`

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    word-break: break-word;
    grid-gap: 20px;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    margin-bottom: 5px;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`

export const Button = styled.button`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.color.white};
    transition: filter 1s;

    ${({toggleDone}) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            filter: brightness(120%);
        }
    `}

    ${({remove}) => remove && css`
        background: ${({ theme }) => theme.color.crimson};

        &:hover {
            filter: brightness(80%);
        }
    `}

`
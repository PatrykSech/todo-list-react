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
    background-color: #fff;
    border-bottom: 1px solid #ddd;
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
    color: #fff;
    transition: background 1s;

    ${({toggleDone}) => toggleDone && css`
        background: hsl(120, 61%, 34%);

        &:hover {
            background: hsl(120, 61%, 39%);
        }
    `}

    ${({remove}) => remove && css`
        background: hsl(348, 83%, 52%);

        &:hover {
            background: hsl(348, 83%, 42%)
        }
    `}

`
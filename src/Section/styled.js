import styled from "styled-components";

export const Container = styled.section`
    -webkit-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
`
export const Render = styled.div`
    margin-top: 2px;
    background-color: #fff;
    padding: 15px 20px;
    font-weight: 500;
`

export const Header = styled.h2`
    padding: 15px 20px;
    background-color: #fff;
    font-size: 20px;
    margin: 10px 0px 0px;
`

export const Event = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    grid-gap: 5px;
    background-color: #fff;
    margin-top: 20px;

@media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    }
`
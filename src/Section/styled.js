import styled from "styled-components";

export const SectionContainer = styled.section`
    -webkit-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 0px 25px 0px rgba(204, 204, 204, 1);
`
export const SectionBody = styled.div`
    margin-top: 2px;
    background-color: #fff;
    padding: 15px 20px;
    font-weight: 500;
`

export const SectionHeader = styled.h2`
    padding: 15px 20px;
    background-color: #fff;
    font-size: 20px;
    margin: 10px 0px 0px;
`

export const SectionContents = styled.div`
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
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    padding: none;
    list-style-type: none;
    margin: 0 20px;

    &.active {
        font-weight: 800;
    }
`
export const Nav = styled.ul`
    display: flex;
    justify-content: center;
    background-color: teal;
    padding: 20px;
    margin: 0 0 40px;
`
export const NavItem = styled.li`
    list-style-type: none;
`

export const Main = styled.main`
    max-width: 800px;
    margin: auto;
    display: block;
`
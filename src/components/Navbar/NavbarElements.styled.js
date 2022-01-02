import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import '../../assets/css/font.css';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const NavLogo = styled(LinkR)`
    text-decoration: none;
    font-size: 1.4rem;
    font-family: 'Carter One', cursive;
    background: black;
    color: #f7f7f7;
    height: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em;

    span {
        color: #eb4034;
    }
`;

export const MobileIcon = styled.div`
    display: none;
`;

export const NavMenu = styled.ul`
    display: flex;
    margin-left: 40px;
`;

export const NavItem = styled.li`
    list-style: none;
`;

export const NavLinks = styled(LinkS)`
    color: black;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    margin: 0 1.4rem;
`;


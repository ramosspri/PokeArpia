import styled from 'styled-components';
import { GlobalStyle } from '../Global Style/globalStyles';

export const Menu = styled.li`
    background-color: var(--azul-claro);
    display: grid;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;    
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; 
`
export const TextoMenu = styled.span `   
    display: inline;
    color: var(--cinza);
    font-weight: bolder;
    font-size: 20px;
    padding-left: 10px;
`

export const TextIcons = styled.div `    
    padding-top: 10px;
    margin-top: 10px;
    display: inline;
`
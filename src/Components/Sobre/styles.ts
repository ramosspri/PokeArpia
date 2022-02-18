import styled from 'styled-components';
import { GlobalStyle } from '../Global Style/globalStyles';

export const Menu = styled.li`
    background-color: var(--azul-claro);
    display: grid;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;    
    /* position: fixed; */
    top: 0;
    left: 0;
    height: 100vh; 
    
    /* &:hover {
        opacity:0.7;
        background-color: var(--azulescuro);
    } */
    
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

export const ContainerText = styled.h5 `
    padding: 10px;
    margin-left: 200px;
    display: flex;
    line-height: 30px;
    flex-direction: row;    
    font-size: 22px;
    color: var(--cinza);
`

export const Titles = styled.h2 `
    padding: 20px;
    display: flex;
    font-size: 40px;
    align-items: center;
    justify-content: center;
`
export const LinkstyledSobre = styled.a`
    color: var(--cinza);
    text-decoration: none;
    /* ({ isActive }) => ({color: isActive ? 'var(--amarelo)' : 'var(--cinza)',}) */
`

export const ContainerSobre = styled.div`
    display:grid;
    grid-template-columns: 20% 80%;
    position:relative;


`
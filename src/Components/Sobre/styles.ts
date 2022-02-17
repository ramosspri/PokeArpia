import styled from 'styled-components';
import { GlobalStyle } from '../Global Style/globalStyles';

export const ContainerPokemon = styled.div`
    border: 1px solid var(--amarelo);
    padding:30px;
    border-radius:5px;
`

export const ItemPokemon = styled.li`
    background-color:var(--azul-claro);
    display: flex;
    align-items: left;
    padding:15px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;   
`

export const ContainerCenter = styled.div`
    display:flex;
    justify-content:center;
`

export const StyledLink = styled.a`
  color: var(--cinza);
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;
import styled from 'styled-components';

// import { Container } from './styles';

export const Titulo = styled.h1`
color: white;
font-size: 30px;
font-family: inherit;
display:flex;
justify-content:center;
`
export const TextoLendarios = styled.h3`
font-size: 17px;
color: white;
font-family: inherit;
`
export const ContainerLendarios = styled.div`
    border: 1px solid var(--amarelo);
    padding:30px;
    border-radius:5px;

`
export const GridLendarios = styled.ul`
    display:grid;
    grid-template-columns: repeat(3,  1fr);
    gap:25px;
    padding-top:30px;
    padding-bottom:30px;
`
export const GridTexto = styled.ul`
    display:grid;
    grid-template-columns: repeat(3,  1fr);
    gap:25px;
`
export const ItemPokemon = styled.li`
    background-color: var(--azul-escuro);
    display:flex;
    /* justify-content:space-between; */
    gap:30px;
    align-items: center;
    /* padding:27px 20px 27px 20px; */
    padding:15px;
    /* border-radius:10px;
    box-shadow:0px 3px 10px 0px #000 ; */
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor:pointer;

    &:hover {
        opacity:0.7;
    }
`
export const ImagemPokemon = styled.div`
`

export const PerfilPokemon = styled.img`
    height: 250px;
    width: 250px;
    border-radius:50%;
    background-color:var(--azul-escuro);
    padding:10px;
`
export const NomePokemon = styled.div`

`

export const ParagrafoPokemon = styled.p`
    font-size:18px;
`
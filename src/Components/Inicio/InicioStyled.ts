import styled from 'styled-components';

export const InicioStyled = styled.div`
  
`;


export const ContainerCenter = styled.div`
    display:flex;
    justify-content:center;
`

export const BarraStyled = styled.input`
    font-size:18px;
    border:none;
    border-radius:25px;
    padding-left: 20px;
    height:40px;
    width:450px;
    font-family: inherit;
    margin-bottom: 40px;
`
export const ContainerPokemon = styled.ul`
    border: 1px solid var(--amarelo);
    border-radius:5px;
    display:grid;
    grid-template-columns: repeat(4,  1fr);
    gap:10px;   
    padding:10px;
`

export const ItemPokemon = styled.li`
    background-color:var(--azul-claro);
    display:flex;
    /* justify-content:space-between; */
    gap:30px;
    align-items: center;
    padding:27px 20px 27px 20px;
    /* border-radius:10px;
    box-shadow:0px 3px 10px 0px #000 ; */
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const ImagemPokemon = styled.div`

`

export const PerfilPokemon = styled.img`
    height:70px;
    width:70px;
    border-radius:50%;
`


export const NomePokemon = styled.div`

`

export const ParagrafoPokemon = styled.p`
    font-size:18px;
`
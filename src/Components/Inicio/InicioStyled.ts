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
    margin-bottom: 50px;
`

export const ContainerPokemon = styled.div`
    border: 1px solid var(--amarelo);
    padding:30px;
    border-radius:5px;

`
export const Grid = styled.ul`
    display:grid;
    grid-template-columns: repeat(3,  1fr);
    gap:25px;   
    
`
export const ItemPokemon = styled.li`
    background-color:var(--azul-claro);
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
    height: 70px;
    width: 70px;
    border-radius:50%;
    background-color:var(--azul-escuro);
    padding:10px;
`


export const NomePokemon = styled.div`

`

export const ParagrafoPokemon = styled.p`
    font-size:18px;
`

export const BotaoPokemon = styled.button`
    color:var(--azul-escuro);
    height:40px;
    width:190px;
    border-radius: 2rem;
    border:none;
    background-color: var(--amarelo);
    font-weight:800;
    font-size:15px;

    &:hover {
        cursor:pointer;
        opacity:0.7;
    }

`
export const DivBotao = styled.div`
margin-top:20px;
    grid-column:2;
    display:flex;
    gap:10px;

`
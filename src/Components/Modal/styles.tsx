import styled from "styled-components";

export const BackModal = styled.div`
     background: rgba(0, 0, 0, 0.4);
     position:fixed;
     width:100%;
     height:100%;
     z-index: 100;
     top: 0;
     left: 0;
` ;

export const ConteinerModal = styled.div`
     position:fixed;
     top: 50%;
     left: 50%;
     z-index: 200;
     width:50%;
     height:300px;
     background-color:var(--azul-escuro);
     border-radius:10px;
     transform: translate(-50%, -50%);
     box-sizing:border-box;
     padding:20px;
`;
export const HeaderModalStyled = styled.div`
     position:fixed;
     top:10px;
     right:10px;
     color:var(--branco);
     cursor:pointer;
`;
export const ModalStyled = styled.div`
     display:flex;
     align-items: center;
     gap:25px;
     height:100%;
`;

export const ContainerPokemonModalPerfil = styled.div`
`;

export const ContainerPokemonModalStatus = styled.div`
     box-sizing:border-box;
     width:100%;
     color: var(--branco);
     background-color:var(--azul-claro);
     padding:20px 30px;
     border-radius:10px;
`;

export const ImagemPokemon = styled.img`
     width:170px;
     height:170px;
     border-radius:50%;
     background-color:var(--azul-claro);
`;

export const NomePokemon = styled.h1`
     margin-top:20px;
     font-weight:800;
     font-size:20px;
     text-transform:capitalize;
     color: var(--branco);
     text-align:center;
`
export const TipoPokemon = styled.span`
     text-transform:capitalize;
     color: var(--branco);
     text-align:center;
     margin-top:10px;

`

export const TabelaPokemon = styled.table`
     height:200px;
     font-weight:800;
     width:100%;
     border-radius:10px;
     box-sizing:border-box;
     font-size:14px;
`;

export const LinhaPokemon =  styled.tr`
   /* height:18px; */
   text-transform: capitalize;
`;

const ColunaPokemon = styled.td`
`
export const ColunaPokemonNomeStatus = styled(ColunaPokemon)`
     width:35%;
`
export const ColunaPokemonValorStatus = styled(ColunaPokemon)`
     width:15%;
     text-align:center;

`
export const ColunaPokemonBarraStatus = styled(ColunaPokemon)`
     width:50%;
`
export const BarraPokemon = styled.div`
     height:10px;
     width:100%;
     border-radius:10px;
     background-color:var(--branco);
`;

interface Iporcentagem {
     width: number,
}
export const BarraPokemonPreenchida = styled.div<Iporcentagem>`
     height:10px;
     width: ${props => Math.floor((props.width * 100) / 150) + "%"} ;
     border-radius:10px;
     background-color:var(--amarelo);
`;
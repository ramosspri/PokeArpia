import React from 'react';
import axios from "axios";

import { BarraStyled, BotaoPokemon, ContainerCenter, ContainerPokemon, DivBotao, ImagemPokemon, InicioStyled, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from './InicioStyled';


export const Inicio: React.FC = () => {

  const [pokemons, setPokemons] = React.useState([]);
  const [proximaPagina, setProximaPagina] = React.useState("");
  const [anteriorPagina, setAnteriorPagina] = React.useState("");


  React.useEffect(() => {
    fetchPokemon();
  }, []);

  function trocarPagina(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event.target);
  }

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=18&offset=0")
    .then((response) => {
      if(response.data.next !== null) setProximaPagina(response.data.next);
      if(response.data.previous !== null) setAnteriorPagina(response.data.previous);

      setPokemons(response.data.results);
    });
  }


  return (

    <InicioStyled>
       <ContainerCenter>
        <BarraStyled placeholder="Quem é esse Pokémon?"/>
      </ContainerCenter>

      <ContainerPokemon>
          {pokemons.map((pokemon:any, index:number) => {
                return(
                  <ItemPokemon key={pokemon.name}>
                    <ImagemPokemon>
                      <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}/>
                    </ImagemPokemon>
                    <NomePokemon>
                      <div>
                        <ParagrafoPokemon>
                          {
                            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                          }
                        </ParagrafoPokemon>
                        <span style={{color:"#C9C9C9", fontSize:"12px"}}>{`#${index + 1}`}</span>
                      </div>
                    </NomePokemon>
                  </ItemPokemon>  
                );
          })}
        <DivBotao>
          <BotaoPokemon onClick={trocarPagina} >Página Anterior</BotaoPokemon>
          <BotaoPokemon onClick={trocarPagina} >Próxima Página</BotaoPokemon>
        </DivBotao>
      </ContainerPokemon>
    </InicioStyled>
  

  );
}

import React from 'react';
import axios from "axios";

import { BarraStyled, BotaoPokemon, ContainerCenter, ContainerPokemon, DivBotao, ImagemPokemon, InicioStyled, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from './InicioStyled';
import PokemonExemplo from "../../Assets/pokemon-exemplo.jpg";


export const Inicio: React.FC = () => {

  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    fetchPokemon();
  }, []);


  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=18&offset=0")
    .then((response) => setPokemons(response.data.results));
  }

  console.log(pokemons);

  return (

    <InicioStyled>
       <ContainerCenter>
        <BarraStyled placeholder="Quem é esse Pokémon?"/>
      </ContainerCenter>

      <ContainerPokemon>
          {pokemons.map((pokemon:any, index:number) => {
                return(
                  <ItemPokemon>
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
                        <span style={{color:"#C9C9C9", fontSize:"12px"}}>#134</span>
                      </div>
                    </NomePokemon>
                  </ItemPokemon>  
                );
          })}
        <DivBotao>
          <BotaoPokemon>Página Anterior</BotaoPokemon>
          <BotaoPokemon>Próxima Página</BotaoPokemon>
        </DivBotao>
      </ContainerPokemon>
    </InicioStyled>
  

  );
}

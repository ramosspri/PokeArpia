import React from 'react';
import axios from "axios";

import { BarraStyled, BotaoPokemon, ContainerCenter, ContainerPokemon, DivBotao, ImagemPokemon, InicioStyled, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from './InicioStyled';

interface Ipokemon {
  name: string;
  url: string;
}

export const Inicio: React.FC = () => {
  
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemonsPesquisado, setPokemonsPesquisado] = React.useState<Ipokemon>({name:"", url:""});
  const [proximaPagina, setProximaPagina] = React.useState("");
  const [anteriorPagina, setAnteriorPagina] = React.useState("");
  const [pesquisa, setPesquisa] = React.useState("");
  const [controllerPesquisa, setControllerPesquisa] = React.useState(false);
  const [enterHappened, setEnterHappened] =React.useState(false);

  React.useEffect(() => {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=18&offset=0");

  }, []);

  function pegarValor(event: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(event.target.value);
    setControllerPesquisa(!controllerPesquisa);

  }

  function pesquisar(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === "Enter") {
      setEnterHappened(true);
      setControllerPesquisa(!controllerPesquisa);
      fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pesquisa}/`)
    } else {
            setEnterHappened(false)
    }
  }

  function trocarPaginaProxima() {
    fetchPokemon(proximaPagina);
  }
  
   function trocarPaginaAnterior() {
     if(anteriorPagina)
       fetchPokemon(anteriorPagina);
  }

  function fetchPokemon(url: string) {
    axios.get(url)
    .then((response) => {
      if(response.data.next !== null) setProximaPagina(response.data.next);
      if(response.data.previous !== null) setAnteriorPagina(response.data.previous);
      if(controllerPesquisa) {
        setPokemonsPesquisado(response.data.forms[0]);
      }
      setPokemons(response.data.results);
    });
  }

  return (

    <InicioStyled>
       <ContainerCenter>
        <BarraStyled placeholder="Quem é esse Pokémon?" onChange={pegarValor} onKeyUp={pesquisar} />
      </ContainerCenter>

      <ContainerPokemon>
            { enterHappened &&
                    <ItemPokemon key={pokemonsPesquisado.name}>
                      <ImagemPokemon>
                        <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonsPesquisado.url.slice(39).slice(0, -1)}.png`}/>
                      </ImagemPokemon>
                      <NomePokemon>
                        <div>
                      {console.log(pokemonsPesquisado)}
                          <ParagrafoPokemon>
                            {
                              pokemonsPesquisado.name.charAt(0).toUpperCase() + pokemonsPesquisado.name.slice(1)
                            }
                          </ParagrafoPokemon>
                          <span style={{color:"#C9C9C9", fontSize:"15px"}}>{`#${pokemonsPesquisado.url.slice(39).slice(0, -1)}`}</span>
                        </div>
                      </NomePokemon>
                    </ItemPokemon>  
            }

            {pokemons?.map((pokemon: Ipokemon, index:number) => {
                  return(
                    <ItemPokemon key={pokemon.name}>
                      <ImagemPokemon>
                        <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.slice(34).slice(0, -1)}.png`}/>
                      </ImagemPokemon>
                      <NomePokemon>
                        <div>
                          <ParagrafoPokemon>
                            {
                              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                            }
                          </ParagrafoPokemon>
                          <span style={{color:"#C9C9C9", fontSize:"15px"}}>{`#${pokemon.url.slice(34).slice(0, -1)}`}</span>
                        </div>
                      </NomePokemon>
                    </ItemPokemon>  
                  );
            }  )
          }

        <DivBotao>
          <BotaoPokemon onClick={trocarPaginaAnterior} id="1">Página Anterior</BotaoPokemon>
          <BotaoPokemon onClick={trocarPaginaProxima} id="2">Próxima Página</BotaoPokemon>
        </DivBotao>
      </ContainerPokemon>
    </InicioStyled>
  );
}

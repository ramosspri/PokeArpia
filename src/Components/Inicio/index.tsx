import React from 'react';
import axios from "axios";

import { BarraStyled, BotaoPokemon, ContainerCenter, ContainerPokemon, DivBotao, Grid, ImagemPokemon, InicioStyled, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from './InicioStyled';
import { Modal } from '../Modal';

interface Ipokemon {
  name: string;
  url: string;
}

export interface ModalProps {
     mostra: boolean,
     toggle: () => void;
}


export const Inicio: React.FC<ModalProps> = ({mostra, toggle}) => {
  
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemonsPesquisado, setPokemonsPesquisado] = React.useState<Ipokemon>({name:"", url:""});
  const [proximaPagina, setProximaPagina] = React.useState("");
  const [anteriorPagina, setAnteriorPagina] = React.useState("");
  const [pesquisa, setPesquisa] = React.useState("");
  const [controllerPesquisa, setControllerPesquisa] = React.useState(false);
  const [enterHappened, setEnterHappened] =React.useState(false);
  const [error, setError] = React.useState(false);
  const [chave, setChave] = React.useState<null | string>("");
  const urle = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0"

  React.useEffect(() => {

    fetchPokemon(urle);

  }, []);

  function pegarNomePokemonModal(target: EventTarget ) {
    let element = target as HTMLElement;
    setChave(element.getAttribute("data-key"));
  }

  function pegarValor(event: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(event.target.value);
    setControllerPesquisa(!controllerPesquisa);
  }

  function pesquisar(event: React.KeyboardEvent<HTMLInputElement>) {
    if(pesquisa !=  "." && pesquisa.length!=0 && event.key === "Enter") {
      setEnterHappened(true);

      fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pesquisa.toLowerCase()}/`);

    
    } else if(pesquisa.length === 0 || event.key === "Backspace") {
      setEnterHappened(false)
      setError(false);
      fetchPokemon(urle);

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
      
      if(response.data.forms) {
        setPokemonsPesquisado(response.data.forms[0]);
      }

      setPokemons(response.data.results);
    })
    .catch((err) => {
      console.log(err);
      setError(true);
    })
  }

  return (

    <InicioStyled>
       <ContainerCenter>
        <BarraStyled placeholder="Quem é esse Pokémon?" onChange={pegarValor} onKeyUp={pesquisar}   autoFocus/>
      </ContainerCenter>

      <ContainerPokemon >
        <Grid>
              { enterHappened  && !error &&
                        
                        <ItemPokemon onClick={(e) => {
                          pegarNomePokemonModal(e.currentTarget);
                          toggle();
                        }} key={pokemonsPesquisado.name} data-key = {pokemonsPesquisado.name}>
                          <ImagemPokemon >
                            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonsPesquisado.url.slice(39).slice(0, -1)}.png`} data-key = {pokemonsPesquisado.name}/>
                          </ImagemPokemon>
                          <NomePokemon >
                            <div>
                              <ParagrafoPokemon >
                                {
                                  pokemonsPesquisado.name.charAt(0).toUpperCase() + pokemonsPesquisado.name.slice(1)
                                }
                              </ParagrafoPokemon>
                              <span style={{color:"#C9C9C9", fontSize:"15px"}} data-key = {pokemonsPesquisado.name}>{`#${pokemonsPesquisado.url.slice(39).slice(0, -1)}`}</span>
                            </div>
                          </NomePokemon>
                        </ItemPokemon> 
                }

              { !error && pokemons?.map((pokemon: Ipokemon, index:number) => {
                    return(
                      <>
                        <ItemPokemon onClick={(e) => {
                          toggle();
                          pegarNomePokemonModal(e.currentTarget);
                        }} key = {pokemon.name} data-key={pokemon.name} >
                          <ImagemPokemon  >
                            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.slice(34).slice(0, -1)}.png`}/>
                          </ImagemPokemon>
                          <NomePokemon >
                            <div>
                              <ParagrafoPokemon >
                                {
                                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                                }
                              </ParagrafoPokemon>
                              <span style={{color:"#C9C9C9", fontSize:"15px"}}>{`#${pokemon.url.slice(34).slice(0, -1)}`}</span>
                            </div>
                          </NomePokemon>
                        </ItemPokemon> 
                      </>
                    );
              }  )
            }

          </Grid>
            {error &&
             <p style={{fontWeight:"800", }}>Pokémon não encontrado.</p>
             }
        {!enterHappened && (
        <ContainerCenter>
            <DivBotao>
              <BotaoPokemon onClick={trocarPaginaAnterior} id="1">Página Anterior</BotaoPokemon>
              <BotaoPokemon onClick={trocarPaginaProxima} id="2">Próxima Página</BotaoPokemon>
            </DivBotao>
          </ContainerCenter>)
        }
     </ContainerPokemon>
    {mostra ? <Modal mostra = {mostra} toggle={toggle} chave={chave}/> : <></>}
    </InicioStyled>
  );
}

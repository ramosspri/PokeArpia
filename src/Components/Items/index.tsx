import React, { useState, } from 'react'
import { Menu, TextoMenu, TextIcons, ContainerText, Titles, LinkstyledSobre, ContainerSobre} from './styles';
import { Icon } from '@iconify/react';
import { BotaoPokemon, ContainerCenter, ContainerPokemon, DivBotao, Grid, ImagemPokemon, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from '../Inicio/InicioStyled';

import axios from "axios";

const Items: React.FC = () => {
  const [proximaPagina, setProximaPagina] = React.useState("");
  const [anteriorPagina, setAnteriorPagina] = React.useState("");

  const [items, setItems] = React.useState([]);

    function trocarPaginaProxima() {
    fetchItems(proximaPagina);
  }
  
   function trocarPaginaAnterior() {
     if(anteriorPagina)
       fetchItems(anteriorPagina);
  }

  React.useEffect(() => {
    fetchItems("https://pokeapi.co/api/v2/item/?offset=0&limit=12");
  }, []);

function fetchItems(url: string) {
  axios.get(url)
  .then((response: any) => {
    if(response.data.next !== null) setProximaPagina(response.data.next);
    if(response.data.previous !== null) setAnteriorPagina(response.data.previous);
    setItems(response.data.results);
  })
}

  return (
    <>      
     <ContainerPokemon style={{marginTop: "50px"}}>
        <Grid>
          {items?.map((item: any, index: number) => {
             return(
                      <>
                        <ItemPokemon key = {item.name} data-key={item.name} >
                          <ImagemPokemon >
                            
                            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`}/>
                          </ImagemPokemon>
                          <NomePokemon >
                            <div>
                              <ParagrafoPokemon >
                                {
                                  item.name.charAt(0).toUpperCase() + item.name.slice(1)
                                }
                              </ParagrafoPokemon>
                              <span style={{color:"#C9C9C9", fontSize:"15px"}}>#{item.url.slice(31).slice(0, -1)}</span>
                            </div>
                          </NomePokemon>
                        </ItemPokemon> 
                      </>
                    );
              }  )
          }
        </Grid>
        <ContainerCenter>
            <DivBotao>
              <BotaoPokemon onClick={trocarPaginaAnterior} id="1">Página Anterior</BotaoPokemon>
              <BotaoPokemon  onClick={trocarPaginaProxima} id="2" >Próxima Página</BotaoPokemon>
            </DivBotao>
          </ContainerCenter>
     </ContainerPokemon>
    </>)
}

export default Items
import React from 'react';
import ReactDOM from 'react-dom';
import { BackModal, HeaderModalStyled, BarraPokemon, BarraPokemonPreenchida, ColunaPokemonBarraStatus, ColunaPokemonNomeStatus, ColunaPokemonValorStatus, ContainerPokemonModalPerfil, ContainerPokemonModalStatus, ConteinerModal, ImagemPokemon, LinhaPokemon, ModalStyled, TabelaPokemon, NomePokemon, TipoPokemon } from './styles';
import axios from "axios";
export interface ModalProps {
     mostra: boolean,
     toggle: () => void;
     chave: string | null | number,
}

export const useModal = () => {
     const [mostra, setMostra] = React.useState<boolean>(false);
     const toggle = () => {
          setMostra(!mostra);
     }
     return {
          mostra, 
          toggle,
     };
};

export const Modal: React.FC<ModalProps> = ({mostra, toggle, chave}) => {
     const [pokemon, setPokemon] = React.useState<any>({});

     React.useEffect(() => {
          fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${chave}`)

     }, []);

     function fetchPokemon(url: string) {
         
          axios.get(url)
          .then((response) => {
               setPokemon(response.data);
          })
          .catch((err) => {
               console.log(err);
          })
     }

     const modal = (
          <>
               <BackModal onClick={toggle} />
               <ConteinerModal>
                    <HeaderModalStyled onClick={toggle}>X</HeaderModalStyled>
                    <ModalStyled>
                         <ContainerPokemonModalPerfil>
                              <ImagemPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}/>
                              <NomePokemon>{pokemon.name}</NomePokemon>
                              <div style={{display:"flex", justifyContent:"center"}}>
                              { pokemon.types?.map(({type}:any, index:number) => {
                                   return ( <TipoPokemon>{index == 1 ? "\u00A0|\u00A0" : null} {type.name} </TipoPokemon> )
                                   }
                              )
                              }
                              </div>
                         </ContainerPokemonModalPerfil>

                         <ContainerPokemonModalStatus>
                              <TabelaPokemon>
                                        {pokemon.stats?.map((stats:any) => {
                                            return( <LinhaPokemon key={stats.stat.name}> 
                                                  <ColunaPokemonNomeStatus>{stats.stat.name.replace("-", " ")}</ColunaPokemonNomeStatus>
                                                  <ColunaPokemonValorStatus>{stats.base_stat}</ColunaPokemonValorStatus>
                                                  <ColunaPokemonBarraStatus>
                                                       <BarraPokemon>
                                                            <BarraPokemonPreenchida width={stats.base_stat} />
                                                       </BarraPokemon>
                                                  </ColunaPokemonBarraStatus>
                                             </LinhaPokemon>)
                                        })}
                              </TabelaPokemon>
                         </ContainerPokemonModalStatus>
                    </ModalStyled>
               </ConteinerModal>
          </>
     );

  return ReactDOM.createPortal(modal, document.body);
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BackModal, HeaderModalStyled, BarraPokemon, BarraPokemonPreenchida, ColunaPokemonBarraStatus, ColunaPokemonNomeStatus, ColunaPokemonValorStatus, ContainerPokemonModalPerfil, ContainerPokemonModalStatus, ConteinerModal, ImagemPokemon, LinhaPokemon, ModalStyled, TabelaPokemon } from './styles';
import Pokemon from "../../Assets/pokemon-exemplo.jpg";

export interface ModalProps {
     mostra: boolean,
     toggle: () => void;
}

export const useModal = () => {
     const [mostra, setMostra] = React.useState<boolean>(false);
     const toggle = () => setMostra(!mostra);

     return {
          mostra, 
          toggle,
     };
};

export const Modal: React.FC<ModalProps> = ({mostra, toggle}) => {
     const modal = (
          <>
               <BackModal />
               <ConteinerModal>
                    <HeaderModalStyled onClick={toggle}>X</HeaderModalStyled>
                    <ModalStyled>
                         <ContainerPokemonModalPerfil>
                              <ImagemPokemon src={Pokemon}/>
                         </ContainerPokemonModalPerfil>
                         <ContainerPokemonModalStatus>
                              <TabelaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Hp</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>
                                             <BarraPokemon>
                                                  <BarraPokemonPreenchida />
                                             </BarraPokemon>
                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Attack</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>

                                         <BarraPokemon>
                                             <BarraPokemonPreenchida />
                                        </BarraPokemon>

                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Defense</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>
                                             <BarraPokemon>
                                                  <BarraPokemonPreenchida />
                                             </BarraPokemon>
                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Special Attack</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>
                                             <BarraPokemon>
                                                  <BarraPokemonPreenchida />
                                             </BarraPokemon>
                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Special Defense</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>
                                             <BarraPokemon>
                                                  <BarraPokemonPreenchida />
                                             </BarraPokemon>
                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                                   <LinhaPokemon>
                                        <ColunaPokemonNomeStatus>Speed</ColunaPokemonNomeStatus>
                                        <ColunaPokemonValorStatus>2</ColunaPokemonValorStatus>
                                        <ColunaPokemonBarraStatus>
                                             <BarraPokemon>
                                                  <BarraPokemonPreenchida />
                                             </BarraPokemon>
                                        </ColunaPokemonBarraStatus>
                                   </LinhaPokemon>
                              </TabelaPokemon>
                         </ContainerPokemonModalStatus>
                    </ModalStyled>
               </ConteinerModal>
          </>
     );

  return ReactDOM.createPortal(modal, document.body);
}

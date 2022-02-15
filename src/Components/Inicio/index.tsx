import React from 'react';
import { BarraStyled, ContainerCenter, ContainerPokemon, ImagemPokemon, InicioStyled, ItemPokemon, NomePokemon, ParagrafoPokemon, PerfilPokemon } from './InicioStyled';
import PokemonExemplo from "../../Assets/pokemon-exemplo.jpg";
export const Inicio: React.FC = () => {
  return (
    

    <InicioStyled>
       <ContainerCenter>
        <BarraStyled placeholder="Quem é esse Pokémon?"/>
      </ContainerCenter>

      <ContainerPokemon>
        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src={PokemonExemplo}/>
          </ImagemPokemon>
          <NomePokemon>
            <ParagrafoPokemon>
              Nidorina
              <span style={{color:"#C9C9C9", fontSize:"12px", marginLeft:"7px"}}>#134</span>
            </ParagrafoPokemon>
          </NomePokemon>
        </ItemPokemon>

        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src="/"/>
          </ImagemPokemon>
          <NomePokemon>
            <ParagrafoPokemon>
              nome
              <span style={{color:"#C9C9C9", fontSize:"12px"}}>#123</span>
            </ParagrafoPokemon>
          </NomePokemon>
        </ItemPokemon>

        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src="/"/>
          </ImagemPokemon>
          <NomePokemon>
            <ParagrafoPokemon>
              nome
              <span style={{color:"#C9C9C9", fontSize:"12px"}}>#123</span>
            </ParagrafoPokemon>
          </NomePokemon>
        </ItemPokemon>
       
      </ContainerPokemon>
    </InicioStyled>
  

  );
}

import React, { useState } from 'react'
import { ContainerPokemon, ItemPokemon, StyledLink } from './styles';

const Sobre: React.FC = () => {
   return  (
    <>      
      <ItemPokemon>              
        <StyledLink>O início de tudo</StyledLink>
        <StyledLink>Concepção</StyledLink>
        <StyledLink>Influências culturais</StyledLink>
        <StyledLink>Curiosidades</StyledLink>
        <StyledLink>Filmes</StyledLink>
        <StyledLink>Jogos</StyledLink>
        <StyledLink>Animes</StyledLink>      
      </ItemPokemon>     
    </>
  );
}

export default Sobre
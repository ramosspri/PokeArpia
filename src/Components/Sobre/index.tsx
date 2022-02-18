import React, { useState, } from 'react'
import { Menu, TextoMenu, TextIcons, ContainerText, Titles, LinkstyledSobre, ContainerSobre} from './styles';
import { Icon } from '@iconify/react';

const Sobre: React.FC = () => {
  return (
    <>      
    <ContainerSobre>
      <Menu>
        <TextIcons>
          <Icon icon="mdi:pokemon-go" color="#ffcc03" height="30px"/>
          <TextoMenu>Sobre</TextoMenu>
        </TextIcons>  

          <LinkstyledSobre href={"/historia"}>
            O início de tudo
          </LinkstyledSobre>          

          <LinkstyledSobre href={"/influencias"}>
            Influências culturais
          </LinkstyledSobre>

          <LinkstyledSobre href={"/curiosidades"}>
            Curiosidades
          </LinkstyledSobre>  

          <TextIcons>
            <Icon icon="mdi:pokemon-go" color="#ffcc03" height="30px"/>
            <TextoMenu>Mídias</TextoMenu>
          </TextIcons>

          <LinkstyledSobre href={"/filmes"}>
              Filmes
          </LinkstyledSobre> 

          <LinkstyledSobre href={"/jogos"}>
              Jogos
          </LinkstyledSobre> 

          <LinkstyledSobre href={"/animes"}>
            Animes
          </LinkstyledSobre>
        </Menu>
      </ContainerSobre>    
    </>
)}

export default Sobre
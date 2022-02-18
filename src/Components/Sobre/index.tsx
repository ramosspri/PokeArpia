import React, { useState } from 'react'
import { Menu, TextoMenu, TextIcons } from './styles';
import { Icon, InlineIcon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import { padding } from '@mui/system';

const inicio: React.FC = () => {
  return (
    <div>Hello</div>
  )
}


const Sobre: React.FC = () => {
  return (
    <>             
      <Menu>
      <TextIcons>
        <Icon icon="mdi:pokemon-go" color="#ffcc03" height="30px"/>
        <TextoMenu>Sobre</TextoMenu>
      </TextIcons>    
          <NavLink to={"/sobre-inicio"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            O início de tudo
          </NavLink>

          <NavLink to={"/concepcao"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Concepção
          </NavLink>

          <NavLink to={"/influencias"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Influências culturais
          </NavLink>

          <NavLink to={"/curiosidades"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Curiosidades
          </NavLink>  
            
        <TextIcons>
          <Icon icon="mdi:pokemon-go" color="#ffcc03" height="30px"/>
          <TextoMenu>Mídias</TextoMenu>
        </TextIcons>

        <NavLink to={"/filmes"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Filmes
          </NavLink> 

          <NavLink to={"/jogos"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Jogos
          </NavLink> 

          <NavLink to={"/animes"} 
          style={({ isActive }) => ({color: isActive ? '#fff' : 'var(--cinza)', textDecoration:'none',})}>
            Animes
          </NavLink> 

      </Menu>     
    </>
)}

export default Sobre
import React, { useState } from 'react'
import { Menu, TextoMenu, TextIcons } from './styles';
import { Icon } from '@iconify/react';
import { NavLink, Outlet, Link } from 'react-router-dom';

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
          <Link to="/historia">
            O início de tudo
          </Link>

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
          <Outlet />
      </Menu>     
    </>
)}

export default Sobre
import React from 'react';
import Logo from "../../Assets/pokearpia.png";
import {HeaderStyled, ItemStyled, MenuStyled, LinkStyled, ImgStyled} from './HeaderStyled';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <a href="/">
        <ImgStyled src={Logo}/>     
      </a>
      <MenuStyled>
        <ItemStyled>
            <NavLink to="/" end >Início</NavLink>
        </ItemStyled>
        <ItemStyled>
            <NavLink to="/lendarios">Lendários</NavLink>
        </ItemStyled>
        <ItemStyled>
            <NavLink to="/sobre">Sobre</NavLink>
        </ItemStyled>
      </MenuStyled>
    </HeaderStyled>
    );
}

export default Header;
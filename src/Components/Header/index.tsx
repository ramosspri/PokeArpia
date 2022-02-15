import React from 'react';
import Logo from "../../Assets/pokearpia.png";
import {HeaderStyled, ItemStyled, MenuStyled, LinkStyled, ImgStyled} from './HeaderStyled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <a href="/">
        <ImgStyled src={Logo}/>     
      </a>
      <MenuStyled>
        <ItemStyled>
            <LinkStyled href="/">Início</LinkStyled>
        </ItemStyled>
        <ItemStyled>
            <LinkStyled href="/">Lendários</LinkStyled>
        </ItemStyled>
        <ItemStyled>
            <LinkStyled href="/">Sobre</LinkStyled>
        </ItemStyled>
      </MenuStyled>
    </HeaderStyled>
    );
}

export default Header;
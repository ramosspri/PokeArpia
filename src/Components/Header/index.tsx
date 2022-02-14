import React from 'react';
import Logo from "../../Assets/pokearpia.png";
import {HeaderStyled, ItemStyled, MenuStyled, LinkStyled, ImgStyled} from './HeaderStyled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      
      <ImgStyled src={Logo}/>     

      <MenuStyled>
        <ItemStyled>
            <LinkStyled href="/">Home</LinkStyled>
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
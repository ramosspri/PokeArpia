import React from 'react';
import {HeaderStyled, ItemStyled, MenuStyled, LinkStyled, ImgStyled} from './HeaderStyled';
// import Logo from './';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      
      <img src={"./pokearpia.png"}/>     

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
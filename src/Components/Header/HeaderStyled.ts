import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ImgStyled = styled.img`
    height:120px;
`


export const MenuStyled = styled.ul`
    display: flex;
    gap: 45px;

`

export const ItemStyled = styled.li`
    font-size:20px;
`
export const LinkStyled = styled.a`
    color:inherit;
    text-decoration:none;
    &:hover {
        color:var(--amarelo);
    }
`
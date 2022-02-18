import React from 'react';
import styled, { keyframes } from 'styled-components';

// import { Container } from './styles';
const rotate = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`

export const LoaderStyled = styled.div`
    border:10px solid var(--azul-claro); 
    border-top: 10px solid #222638;
    border-radius:50%;
    width: 60px;
    height: 60px;
    animation: ${rotate} 2s linear infinite;

`


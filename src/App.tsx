import React from 'react';
import { Container } from './Components/Container/index';
import { GlobalStyle } from './Components/Global Style/globalStyles';
import Header from './Components/Header/index';
import { Inicio } from './Components/Inicio';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Inicio />
      </Container>
    </>
  );
}

export default App;

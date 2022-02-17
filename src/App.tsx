import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './Components/Container/index';
import { GlobalStyle } from './Components/Global Style/globalStyles';
import Header from './Components/Header/index';
import { Inicio } from './Components/Inicio';
import Lendarios from './Components/Lendarios';
import {Modal, useModal} from './Components/Modal';
import Sobre from './Components/Sobre';

function App() {

    return (
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Inicio />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/lendarios" element={<Lendarios />} />
              </Routes>
          </BrowserRouter>
        </Container>
      </>
    );
}

export default App;

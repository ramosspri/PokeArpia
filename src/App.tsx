import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './Components/Container/index';
import { GlobalStyle } from './Components/Global Style/globalStyles';
import Header from './Components/Header/index';
import { Inicio } from './Components/Inicio';
import Lendarios from './Components/Lendarios';
import {useModal} from './Components/Modal';
import Rotas from './Components/Rotas';
import Sobre from './Components/Sobre';
import Historia from './Components/SobreInicio';

function App() {
  const { mostra, toggle } = useModal();

    return (
      <>
        <GlobalStyle />
        <Container>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/"  element={<Inicio mostra={mostra} toggle={toggle} />} />
              <Route path="/lendarios" element={<Lendarios />} />
              <Route path="/sobre" element={<Sobre />}>
                  <Route path="historia" element={<Historia />} />
                  <Route path="concepcao"></Route>
                  <Route path="influencias"></Route>
                  <Route path="curiosidades"></Route>
                  <Route path="filmes"></Route>
                  <Route path="jogos"></Route>
                  <Route path="animes"></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
        <Rotas/>
      </>
    );
}

export default App;

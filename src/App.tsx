import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './Components/Container/index';
import { GlobalStyle } from './Components/Global Style/globalStyles';
import Header from './Components/Header/index';
import { Inicio } from './Components/Inicio';
import Lendarios from './Components/Lendarios';
import {useModal} from './Components/Modal';
import Items from './Components/Items';

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
              <Route path="/items" element={<Items />} />                  
            </Routes>
          </BrowserRouter>
        </Container>
      </> 
    );

}

export default App;

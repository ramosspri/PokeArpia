import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreInicio from '../SobreInicio';


// import { Container } from './styles';

const Rotas: React.FC = () => {
  return (
            <BrowserRouter>
              <Routes>
                <Route path="/sobre-inicio"  element={<SobreInicio />} />
              </Routes>
          </BrowserRouter>
    );
}

export default Rotas;
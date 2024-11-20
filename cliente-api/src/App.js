import React, { Fragment } from 'react';
import Header from './componentes/layout/Header';
import Navigation from './componentes/layout/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donaciones from "./componentes/Donaciones/donaciones";
import Formulario from "./componentes/Donaciones/formulario_donaciones";
import Vistadonaciones from './componentes/Donaciones/Vistadonaciones';
//import AdminPanel from "./componentes//Donaciones/AdminPanel";


function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="grid contenedor contenido-principal"> 
          <Navigation />
          <main className="caja-contenido col-9"> 
            <Routes>
            <Route path="/VistaDonaciones" element={<Vistadonaciones />} />
              <Route path="/Donaciones/Donaciones" element={<Donaciones />} />
              <Route path="/Donaciones/Formulario" element={<Formulario />} />
            </Routes>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;



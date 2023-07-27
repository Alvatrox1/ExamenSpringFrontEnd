
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ListarPersonas from './components/ListarPersonas'
import Factura from './components/Factura';
import ComponentError from './components/Error';
import VerPersona from './components/VerPersona';
import AgregarPersona from './components/AgregarPersona';
import EditarPersona from './components/EditarPersona';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar> </NavBar>
      <div>
        <Routes>
          <Route path="/personas" element={<ListarPersonas />} >

          </Route>
          <Route path='/personas/verPersona/:idPersona' element={<VerPersona />} />
          <Route path='/personas/agregarPersona' element={<AgregarPersona />} />
            <Route path='/personas/editarPersona/:idPersona' element={<EditarPersona />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="*" component={ComponentError} />
        </Routes>
      </div>
      <Footer> </Footer>
    </BrowserRouter>
  )
}

export default App

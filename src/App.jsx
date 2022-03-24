import "./Styls/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/MenuBar";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";
import Usuario from "./Pages/Usuario";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Menu/><Footer/></>}>
            <Route index element={<Home />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="usuario" element={<Usuario />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

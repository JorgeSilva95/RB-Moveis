import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";
import Usuario from "./Pages/Usuario";

const Rotes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotes;

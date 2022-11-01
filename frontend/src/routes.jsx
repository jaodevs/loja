import React from "react";
import { Route, Routes } from "react-router-dom";
import Eletronicos from "./pages/cadastro/Eletronicos";
import Perifericos from "./pages/cadastro/Periféricos";
import Eletronicosedit from "./pages/edit/Eletronicosedit";
import Perifericosedit from "./pages/edit/Perifericosedit";
import Home from "./pages/Home/Home";



export default function Routers() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/perifericos" element={<Perifericos />} />
      <Route path="/eletronicos" element={<Eletronicos />} />
      <Route path="/eletronicosedit/:id" element={<Eletronicosedit />} />
      <Route path="/perifericosedit/:id" element={<Perifericosedit />} />
    </Routes>
  );
}

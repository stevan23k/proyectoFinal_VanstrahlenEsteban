import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";

import { CamiCrear } from "../../componentes/camisas/CamiCrear";
import { CamiListar } from "../../componentes/camisas/CamisaListar";
import { CamiAdmin } from "../../componentes/camisas/CamiAdmin";

import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/crearcami" element={<CamiCrear />} />

      <Route path="/listacami" element={<CamiListar />} />

      <Route path="/admincami" element={<CamiAdmin />} />

      <Route path="/actualcami/:codigo" element={<CamiCrear />} />

      <Route path="/acercade" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

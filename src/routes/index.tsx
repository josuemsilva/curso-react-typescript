import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/entrar" element={<Login/>}/>
        <Route path="/pagina-inicial" element={<Dashboard/>}/>

        <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
      </Routes>
  );
};
import { BrowserRouter } from "react-router-dom";

import { UsuarioLogadoProvider } from "./shared/contexts";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <UsuarioLogadoProvider>
        <AppRoutes />
      </UsuarioLogadoProvider>
    </BrowserRouter>
  );
};

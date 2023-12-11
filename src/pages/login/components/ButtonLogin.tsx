import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButtonLoginProps {
  type?: "submit" | "reset" | "button";
  onClick: () => void;

  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  type,
  onClick,
  children,
}) => {
  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

  return (
    <button type={type} onClick={onClick}>
      {nomeDoUsuario} {children}
    </button>
  );
};

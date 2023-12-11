import { useUsuarioLogado } from "../../../shared/hooks";

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
  const { nomeDoUsuario } = useUsuarioLogado();

  return (
    <button type={type} onClick={onClick}>
      {nomeDoUsuario} {children}
    </button>
  );
};

import {useNavigate} from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pagina-inicial');
  };

  return (
    <div>
      Login

      <button onClick={handleClick}>Página inicial</button>
    </div>
  );
};
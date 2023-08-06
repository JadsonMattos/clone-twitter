import { Link } from 'react-router-dom';
import './not-found.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      Ih, esta página não existe. Tente buscar outra coisa.
      <Link to="/">Voltar para a página inicial.</Link>
    </div>
  );
}

export default NotFound;

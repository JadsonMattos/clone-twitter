import { NavLink, Outlet } from 'react-router-dom';
import HomeImg from '../../assets/home.png';
import UserImg from '../../assets/user.png';
import ExplorerImg from '../../assets/magnifying-glass.png';
import MessagesImg from '../../assets/email-envelope.png';
import './layout.css';

function Layout() {
  return (
    <div className="page">
      <nav className="nav">
        <NavLink to="/">
          <img src={ HomeImg } alt="Icone Home" />
          Home
        </NavLink>
        <NavLink to="/404">
          <img src={ ExplorerImg } alt="icon" />
          Explorar
        </NavLink>
        <NavLink to="/404">
          <img src={ MessagesImg } alt="icon" />
          Mensagens
        </NavLink>
        <NavLink to="/profile/betrybe">
          <img src={ UserImg } alt="Ícone Usuário" />
          Profile
        </NavLink>
        <button
          onClick={ () => alert('Hora de estudar não é hora de tweetar!!!') }
        >
          Tweetar
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

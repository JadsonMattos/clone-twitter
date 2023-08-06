import { NavLink, Outlet } from 'react-router-dom';
import HomeImg from '../../assets/home.png';
import UserImg from '../../assets/user.png';
import './layout.css';

function Layout() {
  return (
    <div className="page">
      <nav className="nav">
        <NavLink to="/">
          <img src={ HomeImg } alt="Icone Home" />
          Home
        </NavLink>
        <NavLink to="/profile/betrybe">
          <img src={ UserImg } alt="Ícone Usuário" />
          Profile
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

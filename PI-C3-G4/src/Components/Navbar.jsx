import React from 'react';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useContext } from '../Utils/Context.jsx';
import { TOGGLE_THEME } from '../Reducers/Reducer.jsx';
import './styles/Navbar.css';


const Navbar = () => {
  const { state, dispatch } = useContext();

  const routes = [
    { path: '/home', name: 'Home' },

  ]

  const handleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  }
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} width='308px'></img>
      </div>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <div className='buttons'>
        <button className='btn-login'>Iniciar Sesión</button>
        <button className='btn-registro'>Registrarse</button>
        <button className='btn-theme' onClick={handleTheme}>
          <img src={state.theme === 'light' ? Moon : Sun} width='25px'></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
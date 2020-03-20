import React from 'react';
import style from './Header.module.css';
import { NavLink, Redirect } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-samples/celtica.png" alt="logo" />
      <div className={style.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
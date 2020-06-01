import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img className={style.img} src={logo} alt="logo" />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

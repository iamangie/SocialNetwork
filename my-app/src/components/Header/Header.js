import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.img} src={logo} alt="logo" />
    </header>
  );
};

export default Header;

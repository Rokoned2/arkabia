import React from "react";
import logo from "../imgs/logo.svg";
import bell from "../imgs/bell.svg";
import message from "../imgs/message.svg";
import plus from "../imgs/plus.svg";
import perfilImg from "../imgs/perfil-img.png";
import burger from "../imgs/burger-menu.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__burger-menu">
        <img src={burger} alt="" />
      </div>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__tabs">
        <b className="">Noticias</b>
        <b className="">Servicios</b>
        <b className="">Panel principal</b>
      </div>

      <nav className="header__direct-access">
        <div className="header__user">
          <b>Ernesto</b>
          <img src={perfilImg} alt="" />
        </div>
        <img src={plus} alt="" />
        <img src={message} alt="" />
        <img src={bell} alt="" />
      </nav>
    </header>
  );
};

export default Header;

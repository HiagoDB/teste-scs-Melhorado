import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import perfil from "../../assets/perfil.svg";

const Navbar = () => {
  return (
    <header className="head">
      <nav className="navigation">
          <a href="#">
            <img className= "logo" src={logo} alt="logo" />
          </a>

          <ul className='list'>
            <li className="item"><a href="#">Home</a></li>
            <li className="item"><a href="#">Sobre</a></li>
            <li className="item"><a href="#">Tabela</a></li>
            <li className="item"><a href="#">Fale conosco</a></li>
          </ul>

          <ul className='listProfile'>
            <li className="item"><a href="#">Entrar</a></li>
            <li className="item">
              <a href="#">
                <img src={perfil} alt="perfil" />
              </a>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;

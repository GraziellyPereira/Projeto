import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Controle de Estoques</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a>Perfil</a></li>
            <li><a>Contatos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
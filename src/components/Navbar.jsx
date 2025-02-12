import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/videos/ferrarivideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="logo">
          {/* Contenedor flex para logo y texto */}
          <a href="/" className="logo-text">
            <img src="/imagenes/ferrarilogo.png" alt="Ferrari Logo" />
            FERRARI
          </a>
        </div>
        <div className="links">
          <a href="#">Inicio</a>
          <a href="#">Modelos</a>
          <a href="#">Historia</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

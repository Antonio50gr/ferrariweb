import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        {/* Video de fondo */}
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/videos/ferrarivideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Logo */}
        <div className="logo">
          <a href="/" className="logo-text">
            <img src="/imagenes/ferrarilogo.png" alt="Ferrari Logo" />
            FERRARI
          </a>
        </div>

        {/* Botón Hamburguesa */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </div>

        {/* Enlaces */}
        <div className={`links ${isOpen ? 'open' : ''}`}>
          <a href="#">Inicio</a>
          <a href="#">Modelos</a>
          <a href="#">Historia</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio</h1>
      <nav>
        <ul>
          <li>
            <Link to="/pages/Posts">Ir a Publicaciones</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

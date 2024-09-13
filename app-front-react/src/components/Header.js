// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
        <img src="https://espaciocowork.com.ar/wp-content/uploads/2023/06/logo_espacio-768x768.jpeg" width="30" class="d-inline-block align-top" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
        <li class="nav-item"><Link to="/pages/Posts" class="nav-link">Posts</Link></li>
    </ul>
    </div>
    </nav>
  );
}

export default Header;

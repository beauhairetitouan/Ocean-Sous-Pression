import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img class="logo_header" src="logo_ocean.png" alt="logo" />

            <nav>
                <Link to="/">Accueil</Link>
                <h1>|</h1>
                <Link to="/issues/overview">L'exposition</Link>
                <h1>Un Océan Sous Pression</h1>
                <Link to="/about">À propos</Link>
                <h1>|</h1>
                <Link to="/contact">Contact</Link>

            </nav>
        </header>
    );
}

export default Header;

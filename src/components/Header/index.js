import React, { Component } from 'react';
import Logo from '../../logo.png';
import './style.css';

//Stateless Component Header
const Header = () => (
    <header className="main-header">
        <div className="main-logo">
            <img src={Logo} alt="React" title="React" />
        </div>
    </header>
);

export default Header;
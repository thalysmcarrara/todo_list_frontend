import React from 'react';
import './index.css';

function Header() {
  return (
    <header>
      <h1>
        Todo List
      </h1>
      <button type="button" className="button-login">
        Login
        <span className="material-icons">
          login
        </span>
      </button>
    </header>
  );
}

export default Header;

import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

function Header() {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push('/login');
  };

  return (
    <header>
      <h1>
        Todo List
      </h1>
      <button
        onClick={ navigateToLogin }
        data-testid="login-btn"
        type="button"
        className="button-login"
      >
        Login
        <span className="material-icons">
          login
        </span>
      </button>
    </header>
  );
}

export default Header;

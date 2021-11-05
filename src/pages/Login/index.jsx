import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../Home';
import SigninForm from '../../components/SigninForm';
import './index.css';

function Login() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/dashboard');
  };

  return (
    <>
      <Home />
      <div className="modal">
        <div className="modal-card">
          <button
            data-testid="signin-close-button"
            onClick={ handleClick }
            type="button"
            className="close-button"
          >
            <span className="material-icons">
              close
            </span>
          </button>
          <h2 className="title-login">Login</h2>
          <SigninForm
            handleSubmit={ handleSubmit }
            inputEmail={ inputEmail }
            setInputEmail={ setInputEmail }
            inputPassword={ inputPassword }
            setInputPassword={ setInputPassword }
          />
        </div>
      </div>
    </>
  );
}

export default Login;

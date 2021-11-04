import React from 'react';
import Home from '../Home';
import SigninForm from '../../components/SigninForm';
import './index.css';

function Login() {
  console.log('entrei no login');
  return (
    <>
      <Home />
      <div className="modal">
        <div className="modal-card">
          <button type="button" className="close-button">
            <span className="material-icons">
              close
            </span>
          </button>
          <h2 className="title-login">Login</h2>
          <SigninForm />
          <a href>Dont have an account?</a>
          <button type="button" className="login-button">
            <span className="material-icons">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

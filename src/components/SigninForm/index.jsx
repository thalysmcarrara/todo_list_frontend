import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

function SigninForm({
  handleSubmit,
  inputEmail,
  inputPassword,
  setInputEmail,
  setInputPassword,
}) {
  return (
    <form onSubmit={ handleSubmit } className="sigin-form">
      <div className="group">
        <input
          onChange={ ({ target }) => setInputEmail(target.value) }
          value={ inputEmail }
          id="email-input"
          type="email"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label htmlFor="email-input">Email</label>
      </div>
      <div className="group">
        <input
          onChange={ ({ target }) => setInputPassword(target.value) }
          value={ inputPassword }
          minLength={ 8 }
          type="password"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>Password</label>
      </div>
      <Link to="/signup">Dont have an account?</Link>
      <button
        data-testid="signin-submit-button"
        type="submit"
        className="login-button"
      >
        <span className="material-icons">
          arrow_forward
        </span>
      </button>
    </form>
  );
}

SigninForm.propTypes = {
  inputPassword: PropTypes.string,
  inputEmail: PropTypes.string,
  setInputEmail: PropTypes.func.isRequired,
  setInputPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

SigninForm.defaultProps = {
  inputEmail: '',
  inputPassword: '',
};

export default SigninForm;

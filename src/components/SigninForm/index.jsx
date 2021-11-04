import React from 'react';
import './index.css';

function SigninForm() {
  return (
    <form className="sigin-form">
      <div className="group">
        <input id="email-input" type="text" required />
        <span className="highlight" />
        <span className="bar" />
        <label htmlFor="email-input">Email</label>
      </div>
      <div className="group">
        <input type="password" required />
        <span className="highlight" />
        <span className="bar" />
        <label>Password</label>
      </div>
    </form>
  );
}

export default SigninForm;

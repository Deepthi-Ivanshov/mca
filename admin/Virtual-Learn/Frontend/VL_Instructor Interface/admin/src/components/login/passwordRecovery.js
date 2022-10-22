import React, { useState } from 'react';

function TextInput({ type, label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        name={label}
        onChange={handleChange}
        className="login-input"
        required
      />
      <label className={value && 'filled'}>{label}</label>
    </div>
  );
}

export default function PasswordRecovery(props) {
  const { Component } = props;
  const [state, setState] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    alert(e.target.Email.value);
    setState(false);
  }

  return state ? (
    <div className="admin-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-div">
          <div>
            <img
              src={require('../../images/img_virtuallearn logo_splash 2.png')}
              className="login-logo"
              alt="Virtual Learn Logo"
            />
          </div>
          <div className="ForgotPW-text">
            <h2>Forgot Password</h2>
            <p>
              Please enter your Email ID, You will recieve a code to create a
              new password.
            </p>
          </div>
          <TextInput label="Email" type="email" />
          <button type="submit" className="login-submit">
            Send
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div>
      <Component />
    </div>
  );
}

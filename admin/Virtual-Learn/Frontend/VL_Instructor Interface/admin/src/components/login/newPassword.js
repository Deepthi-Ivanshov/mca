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
      />
      <label className={value && 'filled'}>{label}</label>
    </div>
  );
}

export default function NewPassword() {
  return (
    <div className="admin-login">
      <form className="login-form newPassword">
        <div className="login-form-div">
          <div>
            <img
              src={require('../../images/img_virtuallearn logo_splash 2.png')}
              className="login-logo"
              alt="Virtual Learn Logo"
            />
          </div>
          <div className="ForgotPW-text">
            <h2>Create New Password</h2>
            <p>Your password must have at least 6 or more characters</p>
          </div>
          <TextInput label="New Password" type="password" />
          <TextInput label="Confirm Password" type="password" />

          <button type="submit" className="login-submit newPWSubmit">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TextInput({ type, label, name }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    if (type === 'text') {
      setValue(e.target.value);
    }
    if (type === 'password') {
      setValue(e.target.value);
    }
  }

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="login-input"
        required
      />
      <label className={value && 'filled'}>{label}</label>
    </div>
  );
}

function Login({ childToParent }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  function HandleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    fetch('https://virtuallearn01.herokuapp.com/api/v1/adminLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminName: e.target.userName.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const response = data;
        console.log('Response', response);
        console.log('Response', response.message);
        if (response.message === 'error while finding admin') {
          setData(false);
          setMessage('Invalid username or password');
        } else {
          childToParent(data);
          setData(true);
          navigate('/');
        }
      });
  }

  console.log('mssssg', message);
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    let login = data;
    if (login) {
      navigate('/');
    }
  }, []);

  return (
    <div className="admin-login">
      <form className="login-form" onSubmit={HandleSubmit}>
        <div className="login-form-div">
          <div>
            <img
              src={require('../../images/img_virtuallearn logo_splash 2.png')}
              className="login-logo"
              alt="Virtual Learn Logo"
            />
          </div>
          <div className="input-field"></div>
          <TextInput label="User Name" type="text" name="userName" />
          <TextInput label="Password" type="password" name="password" />
          <div className="login-ForgotPW-container">
            <Link to="/password" className="login-ForgotPW">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="login-submit">
            Login
          </button>
          {HandleSubmit}
        </div>
        {isLoading ? <div className="logginIn">Logging in...</div> : ''}
        {<div className="Invalid-login">{message}</div>}
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [formHeight, setFormHeight] = useState('70px');
  const [formTop, setFormTop] = useState('90%');
  const [linksTop, setLinksTop] = useState('80%');

  const handleClick = () => {
    setFormHeight('350px');
    setFormTop('20%');
    setLinksTop('65%');
  };

  const handleFocus = (e) => {
    const { className } = e.target;
    document.querySelectorAll(`.${className}`).forEach(input => {
      input.style.zIndex = '1';
      input.style.background = 'rgba(0,0,0,.1)';
    });
    e.target.style.zIndex = '2';
    e.target.style.background = '#fff';
  };

  return (
    <form className="login" style={{ height: formHeight, transform: 'translateY(50px)' }}>
      <div className="form-group" style={{ top: formTop }}>
        <input
          type="text"
          className="user"
          name="user"
          placeholder="type your user name"
          onFocus={handleFocus}
        />
        <input
          type="password"
          className="pwd"
          name="pwd"
          placeholder="type your password"
          onFocus={handleFocus}
        />
      </div>
      <span className="links" style={{ top: linksTop }}>
        <a href="#">signup</a>
        <a href="#">forgot password ?</a>
      </span>
      <br />
      <input
        type="button"
        className="btn"
        value="login"
        onClick={handleClick}
      />
    </form>
  );
};

export default Login;

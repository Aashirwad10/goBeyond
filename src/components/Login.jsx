import React, { useState } from 'react';
import '../styles/Login.css'; // Ensure this path is correct and the CSS file is imported properly

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title login ${isLogin ? 'active' : ''}`}>Login Form</div>
        <div className={`title signup ${!isLogin ? 'active' : ''}`}>Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleLoginClick}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSignupClick}
          />
          <label
            htmlFor="login"
            className={`slide login ${isLogin ? 'active' : ''}`}
            onClick={handleLoginClick}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide signup ${!isLogin ? 'active' : ''}`}
            onClick={handleSignupClick}
          >
            Signup
          </label>
          <div className="slider-tab" style={{ left: isLogin ? '0%' : '50%' }}></div>
        </div>
        <div className="form-inner">
          <form className={`login ${isLogin ? 'active' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a></div>
          </form>
          <form className={`signup ${!isLogin ? 'active' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

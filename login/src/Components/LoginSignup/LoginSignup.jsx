import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState('Login');

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" required />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" required />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" required />
        </div>
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Confirm Password" required />
          </div>
        )}
        {action === 'Login' ? (
          <div></div>
        ) : (
          <>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="number" placeholder="Account Number" required />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="number" placeholder="Aadhar Number" required />
            </div>
          </>
        )}
      </div>
      {action === 'Register' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Register');
          }}
        >
          Register
        </div>
        <br></br>
        <div
          className={action === 'Register' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
        <br></br>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;

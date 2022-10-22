import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function Verification() {
  const [state, setState] = useState({ otp: '' });

  const handleChange = (otp) => {
    setState({ otp });
  };

  return (
    <div className="admin-login">
      <form className="login-form">
        <div className="login-form-div">
          <div>
            <img
              src={require('../../images/img_virtuallearn logo_splash 2.png')}
              className="login-logo"
              alt="Virtual Learn Logo"
            />
          </div>
          <div className="ForgotPW-text">
            <h2>Verification</h2>
            <p>
              Please fill in the verification code that has been sent to your
              Email ID.
            </p>
          </div>
          <OtpInput
            value={state.otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span style={{ width: '24px' }}></span>}
            className="OTP"
            inputStyle={{
              borderBottom: '1px solid #072D5B',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              width: '64px',
              height: '54px',
              fontSize: '20px',

              color: '#092963',
              fontWeight: '400',
            }}
          />
          <div className="ResendOTP">
            <p>
              Didn't receive a code?
              <span>
                <a href="#top" className="ResendCode">
                  Resend
                </a>
              </span>
            </p>
          </div>
          <button type="submit" className="login-submit">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}

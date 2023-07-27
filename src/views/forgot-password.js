import React from 'react'

import { Helmet } from 'react-helmet'

import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>ForgotPassword - housol</title>
        <meta property="og:title" content="ForgotPassword - housol" />
      </Helmet>
      <div className="forgot-password-sign-in">
        <div className="forgot-password-frame7">
          <div className="forgot-password-frame3">
            <img
              alt="Logo2640"
              src="/external/logo2640-cglt.svg"
              className="forgot-password-logo"
            />
            <span className="forgot-password-text">HOUSOL</span>
          </div>
          <div className="forgot-password-frame16">
            <span className="forgot-password-text1">
              <span className="Heading3">Reset Password</span>
              <br></br>
            </span>
            <form className="forgot-password-form">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="forgot-password-textinput input"
              />
              <button type="submit" className="forgot-password-buttons">
                <span className="forgot-password-text4">Reset</span>
              </button>
            </form>
            <span className="forgot-password-text5">
              <span className="Mediumbodytext">
                Already have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="forgot-password-text7">Sign In</span>
            </span>
          </div>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-s61-1500w.png"
          loading="lazy"
          className="forgot-password-pasted-image"
        />
      </div>
    </div>
  )
}

export default ForgotPassword

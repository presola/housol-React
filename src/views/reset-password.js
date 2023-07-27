import React from 'react'

import { Helmet } from 'react-helmet'

import './reset-password.css'

const ResetPassword = (props) => {
  return (
    <div className="reset-password-container">
      <Helmet>
        <title>ResetPassword - housol</title>
        <meta property="og:title" content="ResetPassword - housol" />
      </Helmet>
      <div className="reset-password-sign-in">
        <div className="reset-password-frame7">
          <div className="reset-password-frame3">
            <img
              alt="Logo2640"
              src="/external/logo2640-cglt.svg"
              className="reset-password-logo"
            />
            <span className="reset-password-text">HOUSOL</span>
          </div>
          <div className="reset-password-frame16">
            <span className="reset-password-text1">Enter New Password</span>
            <form className="reset-password-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="reset-password-textinput input"
              />
              <input
                type="password"
                name="confirm-password"
                placeholder="Re-enter Password"
                className="reset-password-textinput1 input"
              />
              <button type="submit" className="reset-password-buttons">
                <span className="reset-password-text2">
                  <span className="LargeButtontext">Change Password</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-s61-1500w.png"
          loading="lazy"
          className="reset-password-pasted-image"
        />
      </div>
    </div>
  )
}

export default ResetPassword

import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>SignUp - housol</title>
        <meta property="og:title" content="SignUp - housol" />
      </Helmet>
      <div className="sign-up-sign-in">
        <div className="sign-up-frame7">
          <div className="sign-up-frame3">
            <img
              alt="Logo2640"
              src="/external/logo2640-cglt.svg"
              className="sign-up-logo"
            />
            <span className="sign-up-text">HOUSOL</span>
          </div>
          <div className="sign-up-frame16">
            <span className="sign-up-text1 Heading3">Sign Up</span>
            <form className="sign-up-form">
              <input
                type="text"
                name=" name"
                placeholder="Name"
                className="sign-up-textinput input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="sign-up-textinput1 input"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="sign-up-textinput2 input"
              />
              <input
                type="password"
                name="confirm-password"
                placeholder="Re-enter Password"
                className="sign-up-textinput3 input"
              />
              <button type="submit" className="sign-up-buttons">
                <span className="sign-up-text2 LargeButtontext">Next</span>
              </button>
            </form>
            <span className="sign-up-text3">
              <span className="Mediumbodytext">
                Already have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sign-up-text5">Sign In</span>
            </span>
          </div>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-s61-1500w.png"
          loading="lazy"
          className="sign-up-pasted-image"
        />
      </div>
    </div>
  )
}

export default SignUp

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - housol</title>
        <meta property="og:title" content="SignIn - housol" />
      </Helmet>
      <div className="sign-in-sign-in">
        <div className="sign-in-frame7">
          <div className="sign-in-frame3">
            <img
              alt="Logo2640"
              src="/external/logo2640-cglt.svg"
              className="sign-in-logo"
            />
            <span className="sign-in-text">HOUSOL</span>
          </div>
          <div className="sign-in-frame16">
            <span className="sign-in-text1 Heading3">Sign In</span>
            <form className="sign-in-form">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="sign-in-textinput input"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="sign-in-textinput1 input"
              />
              <Link to="/app-home" className="sign-in-buttons">
                <span className="sign-in-text2 LargeButtontext">Sign In</span>
              </Link>
            </form>
            <Link to="/sign-up" className="sign-in-text3">
              <span className="Mediumbodytext">
                Don&apos;t have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sign-in-text5">Sign Up</span>
            </Link>
            <Link to="/forgot-password" className="sign-in-text6">
              <span className="Mediumbodytext">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sign-in-text8">Forgot Password ?</span>
            </Link>
          </div>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-s61-1500w.png"
          loading="lazy"
          className="sign-in-pasted-image"
        />
      </div>
    </div>
  )
}

export default SignIn

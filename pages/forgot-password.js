import React from 'react'
import Head from 'next/head'

const ForgotPassword = (props) => {
  return (
    <>
      <div className="forgot-password-container">
        <Head>
          <title>ForgotPassword - housol</title>
          <meta property="og:title" content="ForgotPassword - housol" />
        </Head>
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
      <style jsx>
        {`
          .forgot-password-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .forgot-password-sign-in {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: linear-gradient(
              97deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 51%,
              rgba(221, 244, 240, 1) 100%
            );
          }
          .forgot-password-frame7 {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 50%;
            display: flex;
            padding: 49px 67px;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              97deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 51%,
              rgba(221, 244, 240, 1) 100%
            );
          }
          .forgot-password-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .forgot-password-logo {
            width: 56px;
            height: auto;
          }
          .forgot-password-text {
            color: #181818;
            height: auto;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Overlock SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .forgot-password-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .forgot-password-text1 {
            color: rgb(0, 0, 0);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .forgot-password-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .forgot-password-textinput {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .forgot-password-buttons {
            gap: 16px;
            width: 270px;
            height: 56px;
            display: flex;
            padding: 10px 96px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .forgot-password-text4 {
            color: rgb(255, 255, 255);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .forgot-password-text5 {
            color: rgb(0, 0, 0);
            width: 300px;
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .forgot-password-text7 {
            color: var(--dl-color-primary-100);
          }
          .forgot-password-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .forgot-password-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .forgot-password-text5 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .forgot-password-text7 {
              color: var(--dl-color-primary-100);
            }
            .forgot-password-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .forgot-password-sign-in {
              flex-direction: column;
            }
            .forgot-password-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .forgot-password-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .forgot-password-frame7 {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default ForgotPassword

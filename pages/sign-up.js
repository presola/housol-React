import React from 'react'
import Head from 'next/head'

const SignUp = (props) => {
  return (
    <>
      <div className="sign-up-container">
        <Head>
          <title>SignUp - housol</title>
          <meta property="og:title" content="SignUp - housol" />
        </Head>
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
      <style jsx>
        {`
          .sign-up-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-up-sign-in {
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
          .sign-up-frame7 {
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
          .sign-up-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .sign-up-logo {
            width: 56px;
            height: auto;
          }
          .sign-up-text {
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
          .sign-up-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .sign-up-text1 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .sign-up-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-up-textinput {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-up-textinput1 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-up-textinput2 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-up-textinput3 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-up-buttons {
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
          .sign-up-text2 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .sign-up-text3 {
            color: rgb(0, 0, 0);
            width: 300px;
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .sign-up-text5 {
            color: var(--dl-color-primary-80);
            font-size: 18px;
          }
          .sign-up-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .sign-up-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .sign-up-text3 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .sign-up-text5 {
              color: var(--dl-color-primary-100);
            }
            .sign-up-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .sign-up-sign-in {
              flex-direction: column;
            }
            .sign-up-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .sign-up-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .sign-up-frame7 {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignUp

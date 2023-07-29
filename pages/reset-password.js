import React from 'react'
import Head from 'next/head'

const ResetPassword = (props) => {
  return (
    <>
      <div className="reset-password-container">
        <Head>
          <title>ResetPassword - housol</title>
          <meta property="og:title" content="ResetPassword - housol" />
        </Head>
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
      <style jsx>
        {`
          .reset-password-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reset-password-sign-in {
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
          .reset-password-frame7 {
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
          .reset-password-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .reset-password-logo {
            width: 56px;
            height: auto;
          }
          .reset-password-text {
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
          .reset-password-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .reset-password-text1 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 700px;
            line-height: normal;
            font-stretch: normal;
          }
          .reset-password-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .reset-password-textinput {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .reset-password-textinput1 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .reset-password-buttons {
            gap: 16px;
            width: 270px;
            height: 56px;
            display: flex;
            flex-shrink: 0;
            padding-top: 10px;
            border-radius: 5px;
            padding-bottom: 10px;
            justify-content: center;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .reset-password-text2 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: auto;
            text-align: center;
            line-height: normal;
          }
          .reset-password-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .reset-password-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .reset-password-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .reset-password-sign-in {
              flex-direction: column;
            }
            .reset-password-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .reset-password-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .reset-password-frame7 {
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

export default ResetPassword

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container">
        <Head>
          <title>SignIn - housol</title>
          <meta property="og:title" content="SignIn - housol" />
        </Head>
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
                <Link href="/app-home">
                  <a className="sign-in-link">
                    <span className="sign-in-text2 LargeButtontext">
                      Sign In
                    </span>
                  </a>
                </Link>
              </form>
              <Link href="/sign-up">
                <a className="sign-in-link1">
                  <span className="Mediumbodytext">
                    Don&apos;t have an account?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sign-in-text5">Sign Up</span>
                </a>
              </Link>
              <Link href="/forgot-password">
                <a className="sign-in-link2">
                  <span className="Mediumbodytext">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sign-in-text8">Forgot Password ?</span>
                </a>
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
      <style jsx>
        {`
          .sign-in-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-sign-in {
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
          .sign-in-frame7 {
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
          .sign-in-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .sign-in-logo {
            width: 56px;
            height: auto;
          }
          .sign-in-text {
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
          .sign-in-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-text1 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .sign-in-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-textinput {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-in-textinput1 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .sign-in-link {
            gap: 16px;
            width: 270px;
            height: 56px;
            display: flex;
            padding: 10px 96px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .sign-in-text2 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .sign-in-link1 {
            color: rgb(0, 0, 0);
            width: 300px;
            height: auto;
            text-align: left;
            line-height: normal;
            text-decoration: none;
          }
          .sign-in-text5 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
          }
          .sign-in-link2 {
            color: var(--dl-color-primary-100);
            width: 300px;
            height: auto;
            text-align: center;
            line-height: normal;
            text-decoration: none;
          }
          .sign-in-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .sign-in-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .sign-in-link1 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .sign-in-text5 {
              color: var(--dl-color-primary-100);
            }
            .sign-in-link2 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .sign-in-text8 {
              color: var(--dl-color-primary-100);
            }
            .sign-in-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .sign-in-sign-in {
              flex-direction: column;
            }
            .sign-in-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .sign-in-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .sign-in-frame7 {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .sign-in-link2 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              font-style: normal;
              font-family: Nunito;
              line-height: normal;
            }
            .sign-in-text8 {
              color: var(--dl-color-primary-100);
            }
          }
        `}
      </style>
    </>
  )
}

export default SignIn

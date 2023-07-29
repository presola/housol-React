import React from 'react'
import Head from 'next/head'

const EnterSecurityAnswers = (props) => {
  return (
    <>
      <div className="enter-security-answers-container">
        <Head>
          <title>EnterSecurityAnswers - housol</title>
          <meta property="og:title" content="EnterSecurityAnswers - housol" />
        </Head>
        <div className="enter-security-answers-sign-in">
          <div className="enter-security-answers-frame7">
            <div className="enter-security-answers-frame3">
              <img
                alt="Logo2640"
                src="/external/logo2640-cglt.svg"
                className="enter-security-answers-logo"
              />
              <span className="enter-security-answers-text">HOUSOL</span>
            </div>
            <div className="enter-security-answers-frame16">
              <span className="enter-security-answers-text1">
                Enter Security Questions
              </span>
              <form
                name="firstQuestion"
                className="enter-security-answers-form"
              >
                <input
                  type="text"
                  name=" firstQuestion"
                  disabled="Question"
                  placeholder="Question"
                  className="enter-security-answers-textinput input"
                />
                <input
                  type="text"
                  name=" firstAnswer"
                  placeholder="Answer"
                  className="enter-security-answers-textinput1 input"
                />
                <input
                  type="text"
                  name="secondQuestion"
                  disabled
                  placeholder="Question 2"
                  className="enter-security-answers-textinput2 input"
                />
                <input
                  type="text"
                  name="secondAnswer"
                  placeholder="Enter Answer 2"
                  className="enter-security-answers-textinput3 input"
                />
                <button
                  type="submit"
                  className="enter-security-answers-buttons"
                >
                  <span className="enter-security-answers-text2">Submit</span>
                </button>
              </form>
              <span className="enter-security-answers-text3">
                <span className="Mediumbodytext">
                  Already have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="enter-security-answers-text5">Sign In</span>
              </span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/external/pastedimage-s61-1500w.png"
            loading="lazy"
            className="enter-security-answers-pasted-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .enter-security-answers-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .enter-security-answers-sign-in {
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
          .enter-security-answers-frame7 {
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
          .enter-security-answers-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .enter-security-answers-logo {
            width: 56px;
            height: auto;
          }
          .enter-security-answers-text {
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
          .enter-security-answers-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .enter-security-answers-text1 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 700px;
            line-height: normal;
            font-stretch: normal;
          }
          .enter-security-answers-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .enter-security-answers-textinput {
            color: var(--dl-color-gray-black);
            width: 100%;
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-gray-black);
          }
          .enter-security-answers-textinput1 {
            color: var(--dl-color-gray-black);
            width: 100%;
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-gray-black);
          }
          .enter-security-answers-textinput2 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .enter-security-answers-textinput3 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .enter-security-answers-buttons {
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
          .enter-security-answers-text2 {
            color: rgb(255, 255, 255);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .enter-security-answers-text3 {
            color: rgb(0, 0, 0);
            width: 300px;
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .enter-security-answers-text5 {
            color: var(--dl-color-primary-80);
          }
          .enter-security-answers-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .enter-security-answers-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .enter-security-answers-text2 {
              width: 100%;
            }
            .enter-security-answers-text3 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .enter-security-answers-text5 {
              color: var(--dl-color-primary-100);
            }
            .enter-security-answers-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .enter-security-answers-sign-in {
              flex-direction: column;
            }
            .enter-security-answers-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .enter-security-answers-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .enter-security-answers-frame7 {
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

export default EnterSecurityAnswers

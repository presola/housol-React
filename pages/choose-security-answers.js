import React from 'react'
import Head from 'next/head'

const ChooseSecurityAnswers = (props) => {
  return (
    <>
      <div className="choose-security-answers-container">
        <Head>
          <title>ChooseSecurityAnswers - housol</title>
          <meta property="og:title" content="ChooseSecurityAnswers - housol" />
        </Head>
        <div className="choose-security-answers-sign-in">
          <div className="choose-security-answers-frame7">
            <div className="choose-security-answers-frame3">
              <img
                alt="Logo2640"
                src="/external/logo2640-cglt.svg"
                className="choose-security-answers-logo"
              />
              <span className="choose-security-answers-text">HOUSOL</span>
            </div>
            <div className="choose-security-answers-frame16">
              <span className="choose-security-answers-text1">
                Choose Security Questions
              </span>
              <form
                name="firstQuestion"
                className="choose-security-answers-form"
              >
                <select className="choose-security-answers-select">
                  <option value="select">Select Question 1</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <input
                  type="text"
                  name=" firstAnswer"
                  placeholder="Answer"
                  className="choose-security-answers-textinput input"
                />
                <select
                  name="secondQuestion"
                  className="choose-security-answers-select1"
                >
                  <option value="select" selected>
                    Select Question 2
                  </option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <input
                  type="text"
                  name="secondAnswer"
                  placeholder="Enter Answer 2"
                  className="choose-security-answers-textinput1 input"
                />
                <button
                  type="submit"
                  className="choose-security-answers-buttons"
                >
                  <span className="choose-security-answers-text2 LargeButtontext">
                    Sign Up
                  </span>
                </button>
              </form>
              <span className="choose-security-answers-text3">
                <span className="Mediumbodytext">
                  Already have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="choose-security-answers-text5">Sign In</span>
              </span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/external/pastedimage-s61-1500w.png"
            loading="lazy"
            className="choose-security-answers-pasted-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .choose-security-answers-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .choose-security-answers-sign-in {
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
          .choose-security-answers-frame7 {
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
          .choose-security-answers-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .choose-security-answers-logo {
            width: 56px;
            height: auto;
          }
          .choose-security-answers-text {
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
          .choose-security-answers-frame16 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .choose-security-answers-text1 {
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
          .choose-security-answers-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .choose-security-answers-select {
            width: 100%;
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .choose-security-answers-textinput {
            color: var(--dl-color-gray-black);
            width: 100%;
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-gray-black);
          }
          .choose-security-answers-select1 {
            width: 100%;
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .choose-security-answers-textinput1 {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .choose-security-answers-buttons {
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
          .choose-security-answers-text2 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .choose-security-answers-text3 {
            color: rgb(0, 0, 0);
            width: 300px;
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .choose-security-answers-text5 {
            color: var(--dl-color-primary-80);
          }
          .choose-security-answers-pasted-image {
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .choose-security-answers-frame7 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .choose-security-answers-select {
              width: 100%;
              height: var(--dl-size-size-small);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .choose-security-answers-select1 {
              width: 100%;
              height: var(--dl-size-size-small);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .choose-security-answers-text2 {
              width: 100%;
            }
            .choose-security-answers-text3 {
              color: rgb(0, 0, 0);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Nunito;
              line-height: normal;
            }
            .choose-security-answers-text5 {
              color: var(--dl-color-primary-100);
            }
            .choose-security-answers-pasted-image {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .choose-security-answers-sign-in {
              flex-direction: column;
            }
            .choose-security-answers-frame7 {
              flex: 1;
              order: 1;
              width: 100%;
            }
            .choose-security-answers-pasted-image {
              order: 0;
              width: 100%;
              height: 350px;
            }
          }
          @media (max-width: 479px) {
            .choose-security-answers-frame7 {
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

export default ChooseSecurityAnswers

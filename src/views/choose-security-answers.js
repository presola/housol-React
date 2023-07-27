import React from 'react'

import { Helmet } from 'react-helmet'

import './choose-security-answers.css'

const ChooseSecurityAnswers = (props) => {
  return (
    <div className="choose-security-answers-container">
      <Helmet>
        <title>ChooseSecurityAnswers - housol</title>
        <meta property="og:title" content="ChooseSecurityAnswers - housol" />
      </Helmet>
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
            <form name="firstQuestion" className="choose-security-answers-form">
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
              <button type="submit" className="choose-security-answers-buttons">
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
  )
}

export default ChooseSecurityAnswers

import React from 'react'

import { Helmet } from 'react-helmet'

import './enter-security-answers.css'

const EnterSecurityAnswers = (props) => {
  return (
    <div className="enter-security-answers-container">
      <Helmet>
        <title>EnterSecurityAnswers - housol</title>
        <meta property="og:title" content="EnterSecurityAnswers - housol" />
      </Helmet>
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
            <form name="firstQuestion" className="enter-security-answers-form">
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
              <button type="submit" className="enter-security-answers-buttons">
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
  )
}

export default EnterSecurityAnswers

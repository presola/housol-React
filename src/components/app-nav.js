import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './app-nav.css'

const AppNav = (props) => {
  return (
    <div className="app-nav-container">
      <header data-thq="thq-navbar" className="app-nav-navbar-interactive">
        <div className="app-nav-frame3">
          <img
            alt={props.Logo_alt}
            src={props.Logo_src}
            className="app-nav-logo"
          />
          <span className="app-nav-text">{props.text}</span>
        </div>
        <div data-thq="thq-navbar-nav" className="app-nav-desktop-menu">
          <nav className="app-nav-links">
            <div className="app-nav-container1">
              <svg viewBox="0 0 1024 1024" className="app-nav-icon">
                <path d="M949.845 446.635c-144.64-121.771-407.296-348.629-409.899-350.933l-27.947-24.021-27.819 24.021c-2.645 2.261-265.429 229.035-412.16 351.915-18.688 16.811-29.355 40.32-29.355 64.384 0 47.104 38.229 85.333 85.333 85.333h42.667v256c0 47.104 38.229 85.333 85.333 85.333h128 384c47.104 0 85.333-38.229 85.333-85.333v-256h42.667c47.104 0 85.333-38.229 85.333-85.333 0-25.515-11.733-49.536-31.488-65.365zM597.333 853.333h-170.667v-213.333h170.667v213.333zM768 512l0.085 341.333c-0.085 0-128.085 0-128.085 0v-256h-256v256h-128v-341.333h-128.043c117.973-98.645 312.107-265.685 384.043-327.68 71.936 61.995 265.984 228.992 384 327.723 0-0-128-0-128-0.043z"></path>
              </svg>
              <span className="app-nav-text01">{props.text1}</span>
            </div>
            <div className="app-nav-container2">
              <svg viewBox="0 0 1024 1024" className="app-nav-icon02">
                <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
              </svg>
              <span>{props.text2}</span>
            </div>
            <Link to="/insights" className="app-nav-navlink">
              <div className="app-nav-container3">
                <svg viewBox="0 0 1024 1024" className="app-nav-icon04">
                  <path d="M938 296l-130 146q74 118 88 262h-86q-12-102-62-194l-172 194-170-172-256 256-64-64 320-320 170 172 122-140q-118-138-288-138-146 0-264 104l-60-60q144-128 324-128 204 0 346 158l122-136z"></path>
                </svg>
                <span>{props.text3}</span>
              </div>
            </Link>
            <div className="app-nav-container4">
              <svg viewBox="0 0 1024 1024" className="app-nav-icon06">
                <path d="M854 682v-512h-684v598l86-86h598zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
              </svg>
              <span>{props.text4}</span>
            </div>
          </nav>
          <div className="app-nav-buttons">
            <svg viewBox="0 0 1024 1024" className="app-nav-icon08">
              <path d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"></path>
            </svg>
            <button className="app-nav-register button">
              {props.Register}
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="app-nav-burger-menu">
          <svg viewBox="0 0 1024 1024" className="app-nav-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="app-nav-mobile-menu">
          <div className="app-nav-nav">
            <div className="app-nav-top">
              <img
                alt={props.Logo_alt1}
                src={props.Logo_src1}
                className="app-nav-logo1"
              />
              <div data-thq="thq-close-menu" className="app-nav-close-menu">
                <svg viewBox="0 0 1024 1024" className="app-nav-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="app-nav-links1">
              <span className="app-nav-text05">{props.text5}</span>
              <span className="app-nav-text06">{props.text6}</span>
              <span className="app-nav-text07">{props.text7}</span>
              <span className="app-nav-text08">{props.text8}</span>
              <span className="app-nav-text09">{props.text9}</span>
            </nav>
            <div className="app-nav-buttons1">
              <button className="app-nav-login button">{props.Login}</button>
              <button className="button">{props.Register1}</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-nav-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="app-nav-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="app-nav-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

AppNav.defaultProps = {
  Logo_alt: 'Logo2640',
  text6: 'Features',
  text2: 'Recommendations',
  text3: 'Insights',
  Logo_src1: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text5: 'About',
  text8: 'Team',
  Logo_alt1: 'image',
  Register1: 'Register',
  Register: 'Profile',
  text7: 'Pricing',
  Login: 'Login',
  text9: 'Blog',
  Logo_src: '/external/logo2640-cglt.svg',
  text1: 'Home',
  text: 'HOUSOL',
  text4: 'Chat',
}

AppNav.propTypes = {
  Logo_alt: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  Logo_src1: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  Logo_alt1: PropTypes.string,
  Register1: PropTypes.string,
  Register: PropTypes.string,
  text7: PropTypes.string,
  Login: PropTypes.string,
  text9: PropTypes.string,
  Logo_src: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default AppNav

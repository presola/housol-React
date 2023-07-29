import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'

import { Helmet } from 'react-helmet'

import Offers from '../components/offers'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>housol</title>
        <meta property="og:title" content="housol" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-frame3">
                <img
                  alt="Logo2640"
                  src="/external/logo2640-cglt.svg"
                  className="home-logo"
                />
                <span className="home-text">HOUSOL</span>
              </div>
              <div data-thq="thq-burger-menu" className="home-menu">
                <div className="home-links">
                  <span className="home-text01 link">Home</span>
                  <a href="#about" className="home-link link">
                    About
                  </a>
                </div>
                <Link to="/app-home" className="home-navlink button">
                  Get Started
                </Link>
                <button className="home-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-container1">
                    <img
                      alt="logo"
                      src="/external/logo2640-cglt.svg"
                      className="home-logo1"
                    />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav1"
                  >
                    <span className="home-text02">Home</span>
                    <span className="home-text03">About</span>
                    <span className="home-text04">Contact</span>
                  </nav>
                  <div className="home-container2">
                    <button className="home-login button">Get Started</button>
                  </div>
                </div>
              </div>
            </header>
            <div className="home-container3">
              <div className="home-center">
                <div className="home-heading">
                  <h1 className="home-header">
                    Empowering You to Make Informed Decisions in the Housing
                    Market
                  </h1>
                  <p className="home-caption">
                    Discover Houses Near You with Accurate Predictions and
                    Competitive Prices
                  </p>
                </div>
                <div className="home-border">
                  <div className="home-filter">
                    <div className="home-container4">
                      <img
                        alt="image"
                        src="/Icons/location.svg"
                        className="home-image"
                      />
                      <select className="home-select">
                        <option value="missouri" selected>
                          Missouri
                        </option>
                        <option value="california">California</option>
                        <option value="newyork">New York</option>
                      </select>
                    </div>
                    <div className="home-container5">
                      <select className="home-select1">
                        <option value="select" selected>
                          Select Room
                        </option>
                        <option value="oneBedroom">One Bedroom</option>
                        <option value="twoBedroom">Two Bedroom</option>
                        <option value="threeBedroom">Three Bedroom</option>
                      </select>
                      <Link to="/app-home" className="home-navlink1">
                        <div className="home-search">
                          <img
                            alt="image"
                            src="/Icons/search.svg"
                            className="home-icon04"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/Home/houseinfo-400w.png"
                loading="lazy"
                className="home-image1"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="home-what-we-do">
        <div className="home-curved-box">
          <img
            alt="pastedImage"
            src="/external/pastedimage-cazk.svg"
            className="home-pasted-image"
          />
          <div className="home-frame13">
            <span className="home-text05">
              <span>What we do</span>
            </span>
            <span className="home-text07">
              <span>
                <span>
                  {' '}
                  We analyze vast amounts of housing data to deliver precise
                  predictions and personalized recommendations tailored to your
                  preferences.
                </span>
                <br></br>
                <span>
                  Our advanced algorithms analyze various data points to help
                  you make informed decisions in the housing market
                </span>
              </span>
            </span>
          </div>
        </div>
      </section>
      <div id="how-it-works" className="home-container6">
        <h2 className="home-header1">How It Works</h2>
        <div className="home-frame28">
          <div className="home-frame30">
            <span className="home-text12">1</span>
          </div>
          <span className="home-text13">
            <span>
              Enter Your Preferences&quot;: Use the search form to input your
              location, price range, and other preferences
            </span>
          </span>
        </div>
        <div className="home-frame281">
          <div className="home-frame301">
            <span className="home-text15">2</span>
          </div>
          <span className="home-text16">
            Enter Browse Recommended Houses&quot;: Our AI algorithms will
            generate a list of houses that match your criteria.Your
            Preferences&quot;: Use the search form to input your location, price
            range, and other preferences
          </span>
        </div>
        <div className="home-frame282">
          <div className="home-frame302">
            <span className="home-text17">3</span>
          </div>
          <span className="home-text18">
            Explore Details and Photos&quot;: View detailed information, photos,
            and key features of each house.
          </span>
        </div>
      </div>
      <section id="tours" className="home-quick-view">
        <div className="home-main1">
          <div className="home-heading1">
            <h2 className="home-header2">Explore Prices Per Location</h2>
            <p className="home-caption1">
              Explore predictions for the upcoming year, as well as data from
              the previous year to see the insights you get
            </p>
          </div>
          <div className="home-sorting">
            <button className="home-option07 button-option button">2022</button>
            <button className="button-option button">2023</button>
            <button className="button-option button">2024</button>
          </div>
        </div>
        <Offers></Offers>
        <div className="home-pagination">
          <button className="home-previous button-option button">
            <span>See More</span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content1">
          <div className="home-heading2">
            <h2 className="home-header3">Frequently asked questions</h2>
            <p className="home-caption2">
              Have some questions about how the application works, see our
              frequently asked questions below
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content2">
                <span className="home-header4">
                  How can this web application help me in making informed
                  decisions about buying or selling a property?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description"
                >
                  The web application utilizes advanced algorithms and
                  historical housing market data to provide accurate predictions
                  for property prices. By inputting relevant details about a
                  property, such as location, size, features, and market trends,
                  you can make informed decisions about buying or selling a
                  property.
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon05"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon07"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content3">
                <span className="home-header5">
                  Can I trust the predictions provided by the application to be
                  in line with the actual market values?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                  Yes, the application&apos;s predictions are based on
                  sophisticated statistical models and data analysis, making
                  them highly reliable. However, it&apos;s important to remember
                  that housing markets can be influenced by various factors, so
                  the application serves as a helpful tool rather than an
                  absolute guarantee.
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon09"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon11"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content4">
                <span className="home-header6">
                  What factors are taken into consideration by the application
                  to make accurate predictions?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  The web application considers a wide range of factors,
                  including historical sales data, property features, location
                  trends, economic indicators, and other market variables to
                  generate accurate predictions.
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon13"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon15"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content5">
                <span className="home-header7">
                  Can I customize the inputs or parameters to get predictions
                  for specific locations or property types?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  Absolutely! The web application allows users to customize
                  inputs and parameters to get predictions tailored to specific
                  locations, property types, and other preferences, providing
                  more personalized insights.
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon17"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon19"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="find" className="home-find">
        <div className="home-heading3">
          <h2 className="home-header8">Find a local guide now</h2>
          <p className="home-caption3">
            Looking for actual real house prices, discover Actual Real House
            Price using Zillow. As a trusted real estate platform, Zillow offers
            comprehensive information on house prices in your desired locations.
            Whether you&apos;re on the hunt for your dream home or seeking
            investment opportunities. Start exploring now to find your perfect
            property match!
          </p>
        </div>
        <a
          href="https://www.zillow.com/homes/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-find1 button"
        >
          Find a local guide
        </a>
      </section>
      <section className="home-footer">
        <div className="home-content6">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading4">
                <div className="home-frame31">
                  <img
                    alt="Logo2640"
                    src="/external/logo2640-cglt.svg"
                    className="home-logo2"
                  />
                  <span className="home-text20">HOUSOL</span>
                </div>
                <p className="home-caption4">
                  <span>
                    Housol is a web application that provides users with the
                    ability to predict house prices in locations and receive
                    recommendations on how to achieve houses in those locations
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-items">
                <a
                  href="https://www.zillow.com/homes/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1 button button-clean"
                >
                  Find a house
                </a>
                <Link to="/app-home" className="home-link2 button button-clean">
                  Predict house prices
                </Link>
                <a
                  href="https://www.zillow.com/mortgage-rates/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3 button button-clean"
                >
                  Get Mortgage rates
                </a>
              </div>
              <div className="home-items1">
                <a
                  href="#how-it-works"
                  className="home-link4 button button-clean"
                >
                  How it works
                </a>
                <a href="#about" className="home-link5 button button-clean">
                  About Us
                </a>
                <button className="home-link6 button button-clean">
                  Privacy Policy
                </button>
                <button className="home-link7 button button-clean">
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Housol. All Rights Reserved.
          </span>
        </div>
      </section>
      <div className="home-accordion1">
        <React.Fragment>
          <Script>{`
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
`}</Script>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Home

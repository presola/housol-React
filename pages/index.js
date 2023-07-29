import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'

import Offers from '../components/offers'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>housol</title>
          <meta property="og:title" content="housol" />
        </Head>
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
                  <Link href="/app-home">
                    <a className="home-link01 button">Get Started</a>
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
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
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
                        <Link href="/app-home">
                          <a className="home-link02">
                            <div className="home-search">
                              <img
                                alt="image"
                                src="/Icons/search.svg"
                                className="home-icon04"
                              />
                            </div>
                          </a>
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
                    predictions and personalized recommendations tailored to
                    your preferences.
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
              Preferences&quot;: Use the search form to input your location,
              price range, and other preferences
            </span>
          </div>
          <div className="home-frame282">
            <div className="home-frame302">
              <span className="home-text17">3</span>
            </div>
            <span className="home-text18">
              Explore Details and Photos&quot;: View detailed information,
              photos, and key features of each house.
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
              <button className="home-option07 button-option button">
                2022
              </button>
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
                    historical housing market data to provide accurate
                    predictions for property prices. By inputting relevant
                    details about a property, such as location, size, features,
                    and market trends, you can make informed decisions about
                    buying or selling a property.
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
                    Can I trust the predictions provided by the application to
                    be in line with the actual market values?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description1"
                  >
                    Yes, the application&apos;s predictions are based on
                    sophisticated statistical models and data analysis, making
                    them highly reliable. However, it&apos;s important to
                    remember that housing markets can be influenced by various
                    factors, so the application serves as a helpful tool rather
                    than an absolute guarantee.
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
                    inputs and parameters to get predictions tailored to
                    specific locations, property types, and other preferences,
                    providing more personalized insights.
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
              Price using Zillow. As a trusted real estate platform, Zillow
              offers comprehensive information on house prices in your desired
              locations. Whether you&apos;re on the hunt for your dream home or
              seeking investment opportunities. Start exploring now to find your
              perfect property match!
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
                      recommendations on how to achieve houses in those
                      locations
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
                    className="home-link03 button button-clean"
                  >
                    Find a house
                  </a>
                  <Link href="/app-home">
                    <a className="home-link05 button button-clean">
                      Predict house prices
                    </a>
                  </Link>
                  <a
                    href="https://www.zillow.com/mortgage-rates/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link06 button button-clean"
                  >
                    Get Mortgage rates
                  </a>
                </div>
                <div className="home-items1">
                  <a
                    href="#how-it-works"
                    className="home-link07 button button-clean"
                  >
                    How it works
                  </a>
                  <a href="#about" className="home-link08 button button-clean">
                    About Us
                  </a>
                  <button className="home-link09 button button-clean">
                    Privacy Policy
                  </button>
                  <button className="home-link10 button button-clean">
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
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            width: 100%;
            height: 868px;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-size: cover;
            background-color: var(--dl-color-gray-white);
            background-image: d015854f-734b-4393-9aec-59e02e000541;
            background-repeat: no-repeat;
            background-position: right;
          }
          .home-content {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-logo {
            width: 56px;
            height: auto;
          }
          .home-text {
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
          .home-menu {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text01 {
            color: #181818;
            text-decoration: none;
          }
          .home-link {
            color: #181818;
            text-decoration: none;
          }
          .home-link01 {
            color: rgb(255, 255, 255);
            text-decoration: none;
            background-color: rgb(2, 2, 2);
          }
          .home-hamburger {
            cursor: pointer;
            display: none !important;
            padding: var(--dl-space-space-unit);
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: #036f5e;
          }
          .home-icon {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            height: 33px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-center {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            color: #181818;
            font-size: 48px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption {
            color: #181818;
            font-size: 18px;
            max-width: 700px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-border {
            width: 100%;
            display: flex;
            max-width: 700px;
            align-items: center;
            padding-top: 0px;
            border-color: #036f5e;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .home-filter {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 500px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-container4 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-image {
            height: 22px;
            object-fit: cover;
          }
          .home-select {
            width: 100%;
            height: var(--dl-size-size-small);
          }
          .home-container5 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link02 {
            display: contents;
          }
          .home-search {
            flex: 1;
            width: var(--dl-size-size-small);
            cursor: pointer;
            height: var(--dl-size-size-small);
            display: flex;
            padding: 12px;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: #fad87a;
          }
          .home-search:hover {
            opacity: 0.5;
          }
          .home-icon04 {
            width: 18px;
            object-fit: cover;
          }
          .home-image1 {
            flex: 1;
            width: 380px;
            height: 100%;
            align-self: center;
            max-height: 700px;
            object-fit: contain;
          }
          .home-what-we-do {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-curved-box {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 240px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(154, 236, 223, 1);
          }
          .home-pasted-image {
            width: 268px;
            height: 329px;
          }
          .home-frame13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            color: rgba(3, 3, 3, 1);
            width: 293px;
            height: auto;
            font-size: 48px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
          }
          .home-text07 {
            color: rgba(3, 3, 3, 1);
            width: 512px;
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Nunito;
            font-weight: 400px;
            line-height: normal;
            font-stretch: normal;
          }
          .home-container6 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 48px;
          }
          .home-header1 {
            color: rgb(53, 43, 42);
            font-size: 48px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-frame28 {
            gap: 32px;
            width: 788px;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: flex-start;
            box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 40px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 40px;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: rgba(255, 255, 255, 1);
          }
          .home-frame30 {
            width: 60px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-radius: 140.56224060058594px;
            justify-content: center;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .home-text12 {
            color: var(--dl-color-secondary-lightblue20ddf4f0);
            width: 72px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: center;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text13 {
            color: rgba(3, 3, 3, 1);
            width: 526px;
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Nunito;
            font-weight: 400px;
            line-height: normal;
            font-stretch: normal;
          }
          .home-frame281 {
            gap: 32px;
            width: 788px;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: flex-end;
            box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 40px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 40px;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: rgba(255, 255, 255, 1);
          }
          .home-frame301 {
            width: 60px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-radius: 140.56224060058594px;
            justify-content: center;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .home-text15 {
            color: var(--dl-color-secondary-lightblue20ddf4f0);
            width: 72px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: center;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text16 {
            color: rgb(3, 3, 3);
            width: 526px;
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Nunito;
            font-weight: 400px;
            line-height: normal;
            font-stretch: normal;
          }
          .home-frame282 {
            gap: 32px;
            width: 788px;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: flex-start;
            box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 40px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 40px;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: rgba(255, 255, 255, 1);
          }
          .home-frame302 {
            width: 60px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-radius: 140.56224060058594px;
            justify-content: center;
            background-color: var(--dl-color-accent_black-100030303);
          }
          .home-text17 {
            color: var(--dl-color-secondary-lightblue20ddf4f0);
            width: 72px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: center;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text18 {
            color: rgb(3, 3, 3);
            width: 526px;
            height: auto;
            font-size: 16px;
            text-align: left;
            line-height: normal;
          }
          .home-quick-view {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: rgba(221, 244, 240, 0.63);
          }
          .home-main1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header2 {
            color: rgb(53, 43, 42);
            font-size: 48px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption1 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-sorting {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-option07 {
            color: #ffffff;
            background-color: var(--dl-color-primary-100);
          }
          .home-pagination {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: rgba(217, 217, 217, 0.04);
          }
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header3 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption2 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header4 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 27px;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon05 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon07 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description1 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon09 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon11 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: auto;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon13 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon15 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header7 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: auto;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon17 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon19 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-find {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: var(--dl-color-primary-80);
          }
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header8 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption3 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-find1 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-secondary-60);
          }
          .home-find1:hover {
            opacity: 0.5;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #1c1c1c;
          }
          .home-content6 {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-frame31 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-logo2 {
            width: 56px;
            height: auto;
          }
          .home-text20 {
            color: #ffffff;
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
          .home-caption4 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-links1 {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-items {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link03 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link05 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link06 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-items1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link07 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link08 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link09 {
            color: rgb(255, 255, 255);
          }
          .home-link10 {
            color: rgb(255, 255, 255);
          }
          .home-copyright {
            color: rgb(118, 105, 104);
            font-size: 12px;
          }
          .home-accordion1 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: auto;
            }
            .home-main {
              height: auto;
              min-height: 800px;
              background-size: contain;
              background-image: ddf9cd2e-3e70-47b0-b916-e23d040f3d63;
            }
            .home-navbar {
              max-width: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-links {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-container3 {
              align-items: center;
            }
            .home-image1 {
              flex: 0;
              width: 280px;
              max-height: 400px;
            }
            .home-what-we-do {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-pasted-image {
              height: var(--dl-size-size-xxlarge);
            }
            .home-quick-view {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-element {
              border-top-width: 1px;
            }
            .home-content2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header4 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header5 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header6 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header7 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content6 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-branding {
              max-width: 80%;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-links1 {
              gap: var(--dl-space-space-sixunits);
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .home-main {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-menu {
              display: flex;
            }
            .home-links {
              display: none;
            }
            .home-link01 {
              display: none;
            }
            .home-hamburger {
              display: flex !important;
            }
            .home-mobile-menu {
              background-color: #397b53;
            }
            .home-icon02 {
              fill: #fff;
            }
            .home-text02 {
              color: #fff;
            }
            .home-text03 {
              color: #fff;
            }
            .home-text04 {
              color: #fff;
            }
            .home-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header {
              font-size: 40px;
              line-height: 40px;
            }
            .home-caption {
              font-size: 16px;
              max-width: 80%;
              line-height: 24px;
            }
            .home-image1 {
              display: none;
            }
            .home-what-we-do {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-curved-box {
              align-items: center;
              border-radius: 160px;
              flex-direction: column;
              justify-content: center;
            }
            .home-frame13 {
              align-items: center;
            }
            .home-text05 {
              text-align: center;
            }
            .home-text07 {
              text-align: center;
            }
            .home-container6 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-frame28 {
              width: 100%;
            }
            .home-frame281 {
              width: 100%;
            }
            .home-frame282 {
              width: 100%;
            }
            .home-quick-view {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-pagination {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-faq {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header3 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element1 {
              align-items: flex-start;
            }
            .home-element2 {
              align-items: flex-start;
            }
            .home-element3 {
              align-items: flex-start;
            }
            .home-find {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header8 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-branding {
              max-width: 70%;
            }
            .home-links1 {
              gap: var(--dl-space-space-fiveunits);
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-copyright {
              color: var(--dl-color-secondary-20);
            }
          }
          @media (max-width: 479px) {
            .home-main {
              min-height: 700px;
            }
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-hamburger {
              background-color: #036f5e;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-center {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-border {
              border-radius: 24px;
            }
            .home-filter {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-container4 {
              gap: var(--dl-space-space-halfunit);
              width: 95%;
              border-right-width: 0px;
            }
            .home-container5 {
              width: 100%;
              justify-content: space-between;
            }
            .home-select1 {
              flex: 1;
            }
            .home-search {
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-curved-box {
              align-items: center;
              border-radius: 130px;
              flex-direction: column;
              justify-content: center;
            }
            .home-pasted-image {
              height: var(--dl-size-size-xlarge);
            }
            .home-frame13 {
              width: 100%;
              align-items: center;
            }
            .home-text05 {
              text-align: center;
            }
            .home-text07 {
              width: auto;
              text-align: center;
            }
            .home-container6 {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-frame28 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-frame281 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-frame282 {
              width: 100%;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-quick-view {
              gap: var(--dl-space-space-twounits);
              background-color: rgba(221, 244, 240, 0.76);
            }
            .home-sorting {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-pagination {
              gap: var(--dl-space-space-halfunit);
            }
            .home-previous {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-faq {
              background-color: var(--dl-color-gray-white);
            }
            .home-header4 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header5 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header6 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header7 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-links1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

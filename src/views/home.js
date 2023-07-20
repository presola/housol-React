import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'

import { Helmet } from 'react-helmet'

import Offer from '../components/offer'
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
                  <span className="home-text02 link">About</span>
                  <a href="#find" className="home-link link">
                    Contact
                  </a>
                </div>
                <button type="button" className="home-button button">
                  Get Started
                </button>
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
                    <span className="home-text03">Home</span>
                    <span className="home-text04">About</span>
                    <span className="home-text05">Contact</span>
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
                    <img
                      alt="image"
                      src="/Icons/location.svg"
                      className="home-image"
                    />
                    <input
                      type="text"
                      placeholder="Enter a location"
                      className="home-textinput input"
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="home-textinput1 input"
                    />
                    <select>
                      <option value="oneBedroom">One Bedroom</option>
                      <option value="twoBedroom">Two Bedroom</option>
                      <option value="threeBedroom">Three Bedroom</option>
                    </select>
                    <div className="home-search">
                      <img
                        alt="image"
                        src="/Icons/search.svg"
                        className="home-icon04"
                      />
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
      <section className="home-what-we-do">
        <div className="home-curved-box">
          <img
            alt="pastedImage"
            src="/external/pastedimage-cazk.svg"
            className="home-pasted-image"
          />
          <div className="home-frame13">
            <span className="home-text06">
              <span>What we do</span>
            </span>
            <span className="home-text08">
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
      <div className="home-container4">
        <h2 className="home-header01">How It Works</h2>
        <div className="home-frame28">
          <div className="home-frame30">
            <span className="home-text13">1</span>
          </div>
          <span className="home-text14">
            <span>
              Enter Your Preferences&quot;: Use the search form to input your
              location, price range, and other preferences
            </span>
          </span>
        </div>
        <div className="home-frame281">
          <div className="home-frame301">
            <span className="home-text16">2</span>
          </div>
          <span className="home-text17">
            Enter Browse Recommended Houses&quot;: Our AI algorithms will
            generate a list of houses that match your criteria.Your
            Preferences&quot;: Use the search form to input your location, price
            range, and other preferences
          </span>
        </div>
        <div className="home-frame282">
          <div className="home-frame302">
            <span className="home-text18">3</span>
          </div>
          <span className="home-text19">
            Explore Details and Photos&quot;: View detailed information, photos,
            and key features of each house.
          </span>
        </div>
      </div>
      <section id="tours" className="home-quick-view">
        <div className="home-main1">
          <div className="home-heading1">
            <h2 className="home-header02">See the world like a local</h2>
            <p className="home-caption1">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-sorting">
            <button className="home-option3 button-option button">2022</button>
            <button className="button-option button">2023</button>
            <button className="button-option button">2024</button>
          </div>
        </div>
        <div className="home-offers">
          <Link to="/">
            <div className="home-offer-container">
              <Offer Image="/Offers/offers-11-1500w.png"></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container1">
              <Offer
                Image="/Offers/offers-21-1500w.png"
                Guides="54 Local guides"
                Location="Barcelona, Spain"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container2">
              <Offer
                Image="/Offers/offers-31-1500w.png"
                Guides="34 Local Guides"
                Location="Machu Picchu, Peru"
              ></Offer>
            </div>
          </Link>
        </div>
        <div className="home-pagination">
          <button className="home-previous button-option button">
            <svg viewBox="0 0 1024 1024" className="home-icon05">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="home-text20">See More</span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content1">
          <div className="home-heading2">
            <h2 className="home-header03">Frequently asked questions</h2>
            <p className="home-caption2">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content2">
                <span className="home-header04">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon07"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon09"
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
                <span className="home-header05">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon11"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon13"
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
                <span className="home-header06">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon15"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon17"
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
                <span className="home-header07">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon19"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon21"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content6">
                <span className="home-header08">
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description4"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon23"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon25"
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
          <h2 className="home-header09">Find a local guide now</h2>
          <p className="home-caption3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button className="home-find1 button">Find a local guide</button>
      </section>
      <section className="home-footer">
        <div className="home-content7">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading4">
                <div className="home-frame31">
                  <img
                    alt="Logo2640"
                    src="/external/logo2640-cglt.svg"
                    className="home-logo2"
                  />
                  <span className="home-text21">HOUSOL</span>
                </div>
                <p className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-items">
                <button className="home-link1 button button-clean">
                  Find a house
                </button>
                <button className="home-link2 button button-clean">
                  Predict house prices
                </button>
                <button className="home-link3 button button-clean">
                  Get Recommendations
                </button>
                <button className="home-link4 button button-clean">
                  Get Mortgage rates
                </button>
              </div>
              <div className="home-items1">
                <button className="home-link5 button button-clean">
                  How it works
                </button>
                <button className="home-link6 button button-clean">
                  About Us
                </button>
                <button className="home-link7 button button-clean">
                  Privacy Policy
                </button>
                <button className="home-link8 button button-clean">
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
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

import React from 'react'

import PropTypes from 'prop-types'

const Offer = (props) => {
  return (
    <>
      <div className="offer-offer">
        <img alt="image" src={props.Image} className="offer-image" />
        <div className="offer-frame13">
          <div className="offer-frame23">
            <img
              alt="ionlocationoutline7038"
              src="/external/ionlocationoutline7038-efj.svg"
              className="offer-ionlocationoutline"
            />
            <span className="offer-text">{props.Location}</span>
          </div>
          <div className="offer-container">
            <div className="offer-frame24">
              <img
                alt="materialsymbolsbedoutline7038"
                src="/external/materialsymbolsbedoutline7038-xgr7.svg"
                className="offer-materialsymbolsbedoutline"
              />
              <span className="Smallbodytext offer-text1">
                <span>4 Bed</span>
              </span>
            </div>
          </div>
          <div className="offer-container1">
            <span className="offer-text3">{props.price}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .offer-offer {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 1px #d4d4d4;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #ffffff;
          }
          .offer-image {
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .offer-frame13 {
            gap: 24px;
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            padding: 10px 24px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .offer-frame23 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .offer-ionlocationoutline {
            width: 18px;
            height: 18px;
          }
          .offer-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .offer-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .offer-frame24 {
            gap: 8px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .offer-materialsymbolsbedoutline {
            width: 24px;
            height: 24px;
          }
          .offer-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .offer-text3 {
            font-size: 24px;
            font-style: normal;
            font-family: Nunito;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .offer-image {
              width: 100%;
            }
            .offer-frame13 {
              gap: var(--dl-space-space-unit);
              position: relative;
            }
            .offer-container {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              justify-content: flex-start;
            }
            .offer-text1 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Offer.defaultProps = {
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  Guides: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Location: 'Missouri, United States',
  price: '$560,000',
  button: 'More Details',
}

Offer.propTypes = {
  Image: PropTypes.string,
  Guides: PropTypes.string,
  Description: PropTypes.string,
  Location: PropTypes.string,
  price: PropTypes.string,
  button: PropTypes.string,
}

export default Offer

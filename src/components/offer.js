import React from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
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
        <div className="offer-group12">
          <div className="offer-frame24">
            <img
              alt="materialsymbolsbedoutline7038"
              src="/external/materialsymbolsbedoutline7038-xgr7.svg"
              className="offer-materialsymbolsbedoutline"
            />
            <span className="offer-text1 Smallbodytext">
              <span>4 Bed</span>
            </span>
          </div>
          <div className="offer-frame25">
            <img
              alt="Vector7039"
              src="/external/vector7039-6p39.svg"
              className="offer-vector"
            />
            <span className="offer-text3 Smallbodytext">
              <span>3 Bath</span>
            </span>
          </div>
          <div className="offer-frame26">
            <img
              alt="materialsymbolsgarageoutline7039"
              src="/external/materialsymbolsgarageoutline7039-50ba.svg"
              className="offer-materialsymbolsgarageoutline"
            />
            <span className="offer-text5 Smallbodytext">
              <span>2 Garage</span>
            </span>
          </div>
        </div>
        <div className="offer-container">
          <span className="offer-text7">{props.price}</span>
          <button type="button" className="offer-button button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  Guides: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Location: 'London, Ontario',
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

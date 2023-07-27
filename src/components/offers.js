import React from 'react'
import { Link } from 'react-router-dom'

import Offer from './offer'
import './offers.css'

const Offers = (props) => {
  return (
    <div className="offers-offers">
      <Link to="/">
        <div className="offers-offer-container">
          <Offer Image="/Offers/offers-11-1500w.png"></Offer>
        </div>
      </Link>
      <Link to="/">
        <div className="offers-offer-container1">
          <Offer
            Image="/Offers/offers-21-1500w.png"
            Guides="54 Local guides"
            Location="Barcelona, Spain"
          ></Offer>
        </div>
      </Link>
      <Link to="/">
        <div className="offers-offer-container2">
          <Offer
            Image="/Offers/offers-31-1500w.png"
            Guides="34 Local Guides"
            Location="Machu Picchu, Peru"
          ></Offer>
        </div>
      </Link>
    </div>
  )
}

export default Offers

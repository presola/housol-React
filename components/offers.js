import React from 'react'
import Link from 'next/link'

import Offer from './offer'

const Offers = (props) => {
  return (
    <>
      <div className="offers-offers">
        <Link href="/">
          <a>
            <div className="offers-offer-container">
              <Offer
                Image="/Offers/offers-11-1500w.png"
                price="$600,000"
              ></Offer>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className="offers-offer-container1">
              <Offer
                Image="/Offers/offers-21-1500w.png"
                price="$540,000"
                Guides="54 Local guides"
                Location="California, United States"
              ></Offer>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className="offers-offer-container2">
              <Offer
                Image="/Offers/offers-31-1500w.png"
                price="$1,200,000"
                Guides="34 Local Guides"
                Location="New York, United States"
              ></Offer>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .offers-offers {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .offers-offer-container {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .offers-offer-container1 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .offers-offer-container2 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .offers-offers {
              align-self: center;
              grid-template-columns: auto auto;
            }
          }
          @media (max-width: 767px) {
            .offers-offers {
              grid-template-columns: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Offers

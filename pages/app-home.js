import React from 'react'
import Head from 'next/head'

import AppNav from '../components/app-nav'
import Offers from '../components/offers'

const AppHome = (props) => {
  return (
    <>
      <div className="app-home-container">
        <Head>
          <title>AppHome - housol</title>
          <meta property="og:title" content="AppHome - housol" />
        </Head>
        <AppNav></AppNav>
        <div className="app-home-container01">
          <span className="app-home-text">Explore</span>
        </div>
        <div className="app-home-container02">
          <div className="app-home-container03">
            <span className="app-home-text1">Filter By</span>
            <div className="app-home-container04">
              <div className="app-home-container05">
                <span className="app-home-text2">State</span>
                <select className="app-home-select">
                  <option value="select">Select State</option>
                  <option value="missouri">Missouri</option>
                  <option value="california">2 Bedroom</option>
                </select>
              </div>
              <div className="app-home-container06">
                <span className="app-home-text3">No of Rooms</span>
                <select className="app-home-select1">
                  <option value="select" selected>
                    Select Room Size
                  </option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">Option 3</option>
                </select>
              </div>
              <div className="app-home-container07">
                <span className="app-home-text4">Price Range</span>
                <select className="app-home-select2">
                  <option value="select" selected>
                    Select Price Range
                  </option>
                  <option value="50000">100000</option>
                  <option value="100000">20000</option>
                </select>
              </div>
            </div>
          </div>
          <div className="app-home-container08">
            <span className="app-home-text5">Sort By</span>
            <select className="app-home-select3">
              <option value="state" selected>
                State
              </option>
              <option value="price">Price</option>
              <option value="rooms">Rooms</option>
            </select>
          </div>
        </div>
        <div className="app-home-container09">
          <Offers></Offers>
        </div>
      </div>
      <style jsx>
        {`
          .app-home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/external/pastedimage-jb9-1500w.png');
          }
          .app-home-text {
            color: rgb(255, 255, 255);
            font-size: 32px;
          }
          .app-home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .app-home-container03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-home-text1 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .app-home-container04 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .app-home-container05 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-home-text2 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .app-home-select {
            height: var(--dl-size-size-small);
          }
          .app-home-container06 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-home-text3 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .app-home-select1 {
            height: var(--dl-size-size-small);
          }
          .app-home-container07 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-home-text4 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .app-home-select2 {
            height: var(--dl-size-size-small);
          }
          .app-home-container08 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-home-text5 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .app-home-select3 {
            height: var(--dl-size-size-small);
          }
          .app-home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .app-home-container02 {
              gap: var(--dl-space-space-unit);
              flex-wrap: wrap;
              align-self: flex-start;
              align-items: flex-start;
              flex-direction: column;
            }
            .app-home-container04 {
              gap: var(--dl-space-space-unit);
            }
            .app-home-select {
              width: 100%;
            }
            .app-home-container08 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .app-home-container02 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .app-home-container04 {
              flex-wrap: wrap;
            }
          }
        `}
      </style>
    </>
  )
}

export default AppHome

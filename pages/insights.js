import React from 'react'
import Head from 'next/head'

import AppNav from '../components/app-nav'
import Offers from '../components/offers'

const Insights = (props) => {
  return (
    <>
      <div className="insights-container">
        <Head>
          <title>Insights - housol</title>
          <meta property="og:title" content="Insights - housol" />
        </Head>
        <AppNav></AppNav>
        <div className="insights-container01">
          <span className="insights-text">
            Get Predictions of Future Houses
          </span>
        </div>
        <div className="insights-container02">
          <div className="insights-container03">
            <div className="insights-container04">
              <span className="insights-text1">Filter By</span>
              <div className="insights-container05">
                <div className="insights-container06">
                  <span className="insights-text2">State</span>
                  <select className="insights-select">
                    <option value="missouri" selected>
                      Missouri
                    </option>
                    <option value="california">California</option>
                  </select>
                </div>
                <div className="insights-container07">
                  <span className="insights-text3">No of Rooms</span>
                  <select className="insights-select1">
                    <option value="select" selected>
                      Select Room Size
                    </option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                    <option value="4">4 Bedroom</option>
                  </select>
                </div>
                <div className="insights-container08">
                  <span className="insights-text4">Date Range</span>
                  <select className="insights-select2">
                    <option value="2023" selected>
                      2023
                    </option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="insights-container09">
            <Offers></Offers>
          </div>
          <span className="insights-text5">Chart Data</span>
          <div className="insights-container10"></div>
        </div>
      </div>
      <style jsx>
        {`
          .insights-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .insights-container01 {
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
          .insights-text {
            color: rgb(255, 255, 255);
            font-size: 32px;
          }
          .insights-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .insights-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .insights-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .insights-text1 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .insights-container05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .insights-container06 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .insights-text2 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .insights-select {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-small);
          }
          .insights-container07 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .insights-text3 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .insights-select1 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
          }
          .insights-container08 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .insights-text4 {
            color: var(--dl-color-primary-100);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          .insights-select2 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-small);
          }
          .insights-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .insights-text5 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            align-self: flex-start;
            text-align: left;
          }
          .insights-container10 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .insights-container03 {
              gap: var(--dl-space-space-unit);
              flex-wrap: wrap;
              align-self: flex-start;
              align-items: flex-start;
              flex-direction: column;
            }
            .insights-container05 {
              gap: var(--dl-space-space-unit);
            }
            .insights-select {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .insights-container03 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .insights-container05 {
              flex-wrap: wrap;
            }
          }
        `}
      </style>
    </>
  )
}

export default Insights

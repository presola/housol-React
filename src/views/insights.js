import React from 'react'

import { Helmet } from 'react-helmet'

import AppNav from '../components/app-nav'
import Offers from '../components/offers'
import './insights.css'

const Insights = (props) => {
  return (
    <div className="insights-container">
      <Helmet>
        <title>Insights - housol</title>
        <meta property="og:title" content="Insights - housol" />
      </Helmet>
      <AppNav></AppNav>
      <div className="insights-container01">
        <span className="insights-text">Get Predictions of Future Houses</span>
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
  )
}

export default Insights

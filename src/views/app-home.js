import React from 'react'

import { Helmet } from 'react-helmet'

import AppNav from '../components/app-nav'
import Offers from '../components/offers'
import './app-home.css'

const AppHome = (props) => {
  return (
    <div className="app-home-container">
      <Helmet>
        <title>AppHome - housol</title>
        <meta property="og:title" content="AppHome - housol" />
      </Helmet>
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
  )
}

export default AppHome

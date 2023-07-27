import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - housol</title>
        <meta property="og:title" content="Page - housol" />
      </Helmet>
      <div className="page-frame3">
        <img
          alt="Logo2640"
          src="/external/logo2640-cglt.svg"
          className="page-logo"
        />
        <span className="page-text">HOUSOL</span>
      </div>
      <h1>Page Not Found!</h1>
      <Link to="/" className="page-navlink">
        Go Home
      </Link>
    </div>
  )
}

export default Page

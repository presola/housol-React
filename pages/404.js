import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - housol</title>
          <meta property="og:title" content="Page - housol" />
        </Head>
        <div className="page-frame3">
          <img
            alt="Logo2640"
            src="/external/logo2640-cglt.svg"
            className="page-logo"
          />
          <span className="page-text">HOUSOL</span>
        </div>
        <h1>Page Not Found!</h1>
        <Link href="/">
          <a className="page-link">Go Home</a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              97deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 51%,
              rgba(221, 244, 240, 1) 100%
            );
          }
          .page-frame3 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .page-logo {
            width: 56px;
            height: auto;
          }
          .page-text {
            color: #181818;
            height: auto;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Overlock SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-link {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Page

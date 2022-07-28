import Layout from '../components/Layout'
import '../styles/globals.css'
import React, { useEffect } from 'react';



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

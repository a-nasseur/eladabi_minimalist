import React from 'react'
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
  
}

Meta.defaultProps = {
    title: 'El Adabi | Litteraire',
    keywords: 'litterature, algerienne, livre, auteur, algerie, librairie, libraire',
    description: 'Le premier site regroupant toute la litterature algerienne'
}


export default Meta;
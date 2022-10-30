import React from 'react'

import { client } from '../lib/client'

import  HeroBanner from '../components/HeroBanner'


export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner />
      
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variants</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>


    
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products, bannerData
    }
  }
}
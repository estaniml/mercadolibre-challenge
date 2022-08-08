import React from 'react'
import Main from './main/Main'
import MainFeatures from './main/MainFeatures'
import SellerData from './sidebar/SellerData'
import SellerItems from './main/SellerItems'
import Sidebar from './sidebar/Sidebar'
import PaymentFeatures from './sidebar/PaymentFeatures'
import Questions from './main/Questions'
import Reviews from './main/Reviews'
import Ads from './sidebar/Ads'

const Product = () => {
  return (
    <div className='bg-[#fff] dark:bg-gray-800 w-full h-full shadow-md rounded-md p-6 grid grid-cols-3'>
        <div className='col-span-2 grid grid-cols-12 h-full gap-y-10'>
            <Main />
            <SellerItems />
            <MainFeatures />
            <Questions />
            <Reviews />
        </div>
        <div>
            <Sidebar /> 
            <SellerData />
            <PaymentFeatures />
            <Ads />
        </div>
        
    </div>
  )
}

export default Product
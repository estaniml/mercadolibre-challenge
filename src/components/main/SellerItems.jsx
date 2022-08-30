import React from 'react'
import Slider from './Slider'

const SellerItems = () => {
  return (
    <div className='col-span-11 pl-10'>
        <hr className=' dark:border-gray-900'/>
        <div className='pt-8'>
            <h1 className='text-2xl mb-8'>Publicaciones del vendedor</h1>
            <Slider />
            
        </div>
        <a target='_blank' href='#' className='ml-3 mb-20 text-sm text-blue-500'>Ver más publicaciones del vendedor</a>
    </div>
  )
}

export default SellerItems
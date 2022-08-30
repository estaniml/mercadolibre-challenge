import React from 'react'

const SellerData = () => {
  return (
    <div className='border dark:border-gray-900 rounded-lg px-4 py-6 mb-4'>
        <h3 className='text-lg my-2'>Información sobre el vendedor</h3>

        <div className='flex my-4'>
            <img src='https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg' alt='Medalla' className='w-5 h-5 mr-2' />
            <div>
                <h4 className='font-bold text-[#15ad5f]'>MercadoLíder Platinum</h4>
                <p className='font-light text-sm text-gray-500 dark:text-gray-300'>¡Es uno de los mejores del sitio!</p>
            </div>
        </div>

        <div className='grid grid-cols-5 gap-2 my-6 items-center'>
            <div className='h-2 bg-[#FFF0F0] dark:bg-[#f6d0d0]'></div>
            <div className='h-2 bg-[#fff5e8] dark:bg-[#f4d9b7]'></div>
            <div className='h-2 bg-[#fffcda] dark:bg-[#f9f4b7]'></div>
            <div className='h-2 bg-[#f1fdd7] dark:bg-[#dff8ab]'></div>
            <div className='h-3 bg-[#39b54a]'></div>
        </div>

        <div className='grid grid-cols-3 font-light text-xs text-gray-500 dark:text-gray-300'>
            <div className='px-4 border-r-2 text-center'>
                <h2 className='text-2xl leading-4 mb-4'>1637</h2>
                <p>Ventas en los últimos 60 días</p>
            </div>
            <div className='px-4 border-r-2 text-center'>
                <img src='https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg' alt='positive message' className='h-6 mx-auto mb-2' />
                <p>Brinda buena atención</p>
            </div>
            <div className='px-3 text-center'>
                <img src='https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg' alt='positive time' className='h-6 mx-auto mb-2'  />
                <p>Despacha sus productos a tiempo</p>
            </div>
        </div>

        <div className='mt-6'>
            <a href='#' className='text-sm text-blue-500'>Ver más datos de este vendedor</a>
        </div>
    </div>
  )
}

export default SellerData
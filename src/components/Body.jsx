import { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import AdSlider from './main/AdSlider'
import Product from './Product'

const Body = () => {


  return (
    <div>
        <div className='py-5 text-sm flex gap-1 items-center'>
        <p className='font-medium'>Tambien puede interesarte:</p> 
        <a href='https://listado.mercadolibre.com.ar/squishmallows#topkeyword' className='cursor-pointer'>squishmallows</a>
      </div>
      <div className='flex justify-between text-sm pb-5 text-blue-500'>
        <div className='flex'>
          <a className='text-black dark:text-gray-100 hover:text-blue-500 cursor-pointer'>Volver al listado</a>
          <span className='text-sm font-light text-black mx-3'>|</span>
          <a className='cursor-pointer hover:text-blue-600'>Juegos y Juguetes</a>
          <BsChevronRight className='self-center mx-1 text-xs text-black' />
          <a className='cursor-pointer hover:text-blue-600'>Peluches</a>
        </div>
        <div>
          <a className='cursor-pointer'>Compartir</a>
          <span className='text-sm font-light text-black mx-3'>|</span>
          <a className='cursor-pointer hover:text-blue-600'>Vender uno igual</a>
        </div>
      </div>
      <Product />
      
      <div className='py-5 text-sm flex justify-end gap-2 items-center'>
        <p>Publicación <strong>#900849903</strong> |</p> 
        <a className='cursor-pointer text-blue-600'>Denunciar</a>
      </div>

      <div className='flex items-center mt-6 gap-4'>
        <h1 className='text-2xl'>Productos promocionados</h1>
        <a className='text-blue-500 self-end cursor-pointer'>Anunciá aquí</a>
      </div>
      <AdSlider />

      <img src='https://tpc.googlesyndication.com/simgad/17012486111119169117?' className='my-10 rounded-md cursor-pointer'/>

      

    </div>
  )
}

export default Body
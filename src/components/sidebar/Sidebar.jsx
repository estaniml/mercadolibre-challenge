import {  BsFillStarFill, BsStarHalf, BsTruck, BsFillLightningFill, BsChevronDown, BsTrophy, BsShieldCheck } from 'react-icons/bs'
import { TbArrowBack } from 'react-icons/tb'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Sidebar = () => {

  const [toggle, setToggle] = useState(false)
  const [drop, setDrop] = useState(false)
  const [selected, setSelected] = useState('1 unidad')

  const showAlert = () => {
    Swal.fire({
      title: 'Challenge de Mercado Libre',
      text: 'Esta pagina es simplemente un clon desarrollado para el desafío',
      footer: '<a target="_blank" href="https://github.com/goncy/mercadolibre-details-challenge">Detalle del Challenge</a>'
    })
  }
  

  return (
    <div className='border dark:border-gray-900 rounded-lg px-4 py-6 mb-4'>
      <span className='font-light text-sm text-gray-500 dark:text-gray-400'>Nuevo l 1218 vendidos</span>
      <div className='relative my-2'>
        <h4 className='text-2xl font-medium leading-7'>Muñeco Stitch Peluche Liloystitch De Cabezon Celeste Y Rosa</h4>
        <div onClick={ () => setToggle(!toggle)}>
          { !toggle ?
            <AiOutlineHeart className='absolute right-0 top-1 text-2xl text-blue-500 cursor-pointer' />
            :
            <AiFillHeart className='absolute right-0 top-1 text-2xl text-blue-500 cursor-pointer' />
          }
        </div>
      </div>

      <a href='#' onClick={showAlert} className='flex items-center text-sm text-blue-500 gap-1 cursor-pointer'>
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsStarHalf/>
        <p className='ml-1'>(58)</p>
      </a>

      <div className='my-2 flex gap-2'>
        <p className='bg-[#ff7b3a] text-white text-xs font-bold self-center p-1 leading-3 rounded-sm'>MÁS VENDIDO</p>
        <a href='#' onClick={showAlert} className='text-blue-500 text-xs'>1º en Peluches eJump</a>
      </div>

      <h1 className='text-4xl font-light'>$ 1.790</h1>
      <h5 className='text-lg'>en 12x $264</h5>
      <p className='text-sm text-blue-500'>Ver los medios de pago</p>

      <div className='flex flex-col gap-3 my-4'>
        <div className='flex gap-3'>
          <BsTruck className='text-xl' />
          <div>
            <h5 className='flex gap-1 items-center'>Envío a todo el país
              <span className='flex italic text-sm font-bold text-[#15ad5f] '>
                <BsFillLightningFill className='text-xl' />FULL
              </span> <BsChevronDown className='text-xs text-gray-500 dark:text-gray-400' />
            </h5>
            <p className='font-light text-sm text-gray-500 dark:text-gray-400'>Conocé los tiempos y las formas de envío.</p>
            <p className='text-sm text-blue-500'>Calcular cuándo llega</p>
          </div>
        </div>
        <div className='flex gap-3'>
        <TbArrowBack className='text-2xl text-[#15ad5f]' />
          <div>
            <h5 className='text-[#15ad5f]'>Devolución gratis</h5>
            <p className='font-light text-sm text-gray-500 dark:text-gray-400'>Conocé los tiempos y las formas de envío.</p>
            <p className='text-sm text-blue-500'>Calcular cuándo llega</p>
          </div>
        </div>
      </div>

      <p className='font-bold my-4'>Stock disponible</p>

      <div onClick={() => setDrop(!drop)} className='my-8 flex items-center gap-1 cursor-pointer relative'>Cantidad: 
        <strong>{selected}</strong>
        <BsChevronDown className={ drop ? 'text-xs text-blue-500 transition-all duration-200 ease-linear' : 'text-blue-500 text-xs transform rotate-180 transition-all duration-200 ease-linear'} />
        <span className='font-light text-sm text-gray-500 dark:text-gray-400'>(4 disponibles)</span>
        { drop && (
          <ul className='w-40 rouned-md shadow-lg absolute flex flex-col top-6 left-12 bg-white dark:bg-gray-900 gap-4 dark:text-gray-100'>
            <li onClick={() => setSelected('1 unidad')} className={ selected === '1 unidad' ? 'px-4 py-2 hover:bg-gray-100 border-l-4 border-blue-500 text-blue-500 font-bold' : 'px-4 py-2 hover:bg-gray-100' }>1 unidad</li>
            <li onClick={() => setSelected('2 unidades')} className={ selected === '2 unidades' ? 'px-4 py-2 hover:bg-gray-100 border-l-4 border-blue-500 text-blue-500 font-bold' : 'px-4 py-2 hover:bg-gray-100' }>2 unidades</li>
            <li onClick={() => setSelected('3 unidades')} className={ selected === '3 unidades' ? 'px-4 py-2 hover:bg-gray-100 border-l-4 border-blue-500 text-blue-500 font-bold' : 'px-4 py-2 hover:bg-gray-100' }>3 unidades</li>
            <li onClick={() => setSelected('4 unidades')} className={ selected === '4 unidades' ? 'px-4 py-2 hover:bg-gray-100 border-l-4 border-blue-500 text-blue-500 font-bold' : 'px-4 py-2 hover:bg-gray-100' }>4 unidades</li>
          </ul>
        )}
      </div>

      <button onClick={showAlert} className='w-full h-12 rounded-md bg-blue-500 hover:bg-[#2968c9] text-white font-bold mb-2' href>Comprar ahora</button>
      <button onClick={showAlert} className='w-full h-12 rounded-md bg-[#e3edfb] hover:bg-[#d8e7fa] text-blue-500 font-bold'>Agregar al carrito</button>

      <div className='flex gap-3 my-6 text-gray-500 dark:text-gray-400'>
        <BsShieldCheck className='text-3xl' />
        <a className='font-light text-sm'><strong className='text-md text-[#408afa]'>Compra Protegida</strong>, recibí el producto que esperabas o te devolvemos tu dinero.</a>
      </div>

      <div className='flex gap-3 text-gray-500 dark:text-gray-400'>
        <BsTrophy className='text-md' />
        <p className='font-light text-sm'><strong className='text-md text-[#408afa]'>Mercado Puntos</strong>. Sumás 12 puntos.</p>
      </div>
    </div>

  )
}

export default Sidebar

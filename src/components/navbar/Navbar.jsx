import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { VscLocation } from 'react-icons/vsc'
import { BsChevronDown, BsCart2 } from 'react-icons/bs'
import Dropdown from './Dropdown'
import Swal from 'sweetalert2'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const showAlert = () => {
        Swal.fire({
          title: 'Challenge de Mercado Libre',
          text: 'Esta pagina es simplemente un clon desarrollado para el challenge',
          footer: '<a target="_blank" href="https://github.com/goncy/mercadolibre-details-challenge">Detalle del Challenge</a>'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Swal.fire({
            title: 'Challenge de Mercado Libre',
            text: 'Esta pagina es simplemente un clon desarrollado para el challenge',
            footer: '<a target="_blank" href="https://github.com/goncy/mercadolibre-details-challenge">Detalle del Challenge</a>'
          })


    }
    
  return (
    <nav className='sm:w-4/5 mx-auto px-2 sm:px-0 py-2 z-10'>
        <div className='grid grid-cols-7 lg:grid-cols-12 items-center mb-1 gap-2'>
            <div className='h-full col-span-2'>
                <a className='h-full flex' href='#'>
                    <img 
                        className='self-center max-h-8'
                        src='https://github.com/goncy/mercadolibre-details-challenge/blob/main/src/assets/logo.png?raw=true' alt='logo' />
                </a>
            </div>
            <form onSubmit={handleSubmit} className='col-span-7 w-full h-full relative flex items-center '>
                <input 
                    className='dark:bg-gray-800 max-h-9 w-full px-4 py-2 shadow-sm rounded-sm text-md md:text-md focus:outline-none dark:placeholder:text-bg-gray-800 placeholder:font-light placeholder:text-gray-600'
                    type='text'
                    placeholder='ESTA NO ES LA PAGINA REAL DE MERCADO LIBRE. ES UNA COPIA PARA EL CHALLENGE' 
                />
                <IoIosSearch className='w-10 absolute right-0 md:border-l top-1 md:top-2 text-2xl text-gray-400 cursor-pointer' />
            </form>
            <div className='h-full col-span-3 hidden lg:flex'>
                <a 
                    target='_blank'
                    className='h-full' 
                    onClick={showAlert}
                    href='/'>
                    <img 
                        className='h-full'
                        src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='logo' />
                </a>
            </div>
        </div>
        <div className='hidden xl:grid grid-cols-7 lg:grid-cols-10 items-center mb-1'>
            <div className='col-span-2'>
            <div className='w-2/3 p-1 font-normal text-sm flex items-center leading-4 text-gray-600 lochover'>
                <VscLocation className='text-gray-500 text-3xl self-start font-light' />
                <div>
                    <span className='text-xs font-extralight text-gray-500'>Enviar a</span>
                    <p className='ml-1 w-full'>Capital Federal</p>
                </div>
            </div>
            </div>
            <div className='col-span-5 h-full'>
                <ul className='flex items-end gap-6 h-full text-sm text-gray-600 font-light darkhover'>
                    <li 
                        className='flex items-end gap-1 cursor-pointer relative'
                        onClick={() => setIsOpen(!isOpen)}
                    >Categorías <BsChevronDown className='text-xs' />{ isOpen ? <Dropdown /> : null }</li>
                    
                    <li>Ofertas</li>
                    <li>Historial</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li>Vender</li>
                    <li>Ayuda</li>
                </ul>
            </div>
            <div className='col-span-3 h-full'>
                <ul className='flex items-end justify-end gap-6 h-full text-sm text-gray-800 font-normal'>
                    <li onClick={showAlert}>Creá tu cuenta </li>
                    <li onClick={showAlert}>Ingresá</li>
                    <li onClick={showAlert}>Mis compras</li>
                    <BsCart2 onClick={showAlert} className='text-xl self-end mb-1 text-gray-500 cursor-pointer' />
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
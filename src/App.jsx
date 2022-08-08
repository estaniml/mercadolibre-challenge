import { useEffect, useState } from 'react'
import Body from './components/Body'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDarkMode from './hooks/useDarkMode'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

function App() {

  const [themeMode, setTheme] = useDarkMode()

  useEffect(() => {
      AOS.init({
          duration: 1000
      })
  }, [])


  const showAlert = () => {
    Swal.fire({
      title: 'Challenge de Mercado Libre',
      text: 'Esta pagina es simplemente un clon desarrollado para el challenge',
      footer: '<a target="_blank" href="https://github.com/goncy/mercadolibre-details-challenge">Detalle del Challenge</a>'
    })
  }

  return (
    <div className='min-w-full transition-all ease-linear duration-75 bg-gray-100 dark:bg-gray-900 dark:text-white overflow-x-scroll md:overflow-hidden'>
      <div className='bg-[#FFF159] w-full shadow-sm z-50'>
        <Navbar />
      </div>
      <div className='mx-3 2xl:w-4/5 2xl:mx-auto'>
        <Body />
      </div>
      <div className='mt-40 footer'>
        <Footer />
      </div>

      <div
         data-aos="fade-up-right" onClick={ () => setTheme(themeMode)} className='fixed w-10 h-10 rounded-full shadow-lg flex justify-center items-center font-extrabold text-2xl bottom-24 left-5 2xl:left-12 cursor-pointer transition-all ease-linear duration-75 hover:scale-105 hover:shadow-2xl bg-transparent'>
        { themeMode === 'light' ? (
            <MdDarkMode className='text-gray-100' /> 
          ) : (
            <MdLightMode className='text-gray-800' />
          )  
        }
      </div>

      <div 
         data-aos="fade-up-right"
        className='fixed w-10 h-10 rounded-full shadow-lg flex justify-center items-center text-white font-extrabold text-xl bg-gradient-to-r from-sky-500 to-indigo-500 bottom-12 left-5 2xl:left-12 cursor-pointer transition-all ease-linear duration-75 hover:scale-105 hover:shadow-2xl'
        onClick={showAlert}
      >?</div>
    </div>
  )
}
export default App

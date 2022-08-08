import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'
import 'aos/dist/aos.css';

const Footer = () => {


  return (  
        
<footer className="p-4 text-white  shadow-xl md:px-6 md:py-8 bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="sm:flex sm:items-start sm:justify-between">
        <a target='_blank' href="https://github.com/estaniml" className="flex items-center mb-4 sm:mb-0 gap-3">
            <span className="text-2xl font-bold">Estanislao Martinez Lacabe</span>
            <span className='flex items-center gap-2 text-lg ease-in-out duration-300 hover:text-xl'><DiReact />React Developer </span>
        </a>
        <ul className="md:w-1/5 flex items-center justify-between mb-6 text-2xl text-white">
            <li className=''>
                <a target='_blank' href="https://github.com/estaniml">
                    <AiFillGithub className='transition ease-in-out duration-300 hover:scale-150' />
                </a>
            </li>
            <li>
                <a target='_blank' href="/">
                    <AiFillLinkedin className='transition ease-in-out duration-300 hover:scale-150' />
                </a>
            </li>
            <li>
                <a target='_blank' href="/">
                    <AiFillTwitterSquare className='transition ease-in-out duration-300 hover:scale-150' />
                </a>
            </li>
            <li>
                <a target='_blank' href="https://www.instagram.com/estaniml">
                    <AiFillInstagram className='transition ease-in-out duration-300 hover:scale-150' />
                </a>
            </li>
        </ul>
    </div>

    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-100 sm:text-center"> 2022 <a href="https://github.com/goncy/mercadolibre-details-challenge" className="hover:underline">MERCADO LIBRE CHALLENGE</a>
    </span>
</footer>
  )
}

export default Footer

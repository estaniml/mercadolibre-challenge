import { AiFillCaretUp } from 'react-icons/ai'

const Dropdown = () => {
  return (
    <>
        
        <AiFillCaretUp className='absolute top-3 left-14 h-9 w-9 text-neutral-800 z-20' />
        <ul className='absolute top-9 w-56 bg-neutral-800 text-white text-md font-medium py-5 rounded-md hove z-20'>
            <li>
                <a>Juegos</a>
            </li>
            <li>
                <a>Inmuebles</a>
            </li>
            <li>
                <a>Supermercados</a>
            </li>
            <li>
                <a>Tecnologia</a>
            </li>
            <li>
                <a>Hogar</a>
            </li>
            <li>
                <a>Electrodomesticos</a>
            </li>
            <li>
                <a>Herramientas</a>
            </li>
            <li>
                <a>Construccion</a>
            </li>
            <li>
                <a>Moda</a>
            </li>
            <li>
                <a>Juguetes</a>
            </li>
            <li>
                <a>Belleza y Cuidado Personal</a>
            </li>
            <li>
                <a>Salud y Equipamiento Medico</a>
            </li>
            <li>
                <a>Industrias y Oficinas</a>
            </li>
            <li>
                <a>Productos Sustentables</a>
            </li>
        </ul>

    </>
  )
}

export default Dropdown
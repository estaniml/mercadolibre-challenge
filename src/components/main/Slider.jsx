import { useRef } from 'react'
import {items} from '../../data/db.js'
import { BsFillLightningFill, BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import Swal from 'sweetalert2'

const Slider = () => {

    const slider = useRef(null)

    const showAlert = () => {
      Swal.fire({
        title: 'Challenge de Mercado Libre',
        text: 'Esta pagina es simplemente un clon desarrollado para el desafío',
        footer: '<a target="_blank" href="https://github.com/goncy/mercadolibre-details-challenge">Detalle del Challenge</a>'
    })}

    const next = () => {
        if(slider.current.children.length > 0) {
            const first = slider.current.children[0];
            const second = slider.current.children[1];
            const third = slider.current.children[2];

            slider.current.style.transition = `300ms ease-out all`;

            const size = slider.current.offsetWidth;

            slider.current.style.transform = `translateX(-${size}px)`;

            const transition = () => {

                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(0)`;

                slider.current.appendChild(first)
                slider.current.appendChild(second)
                slider.current.appendChild(third)

                slider.current.removeEventListener('transitionend', transition)

            }

            slider.current.addEventListener('transitionend', transition)
        }
    }

    const prev = () => {
        if(slider.current.children.length > 0) {

            const sliderData = slider.current.children;

            const index1 = sliderData.length - 1;
            const index2 = sliderData.length - 2;
            const index3 = sliderData.length - 3;

            const last = sliderData[index1];
            const penultimate = sliderData[index2];
            const antepenultimate = sliderData[index3];

            slider.current.insertBefore(last, sliderData[0]);
            slider.current.insertBefore(penultimate, sliderData[1]);
            slider.current.insertBefore(antepenultimate, sliderData[2]);

            slider.current.style.transition = 'none';

            const size = slider.current.offsetWidth;
            slider.current.style.transform = `translateX(-${size}px)`;

            setTimeout(() => {
                slider.current.style.transition = '300ms ease-out all';
                slider.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }

  return (
    <div className='overflow-hidden relative'>
        <div className='flex gap-4 py-8' ref={slider}>
            {
                items.map( item => (
                <div 
                    className='ml-1 dark:bg-gray-900 w-31 shadow-md hover:shadow-xl rounded-md cursor-pointer overflow-hidden transition-all ease  duration-300 z-1' 
                    key={item.id}
                    onClick={showAlert}
                >
                    <img 
                        className='w-full'
                        src={item.image}
                    />
                    <hr />
                    <div className='px-4 pt-4 pb-6'>
                        <p className='text-2xl'>{item.price}<span className='text-[#15ad5f] text-sm font-medium ml-1'>{item.discount && item.discount}</span></p>
                        { item.ship && (
                        <p className='flex items-center text-sm text-[#15ad5f] font-bold my-1'>
                            { item.full && <BsFillLightningFill className='italic text-sm'/>}{item.ship}
                        </p>
                        
                        )}
                        <p>{item.description}</p>
                    </div>
                </div>
                ) )
            }
        </div>
        { items.length > 3 && (
            <>
            <div 
                className='absolute bg-white dark:bg-gray-900 w-16 h-16 shadow-lg hover:shadow-2xl z-2 top-1/3 right-1 flex items-center justify-center rounded-full cursor-pointer'
                onClick={next}
            >
                <BsChevronRight className='text-3xl text-blue-500' />
            </div> 
        

            <div className='absolute bg-white dark:bg-gray-900 w-16 h-16 shadow-lg hover:shadow-2xl  z-2 top-1/3 left-1 flex items-center justify-center rounded-full cursor-pointer'
                onClick={prev}
            >
                <BsChevronLeft className='text-3xl text-blue-500' />
            </div>
            </>
        )}

        
    </div>
  )
}

export default Slider
import { useRef } from 'react'
import {items} from '../../data/db.js'
import { BsFillLightningFill, BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const AdSlider = () => {

    const slider = useRef(null)

    const next = () => {
        if(slider.current.children.length > 0) {
            const first = slider.current.children[0];
            const second = slider.current.children[1];
            const third = slider.current.children[2];
            const fourth = slider.current.children[3];
            const fifth = slider.current.children[4];

            slider.current.style.transition = `300ms ease-out all`;

            const size = slider.current.offsetWidth;

            slider.current.style.transform = `translateX(-${size}px)`;

            const transition = () => {

                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(0)`;

                slider.current.appendChild(first)
                slider.current.appendChild(second)
                slider.current.appendChild(third)
                slider.current.appendChild(fourth)
                slider.current.appendChild(fifth)

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
            const index4 = sliderData.length - 4;
            const index5 = sliderData.length - 5;

            const fifth = sliderData[index1];
            const fourth = sliderData[index2];
            const third = sliderData[index3];
            const second = sliderData[index4];
            const first = sliderData[index5];

            slider.current.insertBefore(fifth, sliderData[0]);
            slider.current.insertBefore(fourth, sliderData[1]);
            slider.current.insertBefore(third, sliderData[2]);
            slider.current.insertBefore(second, sliderData[3]);
            slider.current.insertBefore(first, sliderData[4]);

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
        <div className='flex gap-3 py-8' ref={slider}>
            {
                items.map( item => (
                <div 
                    className='ml-1 w-20 shadow-md hover:shadow-xl rounded-md cursor-pointer overflow-hidden transition-all ease duration-300 z-1 bg-white dark:bg-gray-800' 
                    key={item.id}
                >
                    <img 
                        className='w-full'
                        src={item.image}
                    />
                    <hr />
                    <div className='px-4 pt-4 pb-6'>
                        <p className='text-xl'>{item.price}<span className='text-[#15ad5f] text-sm ml-1'>{item.discount && item.discount}</span></p>
                        { item.ship && (
                            <p className='flex text-sm items-center text-[#15ad5f] font-bold'>{item.ship}<BsFillLightningFill /></p>
                        )}
                        <p className='text-sm text-gray-500 leading-4 mt-1'>{item.description}</p>
                    </div>
                </div>
                ) )
            }
        </div>
        { items.length > 3 && (
            <>
            <div 
                className='absolute bg-white dark:bg-gray-800 w-16 h-16 shadow-lg hover:shadow-2xl z-2 top-1/3 right-1 flex items-center justify-center rounded-full cursor-pointer'
                onClick={next}
            >
                <BsChevronRight className='text-3xl text-blue-500' />
            </div> 
        

            <div className='absolute bg-white dark:bg-gray-800 w-16 h-16 shadow-lg hover:shadow-2xl  z-2 top-1/3 left-1 flex items-center justify-center rounded-full cursor-pointer'
                onClick={prev}
            >
                <BsChevronLeft className='text-3xl text-blue-500' />
            </div>
            </>
        )}

        
    </div>
  )
}

export default AdSlider
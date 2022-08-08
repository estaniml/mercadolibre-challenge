import { BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import ReviewsTab from './ReviewsTab'

const Reviews = () => {
  return (
    <div className='col-span-11 pt-10 pl-10'>
        <hr className=' dark:border-gray-900' />
        <h1 className='text-2xl my-8'>Opiniones sobre Muñeco Stitch Peluche Liloystitch De Cabezon Celeste Y Rosa</h1>

        <div className='flex gap-20'>
            <div className='flex flex-col items-end'>
                <h1 className='text-6xl font-light'>4.7</h1>
                <div className='flex justify-end gap-3 w-full text-blue-500 text-2xl'>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf/>
                </div>
                <span className='text-sm text-gray-400 mt-3'>Promedio entre 58 opiniones</span>
            </div>

            <div className='flex flex-col gap-1 text-md text-gray-400'>
                <div className='flex items-center gap-4'>5 estrellas
                    <div className='h-1 w-48 rounded-md bg-gray-200'>
                        <div className='h-1 w-40 rounded-md bg-blue-500'></div>
                    </div>46
                </div>

                <div className='flex items-center gap-4'>4 estrellas
                    <div className='h-1 w-48 rounded-md bg-gray-200'>
                        <div className='h-1 w-8 rounded-md bg-blue-500'></div>
                    </div>8
                </div>

                <div className='flex items-center gap-4'>3 estrellas
                    <div className='h-1 w-48 rounded-md bg-gray-200'>
                        <div className='h-1 w-4 rounded-md bg-blue-500'></div>
                    </div>3
                </div>

                <div className='flex items-center gap-4'>2 estrellas
                    <div className='h-1 w-48 rounded-md bg-gray-200'>
                        <div className='h-1 w-1 rounded-md bg-blue-500'></div>
                    </div>1
                </div>

                <div className='flex items-center gap-4'>1 estrellas
                    <div className='h-1 w-48 rounded-md bg-gray-200'>
                        
                    </div>0
                </div>
            </div>
        </div>

        <ReviewsTab />
    </div>
  )
}

export default Reviews
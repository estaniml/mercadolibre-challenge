import { useState } from 'react'
import { reviews } from '../../data/db'
import Review from './Review'

const ReviewsTab = () => {

    const [tab, setTab] = useState(1)



  return (
    <div className='my-10'>
        <div className='w-full flex justify-between font-bold cursor-pointer mb-8'>
            <button className={ tab === 1 ? 'w-full text-center pb-2 border-b-4 border-blue-500 text-blue-500' : 'w-full border-b-2 text-center pb-2' }
                onClick={() => setTab(1)}
            >Todas</button>
            <button className={ tab === 2 ? 'w-full text-center pb-2 border-b-4 border-blue-500 text-blue-500' : 'w-full border-b-2 text-center pb-2' }
                onClick={() => setTab(2)}
           >Positivas</button>
            <button className={ tab === 3 ? 'w-full text-center pb-2 border-b-4 border-blue-500 text-blue-500' : 'w-full border-b-2 text-center pb-2' }
                onClick={() => setTab(3)}
           >Negativas</button>
        </div>

        {
            tab === 1 ? reviews.map(
                el => <Review key={el.id} el={el} />
            ) : tab === 2 ? reviews.map(
                el => el.rating >= 3 && <Review key={el.id} el={el} />
            ) : tab === 3 ? reviews.map(
                el => el.rating < 3 && <Review key={el.id} el={el} />
            ) : null
        }

        <a href='/' className='mb-20 text-sm text-blue-500'>Ver todas las opiniones</a>

    </div>
  )
}

export default ReviewsTab
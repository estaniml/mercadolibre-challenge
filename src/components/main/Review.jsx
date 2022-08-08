import { BsFillStarFill } from 'react-icons/bs'
import { BiLike, BiDislike } from 'react-icons/bi'
import { useState } from 'react'
import uuid from 'react-uuid'

const Review = ({el}) => {

    const [increment, setIncrement] = useState(el.likes)
    const [decrement, setDecrement] = useState(el.dislikes)

 
  return (
    <div className='my-10'>
            <div className='flex gap-2 text-blue-500 '>
                { (() => { 
                    let stars = [];
                    for( let i = 0; i < el.rating; i++){
                        stars.push(<BsFillStarFill key={uuid()}/>)
                    }
                    for( let i =  0; i < 5 - el.rating; i++){
                        stars.push(<BsFillStarFill key={uuid()} className='text-gray-200'/>)
                    }
                    return stars;
                })()}
            </div>
            <h5 className='font-bold mt-2'>{el.title}</h5>
            <p>{el.description}<span className='text-gray-400'> {el.date}</span></p>
            <div className='flex items-center text- gap-3 mt-2 cursor-pointer'>
                <BiLike onClick={ () => setIncrement(increment + 1)} /> {increment}
                <BiDislike onClick={ () => setDecrement(decrement + 1)} /> {decrement}
            </div>
        </div>
  )
}

export default Review 
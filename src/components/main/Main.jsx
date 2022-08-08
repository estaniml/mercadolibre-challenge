import React, { useState } from 'react'

const Pictures = () => {

    const [image, setImage] = useState('https://eltallerdehector.com/wp-content/uploads/2022/06/63caa-stitch-tierno-png.png')

  return (
    <>
        <div className='col-span-1 flex flex-col w-4/5 mx-auto'>
            <img 
                src='https://eltallerdehector.com/wp-content/uploads/2022/06/63caa-stitch-tierno-png.png' 
                alt='Muñeco Stitch' 
                className='border-2 dark:border-gray-900 hover:border-blue-500 dark:hover:border-blue-500 rounded-md mb-2 cursor-pointer' 
                onClick={ (e) => setImage(e.target.src)}
            />
            <img 
                src='https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/9809d-stitch-hola-png.png?resize=500%2C500&ssl=1' 
                alt='Muñeco Stitch' 
                className='border-2 dark:border-gray-900 hover:border-blue-500 dark:hover:border-blue-500 rounded-md mb-2 cursor-pointer'
                onClick={ (e) => setImage(e.target.src)}
            />
            <img 
                src='https://www.pngmart.com/files/19/Lilo-And-Stitch-Anime-PNG-HD.png' 
                alt='Muñeco Stitch' 
                className='border-2 dark:border-gray-900 hover:border-blue-500 dark:hover:border-blue-500 rounded-md mb-2 cursor-pointer' 
                onClick={ (e) => setImage(e.target.src)}
            />
        </div>
        <div className='flex justify-center relative col-span-11 h-[30rem]'>
            <img src={image} className='absolute h-full cursor-zoom-in object-cover' />
        </div>

    </>
  )
}

export default Pictures
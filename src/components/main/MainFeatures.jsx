import React from 'react'

const MainFeatures = () => {
  return (
    <div className='col-span-11 pt-10 pl-10'>
        <hr className=' dark:border-gray-900' />
        <h1 className='text-2xl my-8'>Características principales</h1>

        <table className='w-full shadow-md rounded-lg text-lg bg-[#ebebeb] dark:bg-gray-900'>
            <tbody>

            <tr>
                <td className='pl-4 font-medium'>Marca</td>
                <td className='pl-6 pr-28 py-4 bg-[#f5f5f5] dark:bg-gray-700'>eJump</td>
            </tr>
            <tr>
                <td className='p-4 font-medium bg-[#f5f5f5] dark:bg-gray-700'>Modelo</td>
                <td className='pl-6 pr-28 py-4 bg-[#ffffff] dark:bg-gray-600'>LiloyStich</td>
            </tr>
            <tr>
                <td className='p-4 font-medium'>Color</td>
                <td className='pl-6 pr-28 py-4  bg-[#f5f5f5] dark:bg-gray-700'>Azul</td>
            </tr>
            <tr>
                <td className='p-4 font-medium bg-[#f5f5f5] dark:bg-gray-700'>Animal</td>
                <td className='pl-6 pr-28 py-4 bg-[#ffffff] dark:bg-gray-600'>Stich</td>
            </tr>
            <tr>
                <td className='p-4 font-medium'>Personaje</td>
                <td className='pl-6 pr-28 py-4 bg-[#f5f5f5] dark:bg-gray-700'>Stitch</td>
            </tr>
            </tbody>
        </table>

        <h2 className='text-xl my-8'>Otras características</h2>
        <div className='flex justify-between text-sm'>
            <div>
                <p className='mb-2'><strong>Material</strong>: Plush</p>
                <p><strong>Es material hipoalergénico</strong>: SÍ</p>
            </div>
            <div>
                <p className='mb-2'><strong>Altura x Ancho</strong>: 20 cm x 15cm</p>
                <p><strong>Edad mínima recomendada</strong>: 3 años</p>
            </div>

        </div>

        {/* DESCRIPCION */}
        <hr className='my-10 dark:border-gray-900'/>
        <h1 className='text-2xl my-8'>Descripción</h1>
        <h2 className='text-xl text-gray-500 dark:text-gray-300 mb-6'>STITCH DE PELUCHE - TAMAÑO MEDIANO - SOLO COLOR AZUL</h2>

        <ul className='flex flex-col text-xl text-gray-500 dark:text-gray-300 gap-y-6'>
            <li>* Peluche super suave</li>
            <li>* Mide 20 cm. de alto total sentado contando orejitas.</li>
            <li>* Realizado en plush.</li>
            <li>* Relleno de vellon siliconado.</li>
            <li>* Su consulta no molesta.</li>
        </ul>
    </div>
  )
}

export default MainFeatures
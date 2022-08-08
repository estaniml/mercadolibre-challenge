import React from 'react'
import QuestionsForm from './QuestionsForm'



const Questions = () => {



  return (
    <div className='col-span-11 pt-10 pl-10'>
        <h1 className='text-2xl my-8'>Preguntas y respuestas</h1>

        <h2 className='text-xl my-8 font-bold'>¿Qué querés saber?</h2>

        <div className='flex gap-2 text-sm font-bold text-blue-500'>
            <p className='bg-[#e3edfb] py-2 px-3 rounded-lg cursor-pointer'>Costo y tiempo de envío</p>
            <p className='bg-[#e3edfb] py-2 px-3 rounded-lg cursor-pointer'>Devoluciones gratis</p>
            <p className='bg-[#e3edfb] py-2 px-3 rounded-lg cursor-pointer'>Medios de pago y promociones</p>
            <p className='bg-[#e3edfb] py-2 px-3 rounded-lg cursor-pointer'>Garantía</p>
        </div>

        <QuestionsForm />
        
    </div>
  )
}

export default Questions

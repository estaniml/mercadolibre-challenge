import { useEffect, useRef, useState } from 'react';

const QuestionsForm = () => {

    const [textInput, setTextInput] = useState('');
    const [list, setList] = useState([{
      textInput: 'Hola por donde se puede pasar a retirar?',
      answer: 'No se puede pasar a retirar',
      date: '10/08/2022',
      hover: false
    }]);

    const input = useRef(null)  

    const handleSubmit = e => {
      e.preventDefault();
  
      if(textInput.trim() === '') {
        input.current.focus()
        return;
      } else {
        setList([
            {textInput, answer: '', date: '', hover: false },
            ...list
        ]);
      }
      setTextInput('');
    }


    const mouseEnter = textInput => {
      const doneTodo = list.map( 
        question => question.textInput === textInput ? 
          {...question, hover: true} :
           question);

      setList(doneTodo);
    }

    const mouseLeave = textInput => {
      const doneTodo = list.map( 
        question => question.textInput === textInput ? 
          {...question, hover: false} :
           question);

      setList(doneTodo);
    }
    
    


  return (
    <>
    <h2 className='text-xl my-8 font-bold'>Preguntale al vendedor</h2>
    <form
      className='flex gap-4'
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        className='w-3/4 h-12 rounded-lg text-md font-light border-2 dark:text-gray-100 border-gray-300 px-4 py-2 focus:outline-blue-500 dark:bg-gray-800'
        placeholder='Escribí tu pregunta...'
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        ref={input}
      />  
      <button 
        type="submit"
        className='w-1/4 h-12 rounded-md bg-blue-500 hover:bg-[#2968c9] text-white font-bold mb-2'
      > Preguntar </button>
    </form>

    <p className='ml-2 font-light text-xs text-gray-500 dark:text-gray-400'>Tiempo aproximado de respuesta: 1 minutos</p>

    <h2 className='text-xl my-8 font-bold'>Últimas realizadas</h2>
    <ul>
      {list.map((question, index) => (
        <li 
          className='my-4'
          key={index}
          onMouseEnter={ () => mouseEnter(question.textInput) }
          onMouseLeave={ () => mouseLeave(question.textInput) }
        >
          {question.textInput}
          <span className={ question.hover ? 'inline cursor-pointer text-sm text-blue-500 self-center ml-2' : 'hidden' }>Denunciar</span>

          { question.answer && question.date && (
            <div className='flex'>
              <div className='border-l-2 border-b-2 w-3 h-3'></div>
              <p className='ml-2 text-gray-500 dark:text-gray-400'>{question.answer }</p>
              <span className='ml-2 text-gray-400 text-sm self-center'>{question.date }</span>
            </div>
          )}
        </li>
      ))}
    </ul>
    {
          list.length >= 8 && (
          <a href='' className='ml-3 mb-20 text-sm text-blue-500'>Ver todas las preguntas</a>
        )}
  </>
  )
}

export default QuestionsForm
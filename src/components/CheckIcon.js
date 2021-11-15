import { useState } from 'react'



export const IncompletedIcon = ({ onClick }) => {
  const [CheckCompletedIcon, setCheckCompletedIcon] = useState(false)
  const onClickCompletedIcon = () => {
    setCheckCompletedIcon(prevState => !prevState)
  }
  return (
    <>
      {CheckCompletedIcon ? (
        <button
          className='items-center py-2 px-2 mr-4  bg-check text-primary rounded-full w-7 h-7 sm:mt-0'
          onClick={onClickCompletedIcon}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11'>
            <path fill='none' stroke='#FFF' strokeWidth='2' d='M1 4.304L3.696 7l6-6' />
          </svg>
        </button>
      ) : (
        <button
          className='items-center py-2 px-2 mr-4 bg-transparent border border-indigo-300 hover:border-indigo-400 text-indigo-400 rounded-full sm:mt-0 w-7 h-7'
          onClick={onClickCompletedIcon}
        ></button>
      )}
    </>
  )
}

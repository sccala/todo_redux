export const CheckIcon = ({ onClick }) => {
  return (
    <button
      className='items-center py-2 px-2  bg-check text-primary rounded-full text-base sm:mt-0'
      onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11'>
        <path fill='none' stroke='#FFF' strokeWidth='2' d='M1 4.304L3.696 7l6-6' />
      </svg>
    </button>
  )
}

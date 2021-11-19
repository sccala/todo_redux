export const TodoFilter = ({ filterStatus, setFilterStatus }) => {
  const handleClick = status => {
    setFilterStatus(status)
  }



  return (
    <div className='flex justify-between w-full text-primary  '>
      <button
        className={`${filterStatus === 'all' ? 'focus:text-indigo-500' : ''} pr-4`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        className={`${filterStatus === 'active' ? 'focus:text-indigo-500' : ''} pr-4`}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button
        className={`${filterStatus === 'completed' ? 'focus:text-indigo-500' : ''} pr-4`}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  )
}


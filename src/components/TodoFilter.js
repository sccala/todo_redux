export const TodoFilter = ({ filterStatus, setFilterStatus }) => {
  const handleClick = status => {
    setFilterStatus(status)
  }

  return (
    <div className='flex gap-1.5 text-primary'>
      <button
        className={filterStatus === 'all' ? 'btn active' : 'btn'}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        className={filterStatus === 'active' ? 'btn active' : 'btn'}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button
        className={filterStatus === 'completed' ? 'btn active' : 'btn'}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  )
}


// @ts-nocheck
import { DarkModeToggle } from '../Button/Toggle'

export const Dashboard = () => {
  return (
    <div className='dashboard mx-auto -mt-24'>
      <div className=' '>
        <div className='flex items-center  justify-between place-items-center'>
          <h1 className=' text-gray-100 font-bold tracking-widest '>TODO</h1>
          <DarkModeToggle className='' />
        </div>
        <button>Hello</button>
      </div>
    </div>
  )
}

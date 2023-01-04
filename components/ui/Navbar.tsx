import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { FiList, FiShoppingCart } from 'react-icons/fi'
import { RiUser3Line } from 'react-icons/ri'

export const Navbar = () => {
  return (
    <div className='flex justify-between py-4'>
      
      <Link href='/'>
        <span className={`flex gap-4 text-primary items-center font-black text-2xl`}>
          <BiMenuAltLeft size={30} />
          MegaMart
        </span>
      </Link>

      <div>
        <label className='flex gap-2 items-center'>
          <CiSearch className='text-primary' size={20} strokeWidth='0.05rem' />
          <input 
            className='px-2 py-1 w-64 text-slate-600 font-normal focus:outline-primary placeholder:text-[0.8rem] placeholder:text-slate-500 placeholder:font-normal'
            placeholder='Search essentials, groceries and more...'
            type="text" 
          />
        </label>
      </div>

      <div className='flex gap-10 items-center'>
        <FiList className='text-primary' size={28} />
        <div className='flex gap-5 justify-between'>

          <Link href='/signIn'>
            <span className='flex gap-2 items-center font-bold text-slate-500'>
              <RiUser3Line className='text-primary' size={20} />
              Sign Up/Sign In
            </span>
          </Link>

          <div className='border border-transparent border-r-gray-300' />

          <Link href='/cart'>
            <span className='flex gap-2 items-center font-bold text-slate-500'>
              <FiShoppingCart className='text-primary' size={20} />
              Cart
            </span>
          </Link>

        </div>

      </div>

    </div>
  )
}

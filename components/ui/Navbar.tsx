import { getSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { FiList, FiShoppingCart } from 'react-icons/fi'
import { RiUser3Line } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'

export const Navbar = () => {
  const { user } = useAuth()

  return (
    <div className='flex justify-between items-center py-4'>
      
      <Link href='/'>
        <span className={`flex gap-4 text-primary items-center font-black text-3xl tracking-wide`}>
          <div className='rounded-lg bg-secondary p-2'>
            <BiMenuAltLeft size={36} />
          </div>
          MegaMart
        </span>
      </Link>

      <div className='flex gap-36 justify-between items-center bg-secondary py-2 px-4 ml-28 rounded-lg'>
        <label className='flex gap-1 items-center'>
          <CiSearch className='text-primary' size={20} strokeWidth='0.05rem' />
          <input 
            className='px-2 bg-inherit py-1 w-64 text-slate-500 font-normal focus:outline-none placeholder:text-[0.8rem] placeholder:text-gray-400 placeholder:font-normal'
            placeholder='Search essentials, groceries and more...'
            type="text" 
          />
        </label>
        <FiList className='text-primary' size={28} />
      </div>

      <div className='flex gap-5 justify-between'>

        {
          user.name
            ? (
              <div className='cursor-pointer' onClick={ () => signOut() }>
                <span className='flex gap-2 items-center text-slate-500'>
                  <img className='w-8 h-8 rounded-full' src={ user.image! } alt={ user.name! } />
                  { user.name }
                </span>
              </div>
            )
            : (
              <Link href='/api/auth/signin'>
                <span className='flex gap-2 items-center font-bold text-slate-500'>
                  <RiUser3Line className='text-primary' size={20} />
                  Sign Up/Sign In
                </span>
              </Link>
            )
        }

        {/* <Link href='/api/auth/signin'>
          <span className='flex gap-2 items-center font-bold text-slate-500'>
            <RiUser3Line className='text-primary' size={20} />
            Sign Up/Sign In
          </span>
        </Link> */}

        <div className='border-2 border-transparent border-r-neutral-200' />

        <Link href='/cart'>
          <span className='flex gap-2 items-center font-bold text-slate-500'>
            <FiShoppingCart className='text-primary' size={20} />
            Cart
          </span>
        </Link>

      </div>

    </div>
  )
}

import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci'
import { BiBadgeCheck } from 'react-icons/bi'


export const Strip = () => {
  return (
    <div className='flex justify-between text-slate-500 bg-terciary py-2 px-24'>
      <p className='text-sm'>Welcome to worldwide MegaMart!</p>
      <div className='flex gap-4'>
        <div className='flex gap-2 items-center'>
          <CiLocationOn className='text-primary' size={20} />
          <p className='text-sm'>Deliver to <strong>423651</strong></p>
        </div>

        <div className='border border-transparent border-r-gray-300' />

        <div className='flex gap-2 items-center'>
          <CiDeliveryTruck className='text-primary' size={20} />
          <p className='text-sm'>Track your order</p>
        </div>

        <div className='border border-transparent border-r-gray-300' />

        <div className='flex gap-2 items-center'>
          <BiBadgeCheck className='text-primary' size={20} />
          <p className='text-sm'>All Offers</p>
        </div>
      </div>
    </div>
  )
}

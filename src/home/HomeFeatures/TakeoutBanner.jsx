import React from 'react'
import bannerguy from '../../assets/icon/Takeout.png'



const TakeoutBanner = () => {
  return (
    <div className='grid grid-cols-12 w-full h-[215px] md:h-[300px] lg:h-[360px] relative bg-[#F67D26] '>
      <div className='col-span-4 lg:col-span-6'>
        <img
          src={bannerguy}
          alt="takeout order"
          className='h-[260px] md:h-[400px] lg:h-[450px] absolute  -left-28 -top-5 md:-top-14 lg:-top-10 '
        />
      </div>
      <div className='col-span-8 lg:col-span-6 text-white space-y-3 lg:space-y-5 py-6 pl-5'>
        <h2 className='text-lg lg:text-3xl font-bold'>
          Save Delivery Charge!!!
        </h2>
        <div className='bg-white text-[#F67D26] w-fit lg:w-[360px] px-5 py-2 rounded-3xl text-center'>
          <h3 className='font-bold text-sm lg:text-xl'>
            Get Your Takeout Order
          </h3>
        </div>
        <div>
          <ul>
            <h4 className='font-bold text-sm md:text-base lg:text-lg'>We Are Located At</h4>
            <li className=''>Tilotama</li>
            <li className=''>Butwal</li>
            <li className=''>Bhairahawa</li>
          </ul>
        </div>

        <button className='text-lg font-semibold border px-20 py-2 rounded-lg'>Order Now</button>
      </div>
    </div>
  )
}

export default TakeoutBanner
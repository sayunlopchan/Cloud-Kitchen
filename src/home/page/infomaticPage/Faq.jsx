import React from 'react'


// IMAGE
import FAQ from '../../../assets/bg-texture/FAQ.png'
import { AccordionCustomIcon } from '../../../components/Accordian/Accordian'


// ROUTES
import { NavLink } from 'react-router-dom'
import * as paths from '../../../Routes/Path'

const Faq = () => {
  return (
    <div className='space-y-20 py-10 bg-clay'>
      <div className='grid grid-cols-1 md:grid-cols-8 px-5 md:px-20 gap-y-5'>
        <div className='bg-transparent md:col-span-1 '></div>
        <section className='md:col-span-3 space-y-2 pr-5'>
          <h2 className='text-4xl font-bold'>FAQs</h2>
          <p>Have Questions? Here you find the answers most valued by our partners, along with access to step-by-step instructions and support.</p>
        </section>
        <section className=' md:col-span-3 sm:px-20 md:px-0'>
          <img src={FAQ} alt="" className='border object-cover size-full' />
        </section>
        <div className='bg-transparent md:col-span-1'></div>
      </div>


      {/*  */}
      <div className='grid grid-cols-1 md:grid-cols-8 bg-white'>
        <div className='bg-transparent md:col-span-1 '></div>
        <section className='md:col-span-3 p-5'>
          <ul className='cursor-pointer'>
            <h2 className='text-xl font-bold'>More Pages</h2>
            <li className='hover:underline underline-offset-2'>
              <NavLink to={paths.LOGIN_PAGE}>login</NavLink>
            </li>
            <li className='hover:underline underline-offset-2'>
              <NavLink to={paths.ABOUT_US_PAGE}>about us</NavLink>
            </li>
            <li className='hover:underline underline-offset-2'>
              <NavLink to={paths.CONTACT_US_PAGE}>contact us</NavLink>
            </li>
            <li className='hover:underline underline-offset-2'>
              <NavLink to={paths.PRIVACY_POLICY_PAGE}>privacy & policy</NavLink>
            </li>
            <li className='hover:underline underline-offset-2'>
              <NavLink to={paths.TERMS_AND_CONDITIONS_PAGE}>Terms & conditions</NavLink>
            </li>
          </ul>
        </section>
        <section className='md:col-span-3 p-5 space-y-3'>
          <h2 className='text-xl font-bold'>Frequently Asked Questions</h2>
          <hr className='border-b-[1.5px]' />
          <AccordionCustomIcon />
        </section>
        <div className='bg-transparent md:col-span-1 '></div>
      </div>


    </div>
  )
}

export default Faq
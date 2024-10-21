import React from 'react'
// IMAGE
import FAQ from '../../../assets/bg-texture/FAQ.png'

const Faq = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <section className='bg-gray-300'>
          <h2>FAQs</h2>
          <p>Have Questions? Here you find the answers most valued by our partners, along with access to step-by-step instructions and support.</p>
        </section>
        <section className='bg-gray-300'>
          <img src={FAQ} alt="" className='border object-cover size-full' />
        </section>
      </div>
    </div>
  )
}

export default Faq
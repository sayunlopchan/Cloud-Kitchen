import React from 'react'
import kitchen_doodle from '../../../assets/bg-texture/demodern-kitchen-interior-design.jpg'

// IMAGE
import testImg from '../../../assets/bg-texture/ordering.webp'
import AnimatedComponent from '../../../components/AnimatedComponent/AnimatedComponent'


const Aboutus = () => {
  return (
    <div className=''>

      {/* FIRST */}
      <div className='grid grid-cols-1 lg:grid-cols-2 max-lg:space-y-20 px-5 lg:px-20 py-20'>
        <section className='space-y-2'>
          <h2 className='text-lg font-normal text-slate-600'>About Us</h2>
          <h3 className='text-4xl font-bold text-slate-800'>Delivering Delicious Food with a Delightful Experience.</h3>

          <p>Bhansha Express is the leading cloud kitchen for quick, fast, and tasty food in Tillottama, Nepal. Hundreds of happy customers trust Bhansha Express to satisfy their cravings with our efficient home delivery and takeout services. We are committed to providing flavorful meals, all crafted with care, ensuring you enjoy a restaurant-quality experience from the comfort of your home. Whether it&apos;s a busy day at work or a relaxed night in, Bhansha Express brings delicious food right to your door, 24/7.</p>

          <div>
            <button className='px-14 py-2 bg-[#5E5CFA] hover:bg-[#4645BB] text-white rounded-sm transition-colors duration-300'>SIGN UP</button>
          </div>
        </section>

        <section className='flex justify-center'>
          <img src={testImg} alt="" className='size-[250px] lg:size-[400px]' />
        </section>
      </div>
      {/* FIRST */}


      <div className='w-full h-[250px] lg:h-[400px] relative'>
        <div className='absolute inset-0 bg-black opacity-35'>
        </div>
        <img src={kitchen_doodle} alt="" className='object-cover size-full' />
        <h1 className=' text-white absolute inset-0 flex justify-center items-center'>hello</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 lg:p-20 gap-x-10 max-md:space-y-10'>
        <AnimatedComponent>
          <section className='space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-slate-800'>What is Bhansha Express?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam amet mollitia sunt enim ab officiis optio pariatur quae voluptate dolor nemo, similique necessitatibus culpa commodi? Eaque, facilis. Id, expedita maxime explicabo, error distinctio incidunt voluptates perferendis quasi nihil doloribus eos vero iusto iste similique rem quaerat qui sequi deleniti eum.</p>
          </section>
        </AnimatedComponent>

        <AnimatedComponent>
          <section className='space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-slate-800'>What Bhansha Express Do?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam amet mollitia sunt enim ab officiis optio pariatur quae voluptate dolor nemo, similique necessitatibus culpa commodi? Eaque, facilis. Id, expedita maxime explicabo, error distinctio incidunt voluptates perferendis quasi nihil doloribus eos vero iusto iste similique rem quaerat qui sequi deleniti eum.</p>
          </section>
        </AnimatedComponent>
      </div>

    </div >
  )
}

export default Aboutus
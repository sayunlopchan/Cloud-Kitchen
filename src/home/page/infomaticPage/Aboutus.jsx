import React, { Suspense, lazy } from "react";

// IMAGE
import story_1 from '../../../assets/bg-texture/ordering.webp'
import story_2 from '../../../assets/bg-texture/female-ceo-talking.jpg'
import story_3 from '../../../assets/bg-texture/What-is-a-brand-story-hero.jpg'


import testImg from '../../../assets/bg-texture/ordering.webp'
import kitchen_ai from '../../../assets/bg-texture/kitchen_ai.jpg'
import AnimatedComponent from '../../../components/AnimatedComponent/AnimatedComponent'




// gggg
import { useState } from 'react'
import { CONTACT_US_PAGE } from '../../../Routes/Path'
import { useNavigate } from "react-router-dom";


const Aboutus = () => {

  const nav = useNavigate();
  // for signup action
  const [signup, setSignup] = useState(false)


  // State to keep track of which button is clicked
  const [activeBtn, setActiveBtn] = useState(1)

  const handleOpen = (btnNumber) => {
    // Set the active button based on the clicked one
    setActiveBtn(btnNumber);
  }

  const notif = (btnNumber) => {
    setSignup(true)
    setTimeout(() => {
      setSignup(false)
    }, 5000)
  }



  return (
    <div>

      {/* FIRST */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-lg:space-y-20 px-5 lg:px-20 py-10 md:py-20'>
        <section className='space-y-2'>

          <h2 className='text-lg font-normal text-slate-600'>About Us</h2>

          <AnimatedComponent>
            <h3 className='text-4xl font-bold text-slate-800'>Bringing fast, delicious food to your doorstep.</h3>
          </AnimatedComponent>
          <AnimatedComponent>
            <p>Bhansha Express is a cloud kitchen based in Tillottama, Nepal, offering tasty and quick meals with 24/7 delivery and takeout services. We&apos;re here to make sure you enjoy your favorite dishes whenever you want, with a focus on quality, convenience, and customer satisfaction.</p>
          </AnimatedComponent>

          <div className="relative">
            <AnimatedComponent>
              <button
                className='px-14 py-2 bg-colorRed hover:bg-colorOrange text-white rounded-sm transition-colors duration-300'
                onClick={notif}>SIGN UP</button>
            </AnimatedComponent>

            {
              signup &&
              <div className="text-colorRed absolute">Signup Feature is for future , Please Contact us for Details</div>
            }

          </div>
        </section>

        <section className='flex justify-center'>
          <img src={testImg} alt="" className='md:size-[250px] lg:size-[400px]' />
        </section>
      </div>
      {/* FIRST */}

      {/* SECOND */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-lg:space-y-20 px-5 lg:px-20 py-10 md:py-20'>
        <section className='space-y-2 md:order-2'>
          <h2 className='text-lg font-normal text-slate-600'>Our Mission</h2>

          <AnimatedComponent>
            <h3 className='text-4xl font-bold text-slate-800'>Delivering Delicious Food with a Delightful Experience.</h3>
          </AnimatedComponent>
          <AnimatedComponent>
            <p>At Bhansha Express, our mission is to redefine how people experience food delivery. We strive to deliver flavorful, restaurant-quality meals quickly and reliably, all while maintaining the highest standards of hygiene and customer care. We are committed to serving the community with convenient, affordable, and delicious meals, ensuring that every order adds a little more joy to our customers&apos; day.</p>
          </AnimatedComponent>

          <div>
            <button
              onClick={() => nav(CONTACT_US_PAGE)}
              className='px-14 py-2 bg-colorRed hover:bg-colorOrange text-white rounded-sm transition-colors duration-300'>CONTACT US</button>
          </div>
        </section>

        <section className='flex justify-center md:order-1'>
          <img src={testImg} alt="" className='md:size-[250px] lg:size-[400px]' />
        </section>
      </div>
      {/* SECOND */}

      {/* BANNER */}
      <div className='w-full h-[250px] lg:h-[400px] relative'>
        <div className='absolute inset-0 bg-black opacity-35'>
        </div>
        <img src={kitchen_ai} alt="" className='object-cover size-full' />
        <h1 className=' text-white absolute inset-0 flex justify-center items-center text-center'>NO COMPROMISE IN FOOD, <br /> BHANSHA EXPESS</h1>
      </div>
      {/* BANNER */}


      {/* ANIMATED CARD */}
      <div className='grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 lg:p-20 gap-x-10 max-md:space-y-10'>
        <AnimatedComponent>
          <section className='space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-slate-800'>What is Bhansha Express?</h2>
            <p>Bhansha Express is a leading cloud kitchen located in Tillottama, Nepal, specializing in delivering fast, tasty, and freshly prepared meals. We offer convenient home delivery and takeout options, ensuring our customers enjoy delicious food anytime, day or night. With a focus on quality ingredients, quick service, and customer satisfaction, Bhansha Express is your go-to choice for satisfying meals delivered right to your doorstep, 24/7.</p>
          </section>
        </AnimatedComponent>

        <AnimatedComponent>
          <section className='space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-slate-800'>What Does Bhansha Express Do?</h2>
            <p>Bhansha Express specializes in preparing and delivering fast, delicious, and freshly made meals to your doorstep. As a cloud kitchen, we focus on providing quick service with high-quality food that meets the needs of busy individuals and families. Whether you&apos;re craving a tasty meal at home or need a quick takeaway, Bhansha Express offers 24/7 delivery and takeout options to satisfy your hunger, anytime, anywhere in Tillottama, Nepal.</p>
          </section>
        </AnimatedComponent>
      </div>
      {/* ANIMATED CARD */}

      {/* FUNCTIONAL COMP*/}
      <div className='py-10 space-y-5'>

        <h2 className='text-xl font-normal font-mono tracking-widest text-center text-slate-600'>OUR STORY</h2>


        <div className='grid grid-cols-1 md:grid-cols-12 p-5 md:p-10 gap-y-5'>

          {/* BUTTONS */}
          <div className='flex md:flex-col w-fit gap-2 md:col-span-2'>
            {/* Button 1 */}
            <button
              onClick={() => handleOpen(1)}
              className={`border p-5 cursor-pointer transition-all duration-500 ${activeBtn === 1 ? 'text-black shadow-xl rounded-md' : 'bg-white'}`}
            >2023
            </button>
            {/* Button 1 */}

            {/* Button 2 */}
            <button
              onClick={() => handleOpen(2)}
              className={`border p-5 cursor-pointer transition-all duration-500 ${activeBtn === 2 ? 'text-black shadow-xl rounded-md' : 'bg-white '}`}
            >2024
            </button>
            {/* Button 2 */}

            {/* Button 3 */}
            <button
              onClick={() => handleOpen(3)}
              className={`border p-5 cursor-pointer transition-all duration-500 ${activeBtn === 3 ? ' text-black shadow-xl rounded-md' : 'bg-white '}`}
            >2024
            </button>
            {/* Button 3 */}

          </div>
          {/* BUTTONS */}


          {/* ISACTIVE */}
          <div className='md:col-span-10'>
            {
              activeBtn === 1 &&
              <div className='w-full p-2 rounded-md space-y-3'>
                <img src={story_1} alt="story 1" className='h-[400px] w-full object-cover rounded-md' />
                <h2 className='text-2xl font-bold'>TITLE 1 HERE</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet magnam dolor, corrupti cum voluptatem ducimus nostrum vel! Magnam, ut!
                </p>
              </div>

            }
            {
              activeBtn === 2 &&
              <div className='w-full p-2 rounded-md space-y-3'>
                <img src={story_2} alt="story 1" className='h-[400px] w-full object-cover rounded-md' />
                <h2 className='text-2xl font-bold'>TITLE 2 HERE</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet magnam dolor, corrupti cum voluptatem ducimus nostrum vel! Magnam, ut!
                </p>
              </div>

            }
            {
              activeBtn === 3 &&
              <div className='w-full p-2 rounded-md space-y-3'>
                <img src={story_3} alt="story 1" className='h-[400px] w-full object-cover rounded-md' />
                <h2 className='text-2xl font-bold'>TITLE 3 HERE </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet magnam dolor, corrupti cum voluptatem ducimus nostrum vel! Magnam, ut!
                </p>
              </div>

            }
          </div>
          {/* ISACTIVE */}
        </div>
        {/* FUNCTIONAL COMP */}
      </div>
    </div >

  )
}

export default Aboutus
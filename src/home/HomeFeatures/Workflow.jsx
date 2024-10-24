import chooseYourMealIcon from '../../assets/icon/french_fries.jpg'
import confirmLocation from '../../assets/icon/3d-view-map.jpg'
import collectMeal from '../../assets/icon/foodbag.jpg'
import takeout from '../../assets/icon/Takeout1.jpg'

import CurveLine from "../../assets/icon/red Curve.svg";
import WorkFlowCard from '../../components/WorkFlowCard';



import arrow_next from '../../assets/icon/Next-Arrow.svg'
import arrow_next_2 from '../../assets/icon/Arrow_nextt_2.svg'


import { HiOutlineArrowLongUp } from "react-icons/hi2";


const Workflow = () => {
  return (
    <div className='bg-clay space-y-20 '>

      {/* Heading */}
      <div className="relative w-fit py-2">
        <h2 className="font-bold text-3xl pl-5">How it Work</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute right-0"
        />
      </div>
      {/* Heading */}






      {/* ///////////////////////////////////////////////////// */}
      <div className='w-full flex justify-center items-center py-10'>

        <div className='grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 place-content-center relative gap-1 '>


          <img src={arrow_next} alt="" className='w-[100px] absolute top-[15%] left-[20%] -rotate-[30deg] hidden lg:block ' />

          <img src={arrow_next_2} alt="" className='w-[100px] absolute lg:bottom-[20%] lg:left-[20%] lg:-rotate-[140deg] hidden lg:block ' />

          <div className='lg:col-span-4 lg:row-span-12 flex  justify-center items-center order-3 lg:order-none pt-20 lg:pt-0'>
            <WorkFlowCard
              image={chooseYourMealIcon}
              title="Choose Your Meal"
              description="We deliver your food within 30 min of order. Fast, Fresh and Yummy!"
            />
          </div>

          <div className=' lg:col-span-3 lg:row-span-4 order-2 lg:order-none pt-20 lg:pt-0 flex flex-col justify-center items-center'>
            <WorkFlowCard
              image={confirmLocation}
              title="Confirm Your Location"
              description="We deliver your food to your designated location!" />
            <HiOutlineArrowLongUp size={60} className='lg:hidden ' />
          </div>


          <div className='lg:col-span-2 lg:row-span-4 flex items-center justify-center'>
            <img src={arrow_next_2} alt="" className='w-[100px] rotate-180 hidden lg:block' />
          </div>


          <div className=' lg:col-span-3 lg:row-span-4 order-1 lg:order-none flex flex-col justify-center items-center'>
            <WorkFlowCard
              image={collectMeal}
              title="Collect Your Food"
              description="Get Your Order Fresh,Delicious and Ready to eat!" />
            <HiOutlineArrowLongUp size={60} className='lg:hidden ' />
          </div>



          <div className='lg:col-span-8 lg:row-span-4 lg:flex pl-28 items-center order-5 md:order-none py-10 md:py-0 hidden'>
            <h2 className='font-semibold text-2xl'>OR</h2>
          </div>



          <div className='lg:col-span-3 lg:row-span-4 order-6 lg:order-none  flex flex-col justify-center items-center'>

            <HiOutlineArrowLongUp
              size={60}
              className='mb-20 lg:hidden rotate-180'
            />

            <WorkFlowCard
              image={takeout}
              title="Get Your Takeout"
              description="Visit the nearest kitchen around you and Take Your Meal!"
            />

          </div>


        </div>
      </div>

    </div>
  )
}

export default Workflow
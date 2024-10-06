import chooseYourMealIcon from '../../assets/icon/french_fries.jpg'
import confirmLocation from '../../assets/icon/3d-view-map.jpg'
import collectMeal from '../../assets/icon/foodbag.jpg'
import takeout from '../../assets/icon/Takeout1.jpg'

import CurveLine from "../../assets/icon/red Curve.svg";
import or_arrow from '../../assets/icon/orArrow.svg'
import step_arrow from '../../assets/icon/Arrow nextt.svg'



const Workflow = () => {
  return (
    <div className='bg-clay px-10 space-y-10'>

      {/* Heading */}
      <div className="relative w-fit py-20">
        <h2 className="font-bold text-3xl pl-10">How it Work</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute right-0"
        />
      </div>
      {/* Heading */}

      <div className='grid grid-cols-1 md:grid-cols-3  place-items-center gap-y-20 relative '>
        {/* one */}
        <div className='relative w-[240px] h-[165px] md:w-[215px] md:h-[160px] lg:w-[240px] lg:h-[165px] border-colorRed bg-white border-2 rounded-[60px]'>
          <div className='flex justify-center h-[55px]'>
            <div className='absolute -top-16 size-[120px] bg-gray-400 rounded-full overflow-hidden'>
              <img src={chooseYourMealIcon} alt="Confirm Location img" className='object-cover object-right size-full' />
            </div>
          </div>
          <div className='text-center'>
            <h2
              className='text-colorRed font-semibold text-lg'>Choose Your Meal</h2>
            <p className='text-sm text-secendaryText'>
              We deliver your food within
              30 min of order.
              Fast, Fresh and Yummy!</p>
          </div>

        </div>
        {/* one */}
        <img src={step_arrow} alt="" className='w-20 absolute left-[30%] z-10 max-lg:hidden' />



        {/* two */}
        <div className='relative w-[240px] h-[165px] md:w-[215px] md:h-[160px] lg:w-[240px] lg:h-[165px] border-colorRed bg-white border-2 rounded-[60px]'>
          <div className='flex justify-center h-[55px]'>
            <div className='absolute -top-16 size-[120px] bg-gray-400 rounded-full overflow-hidden'>
              <img src={confirmLocation} alt="Confirm Location img" className='object-cover size-full' />
            </div>
          </div>
          <div className='text-center'>
            <h2
              className='text-colorRed font-semibold text-lg'>Confirm Your Location</h2>
            <p className='text-sm text-secendaryText'>
              We deliver your food to
              your designated location!</p>
          </div>

        </div>
        {/* two */}
        <img src={step_arrow} alt="" className='w-20 absolute right-[30%] z-10 max-lg:hidden' />
        {/* three */}
        <div className='relative w-[240px] h-[165px] md:w-[215px] md:h-[160px] lg:w-[240px] lg:h-[165px] border-colorRed bg-white border-2 rounded-[60px]'>
          <div className='flex justify-center h-[55px]'>
            <div className='absolute -top-16 size-[120px] bg-gray-400 rounded-full overflow-hidden'>
              <img src={collectMeal} alt="Confirm Location img" className='object-cover size-full' />
            </div>
          </div>
          <div className='text-center'>
            <h2
              className='text-colorRed font-semibold text-lg'>Collect Your Order</h2>
            <p className='text-sm text-secendaryText'>
              Get Your Order Fresh,Delicious
              and Ready to eat!</p>
          </div>

        </div>
        {/* three */}
        <img src={or_arrow} alt="" className='h-[280px] absolute left-[20%] top-[110%] z-10 -rotate-1 max-lg:hidden' />
      </div>
      {/* Or */}
      <h2 className='text-center text-lg font-bold py-10'>Or</h2>
      {/* Or */}

      <div className='w-full flex justify-center items-center py-10'>

        {/* takeout */}
        <div className='relative w-[240px] h-[165px] md:w-[215px] md:h-[160px] lg:w-[240px] lg:h-[165px] border-colorRed bg-white border-2 rounded-[60px]'>
          <div className='flex justify-center h-[55px]'>
            <div className='absolute -top-16 size-[120px] bg-gray-400 rounded-full overflow-hidden'>
              <img src={takeout} alt="Confirm Location img" className='object-cover object-left size-full' />
            </div>
          </div>
          <div className='text-center'>
            <h2
              className='text-colorRed font-semibold text-lg'>Get Your Takeout</h2>
            <p className='text-sm text-secendaryText'>
              Visit the nearest kitchen
              around you and Take Your Meal!</p>
          </div>

        </div>
        {/* takeout */}
      </div>

    </div>
  )
}

export default Workflow
import CurveLine from '../../assets/icon/red Curve.svg'
import ExclusiveOfferData from '../../assets/Data/ExclusiveOfferData'


const ExclusiveOfferBanner = () => {
  return (
    <div className='px-10 py-10 space-y-10 transition-all duration-1000 bg-clay'>
      {/* Heading */}
      <div className='relative w-fit '>
        <h2 className='font-bold text-3xl pl-10'>20-30% off on Exclusive deals </h2>
        <img src={CurveLine} alt={CurveLine} className='w-[130px] absolute top-10 right-24' />
      </div>
      {/* Heading */}

      {/* banner */}
      <section className='flex justify-center items-center flex-wrap gap-4 md:grid md:grid-cols-3 place-items-center overflow-hidden cursor-pointer'>
        {ExclusiveOfferData.map((item, idx) => {
          return (
            <div
              key={idx}
              className='w-full h-40 lg:h-52 bg-slate-400 relative rounded-xl group transition-all duration-500 overflow-hidden'>

              <div className='overlay h-full w-full rounded-xl absolute z-10' >
              </div>

              <div className='bg-black w-10 h-8 absolute right-5 rounded-b-lg py-1 z-10'>
                <h2 className='text-white text-center font-semibold'>10%</h2>
              </div>

              <img src={item.img} alt={item.img} className='w-full h-full object-cover rounded-xl group-hover:scale-150 transition-all duration-1000 absolute' />

              <h2 className='absolute bottom-2 text-white text-lg md:text-sm lg:text-lg pl-2 font-semibold z-10'>{item.title}</h2>

            </div>
          );
        })}
      </section>


      {/* banner */}
    </div>
  )
}

export default ExclusiveOfferBanner
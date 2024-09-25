import CurveLine from '../../assets/icon/red Curve.svg'
import ExclusiveOfferData from '../../assets/Data/ExclusiveOfferData'


const ExclusiveOfferBanner = () => {
  return (
    <div className='pt-10 space-y-5'>
      <div className='relative w-fit'>
        <h2 className='font-bold text-3xl'>20-30% off on Exclusive deals </h2>
        <img src={CurveLine} alt={CurveLine} className='size-20 absolute top-0 right-20' />
      </div>
      <section className='flex gap-10'>
        {ExclusiveOfferData.map((item, idx) => {
          return <div
            key={idx}
            className='w-full h-52 bg-slate-400 relative rounded-xl'>
            <div className='overlay h-full w-full absolute  rounded-xl' />
            <img src={item.img} alt={item.img} className='w-full h-full object-cover rounded-xl' />
            <h2 className='absolute bottom-2 text-white text-lg pl-2 font-semibold'>{item.title}</h2>
          </div>
        })}
      </section>
    </div>
  )
}

export default ExclusiveOfferBanner
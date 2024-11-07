


import CurveLine from '../../assets/icon/red Curve.svg';
import menuData from '../../assets/Data/menu/alldata';
import { useNavigate } from 'react-router-dom';
import * as paths from '../../Routes/Path';




const ExclusiveOfferBanner = () => {

  const nav = useNavigate()
  const selectedOffers = menuData.exclusiveOffer;

  return (
    <div className='px-5 py-10 space-y-10 transition-all duration-1000 bg-clay'>
      {/* Heading */}
      <div className="relative w-fit">
        <h2 className="font-bold text-3xl pl-5 ">Festive Offer</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute top-10 right-0"
        />
      </div>
      {/* Heading */}

      {/* banner */}
      <section className='flex justify-center items-center flex-wrap gap-4 md:grid md:grid-cols-3 place-items-center overflow-hidden cursor-pointer'>
        {selectedOffers.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => nav(`${paths.DETAIL_PAGE.replace(':id', item.id)}`)}
            className='w-full h-40 lg:h-52 2xl:h-80 bg-slate-400 relative rounded-xl group transition-all duration-500 overflow-hidden'
          >
            <div className='overlay h-full w-full rounded-xl absolute z-10' />
            <div className='bg-colorRed w-fit h-8 absolute right-5 rounded-b-lg py-1 px-1 z-10 border'>
              <h2 className='text-center text-white'>Rs.{item.price}</h2>
            </div>
            <img src={item.img} alt={item.title} className='w-full h-full object-cover rounded-xl group-hover:scale-150 transition-all duration-1000 absolute' />
            <h2 className='absolute bottom-2 text-white text-lg md:text-sm lg:text-lg pl-2 font-semibold z-10'>{item.title}</h2>
          </div>
        ))}
      </section>
      {/* banner */}
    </div>
  );
};

export default ExclusiveOfferBanner;

import PopularDishData from '../../assets/Data/PopularDishData'
import CurveLine from '../../assets/icon/red Curve.svg';

const MostSoldPage = () => {
  return (
    <div className='space-y-32 px-10 py-10 transition-all duration-1000 bg-[#F0F2FF]'>
      {/* Heading */}
      <div className='relative w-fit'>
        <h2 className='font-bold text-3xl pl-10'>Our Most Sold</h2>
        <img src={CurveLine} alt="CurveLine" className='w-[65px] absolute top-8 right-0' />
      </div>

      {/* Dishes - Display only the first 3 */}
      <div className="flex flex-wrap justify-center gap-24 items-center ">
        {
          PopularDishData.map((item, idx) => (
            <div key={idx} className='w-[230px] h-[280px] relative rounded-2xl shadow-xl bg-white'>
              <div className='h-[100px]'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-[130px] h-[130px] rounded-full border-red-600 border-4 absolute right-0 -top-10'
                />
              </div>
              <div className='p-2'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                {item.discount > 0 ? (
                  <div>
                    <span className='text-2xl font-semibold line-through text-red-600'>Rs.{item.price}</span>
                    <span className='text-2xl font-semibold ml-2'>Rs.{(item.price - item.discount).toFixed(2)}</span>
                  </div>
                ) : (
                  <h2 className='text-2xl font-semibold'>Rs.{item.price}</h2>
                )}
              </div>
              <div className="absolute bottom-2 right-2 m-2">
                <button
                  className="bg-red-600 text-white text-lg font-semibold px-5 py-2 transition-all duration-500 border hover:rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MostSoldPage;
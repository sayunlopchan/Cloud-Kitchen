
import HomeBanner from './HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from './HomeFeatures/ExclusiveOfferBanner';
import Breakfast from '../components/Menu/Breakfast';


const HomePage = () => {


  return (
    <div className=' space-y-5 lg:space-y-20'>
      <HomeBanner />
      <ExclusiveOfferBanner />
      <div className='bg-[#F0F2FF]'>
        <Breakfast />
      </div>
    </div>
  );
};

export default HomePage;

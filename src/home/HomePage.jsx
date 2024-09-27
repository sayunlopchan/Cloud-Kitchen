
import HomeBanner from './HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from './HomeFeatures/ExclusiveOfferBanner';
import PopularDish from './HomeFeatures/PopularDishes';
import MostSold from './HomeFeatures/MostSold';

const HomePage = () => {


  return (
    <div className=' '>
      <HomeBanner />
      <ExclusiveOfferBanner />
      <PopularDish />
      <MostSold />
    </div>
  );
};

export default HomePage;

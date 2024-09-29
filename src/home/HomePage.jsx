
import HomeBanner from './HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from './HomeFeatures/ExclusiveOfferBanner';
import PopularDish from './HomeFeatures/PopularDishes';
import MostSold from './HomeFeatures/MostSold';
import TakeoutBanner from './HomeFeatures/TakeoutBanner';

const HomePage = () => {


  return (
    <div>
      {/* <HomeBanner /> */}
      {/* <TakeoutBanner /> */}
      {/* <ExclusiveOfferBanner /> */}
      <PopularDish />
      {/* <MostSold /> */}
    </div>
  );
};

export default HomePage;

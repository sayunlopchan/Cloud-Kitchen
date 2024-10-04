
import HomeBanner from '../HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from '../HomeFeatures/ExclusiveOfferBanner';
import PopularDish from '../HomeFeatures/PopularDishes';
import MostSold from '../HomeFeatures/MostSold';
import TakeoutBanner from '../HomeFeatures/TakeoutBanner';
import Workflow from '../HomeFeatures/Workflow';

const HomePage = () => {


  return (
    <div>
      <HomeBanner />
      <TakeoutBanner />
      <ExclusiveOfferBanner />
      <PopularDish />
      <MostSold />
      <Workflow />
    </div>
  );
};

export default HomePage;


import HomeBanner from '../HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from '../HomeFeatures/ExclusiveOfferBanner';
import PopularDish from '../HomeFeatures/PopularDishes';
import MostSold from '../HomeFeatures/MostSold';
import TakeoutBanner from '../HomeFeatures/TakeoutBanner';
import Workflow from '../HomeFeatures/Workflow';
import PopupAd from '../../components/PopupAd';

const HomePage = () => {


  return (
    <div>
      <PopupAd />
      <HomeBanner />
      <TakeoutBanner />
      <ExclusiveOfferBanner />
      <MostSold />
      <Workflow />
      <PopularDish />
    </div>
  );
};

export default HomePage;

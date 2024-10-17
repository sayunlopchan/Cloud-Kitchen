import PopupAd from '../../components/PopupAd';

import HomeBanner from '../HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from '../HomeFeatures/ExclusiveOfferBanner';
import TakeoutBanner from '../HomeFeatures/TakeoutBanner';

import MostSold from '../HomeFeatures/MostSold';
import PopularSection from '../HomeFeatures/PopularSection';

import Workflow from '../HomeFeatures/Workflow';



const HomePage = () => {


  return (
    <div>
      {/* <HomeBanner />
      <PopupAd />
      <TakeoutBanner />
      <ExclusiveOfferBanner />
      <PopularSection />
      <Workflow /> */}
      <MostSold />
    </div>
  );
};

export default HomePage;

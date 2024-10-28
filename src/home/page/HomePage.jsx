import PopupAd from '../../components/PopupAd';

import HomeBanner from '../HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from '../HomeFeatures/ExclusiveOfferBanner';
import TakeoutBanner from '../HomeFeatures/TakeoutBanner';

import MostSold from '../HomeFeatures/MostSold';
import PopularSection from '../HomeFeatures/PopularSection';

import Workflow from '../HomeFeatures/Workflow';
import Detail_Skeleton from '../../components/Skeleton/Detail_Skeleton';


const HomePage = () => {

  return (
    <div>
      {/* <HomeBanner />
      <PopupAd />
      <TakeoutBanner />
      <ExclusiveOfferBanner />
      <PopularSection />
      <MostSold />
      <Workflow /> */}
      <Detail_Skeleton />
    </div>
  );
};

export default HomePage;

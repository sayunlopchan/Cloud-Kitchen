import Lottie from 'lottie-react';
import animation from '../../assets/animation/Location-location.json';



const Location_location = () => {
  return (
    <div>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Location_location
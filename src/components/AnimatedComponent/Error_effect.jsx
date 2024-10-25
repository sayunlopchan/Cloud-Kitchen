

import Lottie from 'lottie-react';
import animation from '../../assets/animation/error.json';



const Error_effect = () => {
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

export default Error_effect
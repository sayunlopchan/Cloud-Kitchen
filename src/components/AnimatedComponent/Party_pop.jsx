import Lottie from 'lottie-react';
import animation from '../../assets/animation/Party-pop.json';



const Party_pop = () => {
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

export default Party_pop
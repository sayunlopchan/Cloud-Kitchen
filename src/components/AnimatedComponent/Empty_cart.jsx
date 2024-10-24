import Lottie from 'lottie-react';
import animation from '../../assets/animation/empty-cart.json';



const Empty_cart = () => {
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

export default Empty_cart
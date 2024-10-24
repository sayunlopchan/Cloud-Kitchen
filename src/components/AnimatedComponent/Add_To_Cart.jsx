import Lottie from 'lottie-react';
import animation from '../../assets/animation/Add-to-Cart.json';



const Add_To_Cart = () => {
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

export default Add_To_Cart
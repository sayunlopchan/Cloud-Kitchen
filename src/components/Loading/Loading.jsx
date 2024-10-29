import Lottie from 'lottie-react';
import animation from '../../assets/animation/Loading_Screen.json';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Loading = () => {
  const location = useLocation(); // Get the current path

  // Conditionally set background based on the route
  const backgroundClass = location.pathname === '/' ? 'bg-white' : 'bg-clay';

  return (
    <div className={`flex justify-center items-center h-screen w-screen ${backgroundClass}`}>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        className='w-[100px] md:w-[200px]' // Fixed Tailwind CSS size classes
      />
    </div>
  );
};

export default Loading;

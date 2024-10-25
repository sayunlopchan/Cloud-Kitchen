import Lottie from 'lottie-react'
import animation from '../../assets/animation/Loading-kitchen.json'

const Loading = () => {
  return (
    <div className='flex justify-center mt-[30%] lg:items-center h-screen w-screen'>
      <div className='size-[500px]'>
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

export default Loading
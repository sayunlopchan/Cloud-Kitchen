import Lottie from 'lottie-react'
import animation from '../../assets/animation/Loading_Screen.json'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>

      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{ width: '100px', height: '100px' }}
      />

    </div>
  )
}

export default Loading
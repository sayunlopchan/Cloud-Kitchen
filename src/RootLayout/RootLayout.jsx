import { Outlet } from "react-router-dom"
import Header from "../home/HomeFeatures/Header"
import TopONload from "../components/TopONload"
import BottomHeader from "../home/HomeFeatures/BottomHeader"
import Footer from "../home/HomeFeatures/Footer"
import BackToTopBtn from "../components/BackToTopBtn"
import MenuBtn from "../components/MenuBtn"
import React from "react"
import Lottie from "lottie-react"

import animation from "../assets/animation/Loading_Screen.json"




const RootLayout = () => {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Set loading to false after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="flex w-full h-full justify-center items-center">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Lottie animationData={animation} loop={true} className='size-[100px] md:size-[200px]' />
        </div>
      ) : (
        <div>
          <TopONload />
          <BackToTopBtn />
          <MenuBtn />
          <Header />
          <Outlet />
          <Footer />
          <BottomHeader />
        </div>
      )}
    </div>
  )
}

export default RootLayout
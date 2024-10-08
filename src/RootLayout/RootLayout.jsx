import { Outlet } from "react-router-dom"
import Header from "../home/HomeFeatures/Header"
import TopONload from "../components/TopONload"
import BottomHeader from "../home/HomeFeatures/BottomHeader"
import Footer from "../home/HomeFeatures/Footer"
import BackToTopBtn from "../components/BackToTopBtn"
import MenuBtn from "../components/MenuBtn"

const RootLayout = () => {
  return (
    <>
      <TopONload />
      <BackToTopBtn />
      <MenuBtn />
      <Header />
      <Outlet />
      {/* <Footer /> */}
      {/* <BottomHeader /> */}
    </>
  )
}

export default RootLayout
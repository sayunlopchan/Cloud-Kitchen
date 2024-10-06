import { Outlet } from "react-router-dom"
import Header from "../home/HomeFeatures/Header"
import TopONload from "../components/TopONload"
import BottomHeader from "../home/HomeFeatures/BottomHeader"
import Footer from "../home/HomeFeatures/Footer"

const RootLayout = () => {
  return (
    <>
      <TopONload />
      <Header />
      <Outlet />
      <Footer />
      <BottomHeader />
    </>
  )
}

export default RootLayout
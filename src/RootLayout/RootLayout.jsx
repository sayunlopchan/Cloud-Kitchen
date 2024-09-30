import { Outlet } from "react-router-dom"
import Header from "../home/HomeFeatures/Header"
import TopONload from "../components/TopONload"
import BottomHeader from "../home/HomeFeatures/BottomHeader"

const RootLayout = () => {
  return (
    <>
      <TopONload />
      <Header />
      <Outlet />
      <BottomHeader />
      <div className="h-[300px] w-full bg-colorRed">
        Fotter
      </div>
    </>
  )
}

export default RootLayout
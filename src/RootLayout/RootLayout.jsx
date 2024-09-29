import { Outlet } from "react-router-dom"
import Header from "../home/HomeFeatures/Header"
import TopONload from "../components/TopONload"

const RootLayout = () => {
  return (
    <>
      <TopONload />
      <Header />
      <Outlet />
    </>
  )
}

export default RootLayout
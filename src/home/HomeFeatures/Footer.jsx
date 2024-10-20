import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'
import { NavLink, useNavigate } from "react-router-dom";




import * as paths from '../../Routes/Path.js';




const Footer = () => {

  const nav = useNavigate()


  // Exclude Bottom nav form page 
  const isExcludedPath = [
    paths.DASHBOARD_PAGE
  ].includes(location.pathname);

  if (isExcludedPath) {
    return null;
  }


  return (
    <div className='lg:h-[470px] text-white'>





      {/* footer-orange */}
      <div className='bg-orange-500 h-14 flex gap-x-5'>

        <span className="bg-gray-500">

        </span>


      </div>
      {/* footer-orange */}





      <div className="bg-colorRed h-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-[5px] ">


        <div className="col-span-3 lg:col-span-3 p-5 space-y-5">
          <img src={logo} alt="logo" className="w-full bg-white p-2" />
          <p className="font-semibold text-white">Bhansha Express Is a Online Food Ordering and Delivery Company Based In Butwal, Bhairahawa and Tilottama </p>
        </div>
        <div className="col-span-3 lg:col-span-3 lg:mx-auto p-5">
          <h2 className="font-bold text-2xl">Our Company</h2>
          <ul>
            <li
              onClick={() => nav(paths.ABOUT_US_PAGE)} className="cursor-pointer  transition-all duration-300 hover:ml-1">About Us</li>
            <li
              onClick={() => nav(paths.FAQ_PAGE)}
              className="cursor-pointer  transition-all duration-300 hover:ml-1">FAQ</li>
            <li
              onClick={() => nav(paths.CONTACT_US_PAGE)}
              className="cursor-pointer  transition-all duration-300 hover:ml-1">Contact Us</li>

            <li onClick={() => nav(paths.TERMS_AND_CONDITIONS_PAGE)} className="cursor-pointer  transition-all duration-300 hover:ml-1">Terms & Conditions</li>
            <li onClick={() => nav(paths.PRIVACY_POLICY_PAGE)} className="cursor-pointer  transition-all duration-300 hover:ml-1">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-3 lg:mx-auto p-5">
          <h2 className="font-bold text-2xl">Payment Method</h2>
          <ul>
            <li>Cash On Delivery</li>
            <li>e-sewa</li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-3 lg:mx-auto p-5">
          <h2 className="font-bold text-2xl">Contact Info</h2>
          <ul className="text-base ">
            <li className="flex gap-x-1">
              <a href={paths.CONTACT} className="hover:underline underline-offset-2">9867247262</a>
              <span>|</span>
              <a href={paths.CONTACT_2} className="hover:underline underline-offset-2">9867247262</a>
            </li>
            <li>
              <a href={paths.CONTACT_2} className="hover:underline underline-offset-2">info@bhanshaexpress.com</a>
            </li>
          </ul>
        </div>


        <div className="col-span-full border-t-2 border-white flex  justify-between pt-3 px-5 text-lg flex-wrap">
          <span><h2>© 2024 Bhansha Express. All rights reserved.
          </h2></span>

          <div className="max-md:mx-auto">
            <span className="flex items-center gap-x-5">
              <NavLink
                to={'https://www.facebook.com/profile.php?id=61566833344153&mibextid=ZbWKwL'}
                target="_blank"
                className="flex items-center gap-x-2">
                <FaFacebook size={25} className="cursor-pointer" />
                <p className="cursor-pointer text-white">Facebook</p>
              </NavLink>
              <NavLink
                to={'/'}
                target="_blank"
                className="flex items-center gap-x-2">
                <FaInstagram size={25} className="cursor-pointer" />
                <p className="cursor-pointer text-white">Instagram</p>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
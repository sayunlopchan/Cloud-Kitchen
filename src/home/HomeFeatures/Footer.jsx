import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'
import { useNavigate } from "react-router-dom";
import { aboutus, facebook, faq, instagram, phoneNumber, privacypolicy, termsandconditions } from "../../links/link";



const Footer = () => {

  const nav = useNavigate()

  return (
    <div className='lg:h-[560px] text-white'>
      {/* footer-orange */}
      <div className='bg-colorOrange grid grid-cols-1 md:grid-cols-2 py-5 lg:gap-x-10'>
        <div className="flex items-center lg:gap-x-3   ">
          <span className="rounded-full overflow-hidden p-2">
            <FaLocationDot className="bg-colorOrange size-5 lg:size-10" />
          </span>
          <span>
            <h2 className="font-semibold text-lg">Location</h2>
            <p className="text-sm">Butwal,Bhairahawa,Tilottama</p>
          </span>
        </div>
        <div className="flex items-center lg:gap-x-3  ">
          <span className="rounded-full overflow-hidden p-2">
            <HiOutlineMail className="bg-colorOrange size-5 lg:size-10" />
          </span>
          <span>
            <h2 className="font-semibold text-lg">Email</h2>
            <p className="text-sm">Butwal,Bhairahawa,Tilottama</p>
          </span>
        </div>
      </div>
      {/* footer-orange */}





      <div className="bg-colorRed h-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-[5px] ">


        <div className="col-span-3 lg:col-span-3 p-5 space-y-5">
          <img src={logo} alt="logo" className="w-full bg-white p-2" />
          <p className="font-semibold">Bhansha Express Is a Online Food Ordering and Delivery Company Based In Butwal, Bhairahawa and Tilottama </p>
        </div>
        <div className="col-span-3 lg:col-span-3 lg:mx-auto p-5">
          <h2 className="font-bold text-2xl">Our Company</h2>
          <ul>
            <li onClick={() => nav(aboutus)} className="cursor-pointer">About Us</li>
            <li onClick={() => nav(faq)} className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact Us</li>
            <li onClick={() => nav(termsandconditions)} className="cursor-pointer">Terms & Conditions</li>
            <li onClick={() => nav(privacypolicy)} className="cursor-pointer">Privacy Policy</li>
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
          <ul>
            <li onClick={() => nav("/")}>+977-9999999999</li>
          </ul>
        </div>


        <div className="col-span-full border-t-2 border-white flex  justify-between pt-3 px-5 pb-20 text-lg flex-wrap">
          <span><h2>@2024,Bhansha Express</h2></span>

          <div className="max-md:mx-auto">
            <span className="flex items-center gap-x-5">
              <span className="flex items-center gap-x-2" onClick={() => nav(facebook)}>
                <FaFacebook size={25} className="cursor-pointer" />
                <p className="cursor-pointer">Facebook</p>
              </span>
              <span className="flex items-center gap-x-2" onClick={() => nav(instagram)}>
                <FaInstagram size={25} className="cursor-pointer" />
                <p className="cursor-pointer">Instagram</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
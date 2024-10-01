import Best_icon from "../../assets/icon/Best-sticker.png";
import OfferSlider from "../../components/slider/OfferSlider";
import DiscountSticker from "../../assets/icon/discount-sticker.png";




// svg
import SliderBg from "../../assets/icon/bg-dark.png";
import OfferSliderChild from "../../components/slider/OfferSliderChild";


function HomeBanner() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 mt-[-65px] transition-all duration-1000 px-10 lg:px-20 py-20">

      <div className="w-full h-full md:col-span-8  ">
        {/* Sticker */}
        <div className="flex gap-5 items-center lg:ml-10">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img src={Best_icon} alt="Best Icon" className="object-cover w-full h-full" />
          </div>
          <div className="shadow-sm px-5 lg:px-10 py-2 border-2 rounded-full text-main font-semibold text-sm">
            Order From Best
          </div>
        </div>
        {/* Sticker */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="font-bold text-3xl lg:text-[3.5rem] lg:leading-none">
            The Best In The <span className="text-colorRed">TOWN,</span>
            <br />
            Delivery
            <br />
            & Easy Takeout
          </h1>
          {/* Title */}

          {/* Para */}
          <p className="text-slate-600 lg:text-lg">
            <span className="font-bold text-lg">&#34;</span> Get your food delivered within 30 minutes to your location, or pick up
            <br />
            your order from a nearby kitchen.
            Fast, fresh, and from the best!
            <span className="font-bold text-lg">&#34;</span>
          </p>
          {/* Para */}
        </div>


        <div className="flex gap-5 mt-20 bg-green-500 max-md:hidden">
          <div>
            hello
          </div>
        </div>

      </div>

      <div className="md:col-span-4 relative">

        {/* discount offer card */}
        <div className="size-24 lg:size-36 shadow-lg absolute z-20 rounded-2xl bg-white border-2 left-0 lg:-left-20 top-20 py-5 px-2">
          <h2 className="text-sm lg:text-2xl font-bold text-red-500">10%</h2>
          <h3 className="text-sm lg:text-xl lg:font-semibold text-black">Discount for 2 Orders</h3>
          <img src={DiscountSticker} alt={DiscountSticker} className="size-14 absolute -top-6 -right-5" />
        </div>
        {/* discount offer card */}

        <img src={SliderBg} alt="background" className="h-full w-full " />
        <div className="absolute top-0 h-full">
          <OfferSlider />
        </div>

      </div>


      <div className="flex gap-5 mt-20 bg-green-500 sm:hidden">
        <OfferSliderChild />
      </div>


    </div >
  );
}

export default HomeBanner;

import Best_icon from "../../assets/icon/Best-sticker.png";
import OfferSlider from "../../components/slider/OfferSlider";
import DiscountSticker from "../../assets/icon/discount-sticker.png";

function HomeBanner() {
  return (
    <div className="w-full h-[85vh] grid grid-cols-12 mt-[-40px]">

      <div className="w-full h-full col-span-8 ">
        {/* Sticker */}
        <div className="flex gap-5 items-center ml-10">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img src={Best_icon} alt="Best Icon" className="object-cover w-full h-full" />
          </div>
          <div className="shadow-sm px-10 py-2 border-2 rounded-full text-main font-semibold">
            Order From Best
          </div>
        </div>
        {/* Sticker */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="font-bold text-[3.5rem] leading-none">
            The Best In The <span className="text-main">TOWN,</span>
            <br />
            Delivery
            <br />
            & Easy Takeout
          </h1>
          {/* Title */}

          {/* Para */}
          <p className="text-slate-600 text-lg">
            <span className="font-bold text-lg">&#34;</span> Get your food delivered within 30 minutes to your location, or pick up
            <br />
            your order from a nearby kitchen.
            Fast, fresh, and from the best!
            <span className="font-bold text-lg">&#34;</span>
          </p>
          {/* Para */}
        </div>


        <div className="flex gap-5 mt-20">
          <div>

          </div>
        </div>

      </div>

      <div className="w-full h-full col-span-4 relative flex justify-center">
        <div className="clipped-div" />
        <div className="mx-auto">
          <div className="size-36 shadow-lg absolute z-20 rounded-2xl bg-white border-2 -left-20 top-20 py-5 px-2" >
            <h2 className="text-2xl font-bold text-red-500">10%</h2>
            <h3 className="text-xl font-semibold text-black">Discount <br /> for 2 Orders</h3>
            <img src={DiscountSticker} alt={DiscountSticker} className="size-14 absolute  -top-6 -right-5" />
          </div>
          <OfferSlider />
        </div>
      </div>


    </div >
  );
}

export default HomeBanner;

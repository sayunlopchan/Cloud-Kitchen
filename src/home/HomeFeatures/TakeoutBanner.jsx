import bg_taxture from "../../assets/bg-texture/No-Time-To-Make-Breakfast.png";
import hand from "../../assets/bg-texture/hand.png";
import location from "../../assets/icon/location-pin-white.svg";
import cart from "../../assets/icon/cart-colorred.svg";
import { useNavigate } from "react-router-dom";

const TakeoutBanner = () => {
  const nav = useNavigate();

  return (
    <div className="h-[360px] lg:h-[500px] relative overflow-x-hidden ">
      <img
        src={bg_taxture}
        alt="No-Time-To-Make-Breakfast.png"
        className="object-cover w-full h-full absolute"
      />
      <img
        src={hand}
        alt="hand.png"
        className="
      absolute 
      -right-16 
      lg:-right-32 
      -top-0
      w-[300px]
      lg:w-[500px]"
      />

      <div
        className="
      h-full w-full
      absolute
      font-bold
      text-white
      pl-5
      lg:pl-20
      py-10
      space-y-5
      transition-all duration-500
      "
      >
        <div className="md:space-y-5 ">
          <h2 className="text-3xl md:text-[3rem] lg:text-[4rem] lg:leading-[3rem] transition-all duration-500">
            Fast & Easy
          </h2>
          <h3
            className="
            text-[3rem]
            leading-[50px]
            md:leading-none
            md:text-[4rem]
            lg:text-[6rem]

            transition-all duration-500
            "
          >
            Takeout!
          </h3>
          <h4 className="md:text-xl lg:text-2xl font-[500] transition-all duration-500">
            स्वादिलो परिकार, अब तपाईंसँगै
          </h4>
        </div>

        <div className="max-sm:pt-10 lg:pt-10 space-y-2 transition-all duration-500">
          <h2 className="lg:text-3xl transition-all duration-500">Available now at:</h2>

          <div className="flex gap-x-2 text-sm lg:text-2xl font-semibold transition-all duration-500">
            {/* Butwal */}
            <span className="flex items-center gap-x-1">
              <img
                src={location}
                alt="Bhansha Express pin location"
                className="size-6"
              />
              <span>Butwal</span>
            </span>
            {/* Butwal */}

            {/* Tilottama */}
            <span className="flex items-center gap-x-1">
              <img
                src={location}
                alt="Bhansha Express pin location"
                className="size-6"
              />
              <span>Tilottama</span>
            </span>
            {/* Tilottama */}


          </div>
        </div>

        <div
          onClick={() => nav("/the-best-bhansha-express-menu")}
          className="bg-white text-colorRed text-xl w-fit px-5 py-2 rounded-full flex gap-x-2 items-center cursor-pointer"
        >
          <span>
            <img src={cart} alt="cart_icon" className="size-10" />
          </span>
          <span>Order Now</span>
        </div>
      </div>
    </div>
  );
};

export default TakeoutBanner;

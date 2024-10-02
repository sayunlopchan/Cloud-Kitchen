import bg_taxture from "../../assets/bg-texture/No-Time-To-Make-Breakfast.png";
import hand from "../../assets/bg-texture/hand.png";
import location from "../../assets/icon/location-pin-white.svg";
import cart from "../../assets/icon/cart-colorred.svg";
import { useNavigate } from "react-router-dom";

const TakeoutBanner = () => {
  const nav = useNavigate();

  return (
    <div className="h-[360px] lg:h-[500px] relative">
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
      -top-5
      lg:-top-5
      w-[300px]
      lg:w-[500px]"
      />

      <div
        className="
      h-full w-full
      absolute
      font-bold
      text-white
      pl-10
      lg:pl-20
      pt-10
      space-y-5"
      >
        <div className="lg:space-y-12">
          <h2 className="text-3xl lg:text-[4.6rem] lg:leading-[3rem]">
            Fast & Easy
          </h2>
          <h3
            className="
            text-4xl
            lg:text-[6rem]
            "
          >
            Takeout!
          </h3>
          <h4 className="lg:text-3xl font-[500]">
            स्वादिलो परिकार, अब तपाईंसँगै
          </h4>
        </div>

        <div className="pt-10 space-y-2">
          <h2 className="lg:text-3xl">Available now at:</h2>

          <div className="flex gap-x-2 lg:text-2xl font-semibold">
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

            {/* Bhairahawa */}
            <span className="flex items-center gap-x-1">
              <img
                src={location}
                alt="Bhansha Express pin location"
                className="size-6"
              />
              <span>Bhairahawa</span>
            </span>
            {/* Bhairahawa */}
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

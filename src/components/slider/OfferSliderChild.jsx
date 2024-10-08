// components/OfferSliderChild.js
import menuData from "../../assets/Data/menu/alldata.js";



import { useSelector } from 'react-redux';
import active_cardBase from "../../assets/icon/active.svg";
import notactive_cardBase from "../../assets/icon/not-active.svg";
import TextLimit from "../TextLimit.jsx";
import { useNavigate } from "react-router-dom";
import { DETAIL_PAGE } from "../../Routes/Path.js";

const OfferSliderChild = () => {


  // nav
  const nav = useNavigate();


  const activeImage = useSelector((state) => state.offer.activeImage); // Get active image from Redux

  // Define the cards data with images and names from OfferSlideData
  const cardsData = menuData.OfferSlideData.map((offer) => ({
    id: offer.id,
    img: offer.img,
    name: offer.title,
  }));

  return (
    <div className="flex justify-around w-full gap-x-2">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="relative flex justify-center cursor-pointer" onClick={() => nav(`${DETAIL_PAGE.replace(':id', card.id)}`)}>

          <div
            className={`absolute size-[60px] sm:size-[80px] md:size-[85px] lg:size-[100px] rounded-full overflow-hidden border-2 shadow-md transition-all duration-500 bg-white ${card.img === activeImage ? 'border-colorRed border-2 shadow-colorRed mb-5' : 'border-black'
              }`}
          >
            <img src={card.img} alt={`Card ${card.id}`} className="object-cover size-full" />
          </div>
          <h2 className={`size-fit absolute top-[70px] md:top-[85px] lg:top-28 transition-all duration-300 ${card.img === activeImage ? 'text-colorRed' : ''}`}>
            <TextLimit text={card.name} limit={18} />
          </h2>
          <img
            src={card.img === activeImage ? active_cardBase : notactive_cardBase}
            alt="card-base"
            className="w-full h-28 sm:w-[200px] md:w-full lg:w-[12.5rem] lg:h-40 "
          />
        </div>
      ))}
    </div>
  );
};

export default OfferSliderChild;

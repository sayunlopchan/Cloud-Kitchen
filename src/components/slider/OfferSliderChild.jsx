// components/OfferSliderChild.js
import menuData from "../../assets/Data/menu/alldata.js";



import { useSelector } from 'react-redux';

import active_cardBase from "../../assets/icon/childOffer_base.svg";
import notactive_cardBase from "../../assets/icon/active.svg";

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
    description: offer.description,
    discount: offer.discountPercentage
  }));

  return (
    <div className="flex justify-around w-full gap-x-2">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="relative flex justify-center cursor-pointer" onClick={() => nav(`${DETAIL_PAGE.replace(':id', card.id)}`)}>

          <div
            className={`absolute 
               size-[80px] 
               sm:size-[90px] 
               md:size-[100px] 
               lg:size-[120px]
               
               bg-orange-500
                  rounded-full overflow-hidden border-2 shadow-md transition-all duration-500  z-30 ${card.img === activeImage ? 'border-white border-2 shadow-colorRed mb-5' : 'border-colorRed'
              }`}
          >
            <img src={card.img} alt={`Card ${card.id}`} className="object-cover size-full" />
          </div>


          <div className="relative">
            <img
              src={card.img === activeImage ? active_cardBase : notactive_cardBase}
              alt="card-base"
              className={`
              w-full h-28
              sm:w-[200px]
              md:w-full
              lg:w-[12.5rem] lg:h-40
              transition-all duration-500
              ${card.img === activeImage ? 'opacity-100' : 'opacity-0'}
              `}
            />
            <img
              src={card.img === activeImage ? active_cardBase : notactive_cardBase}
              alt="card-base"
              className={`
              w-full h-28
              sm:w-[200px]
              md:w-full
              lg:w-[12.5rem] lg:h-40
              transition-all duration-500
              absolute top-0 -z-0
              ${card.img === activeImage ? 'opacity-0' : 'opacity-100'}
              `}
            />


            <h2 className={`
              size-fit transition-all duration-300
              text-sm
              max-md:hidden
              md:text-base
              mx-auto
              px-2
              sm:px-2 sm:py-2 m-1
              lg:px-3 lg:py-1 rounded-full
              ${card.img === activeImage ? 'text-white bg-orange-600' : 'border-2 border-colorOrange'}`}>
              <TextLimit text={card.name} limit={14} />
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferSliderChild;
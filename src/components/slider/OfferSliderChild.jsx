import { useNavigate } from "react-router-dom";
import active_cardBase from "../../assets/icon/active.svg";
import notactive_cardBase from "../../assets/icon/not-active.svg";
import img1 from "../../assets/img/foodItems/B.chilly momo.png";
import img2 from "../../assets/img/foodItems/B.chilly momo.png";
import img3 from "../../assets/img/foodItems/B.chilly momo.png";

const OfferSliderChild = ({ activeIndex, activeImage }) => {

  const nav = useNavigate();

  const cards = [
    { img: img1, title: 'Momo' },
    { img: img2, title: 'Breakfast' },
    { img: img3, title: 'Chowmin' },
  ];

  return (
    <div className="flex justify-around w-full gap-x-2">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => nav()}
          className="relative flex justify-center">
          <div className={`absolute size-[60px] sm:size-[80px] md:size-[85px] lg:size-[100px] rounded-full overflow-hidden ${index === activeIndex - 1 ? 'border-colorRed border-2 shadow-md shadow-colorRed' : ''}`}>
            <img src={activeIndex - 1 === index ? activeImage : card.img} alt="img" />
          </div>
          <h2 className="size-fit absolute top-28">{card.title}</h2>
          <img
            src={index === activeIndex - 1 ? active_cardBase : notactive_cardBase}
            alt="card-base"
            className="w-full h-28 sm:w-[200px] md:w-full lg:w-[12.5rem] lg:h-40"
          />
        </div>
      ))}
    </div>
  );
};

export default OfferSliderChild;

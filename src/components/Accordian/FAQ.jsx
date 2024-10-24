import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Bhansha Express?",
      answer: "Bhansha Express is a cloud kitchen restaurant based in Butwal, Tilottama, Nepal, offering a variety of quick and tasty food options. We provide both home delivery and takeout services, available 24/7.",
    },
    {
      question: "What areas do you deliver to?",
      answer: "We offer free delivery services in Butwal and Tilottama areas.",
    },
    {
      question: "What are your hours of operation?",
      answer: "We operate 24/7, meaning you can order food anytime!",
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website by browsing the menu, selecting your items, and providing delivery details. You can also contact us directly to place an order.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We currently accept cash on delivery (COD) and mobile banking payments to our given address.",
    },
    {
      question: "Is there a minimum order amount for delivery?",
      answer: "There is no minimum order amount for delivery. We provide free delivery regardless of the order size.",
    },
    {
      question: "How long does delivery take?",
      answer: "Our delivery time depends on your location, but we strive to deliver your food as quickly as possible, typically within 30-60 minutes.",
    },
    {
      question: "Do you offer takeout services?",
      answer: "Yes, customers can choose takeout as an option while placing their order online or via phone.",
    },
    {
      question: "How can I contact Bhansha Express?",
      answer: "You can contact us through our website or call us directly. Our contact information is available on the site.",
    },
    {
      question: "Do you offer any promotions or discounts?",
      answer: "Yes, we offer promotions and discounts during big events or festival periods. Keep an eye on our website or social media pages for updates during these times!",
    },
  ];

  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleFAQ = (idx) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <div className="p-10 space-y-5 bg-cover bg-center overflow-hidden">
      <h2 className="font-bold text-2xl py-5">FAQs for Parents</h2>

      {faqData.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 px-4 rounded-lg w-[80vw] cursor-pointer transition-all duration-500 ${openFAQIndex === idx ? "bg-orange-500" : "text-black"}`}
          onClick={() => handleFAQ(idx)}
        >
          <div className="flex justify-between items-center">
            <h2
              className={`font-semibold transition-all duration-500 py-1 ${openFAQIndex === idx ? 'text-white' : ''}`}
            >
              {item.question}
            </h2>
            <span className={`transition-all duration-500 ${openFAQIndex === idx ? '-rotate-180 text-white' : ''}`}>
              <FaChevronDown />
            </span>
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${openFAQIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className={`pt-4 text-white transition-all duration-500 overflow-hidden`}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

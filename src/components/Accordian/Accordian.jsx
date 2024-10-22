import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// FAQ data array
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
  }

];

// Icon component for toggling accordion
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// Accordion component that loops through the FAQ data
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {faqData.map((faq, index) => (
        <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
          <AccordionHeader className="text-sm sm:text-sm lg:text-lg xl:text-xl" onClick={() => handleOpen(index + 1)}>
            {faq.question}
          </AccordionHeader>
          <AccordionBody>
            {faq.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

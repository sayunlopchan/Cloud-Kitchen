import React, { useState, useRef, useEffect } from 'react';

const termsAndConditions = [
  {
    title: "General Information",
    content: "Bhasnha Express is a cloud kitchen restaurant providing food delivery services within Butwal and Tilottama, Nepal. Our services are available through our website, mobile app, or phone orders."
  },
  {
    title: "Ordering",
    subsections: [
      {
        subtitle: "Accuracy of Information",
        content: "You are responsible for providing accurate details when placing an order, including delivery address, contact information, and food preferences."
      },
      {
        subtitle: "Order Confirmation",
        content: "Once an order is placed, you will receive a confirmation through your provided contact details. Orders cannot be modified or canceled after confirmation unless agreed upon by Bhasnha Express."
      },
      {
        subtitle: "Delivery Areas",
        content: "We provide free delivery within Butwal and Tilottama. Delivery outside these areas may not be available or may incur additional charges."
      }
    ]
  },
  {
    title: "Payment",
    subsections: [
      {
        subtitle: "Cash on Delivery",
        content: "Payment is required upon delivery unless prepaid."
      },
      {
        subtitle: "Mobile Banking",
        content: "You may also choose to pay via mobile banking. The payment should be sent to the account details provided at the time of the order."
      },
      {
        subtitle: "Currency",
        content: "All prices are listed in Nepali Rupees 'NPR'."
      }
    ]
  },
  {
    title: "Delivery and Timing",
    subsections: [
      {
        subtitle: "Delivery Times",
        content: "We strive to deliver your order promptly, but delivery times may vary based on weather, traffic, or other unforeseen circumstances."
      },
      {
        subtitle: "Missed Deliveries",
        content: "If you are unavailable to receive your order, please inform us immediately. Failure to do so may result in order cancellation, and charges may still apply."
      }
    ]
  },
  {
    title: "Food Quality and Safety",
    content: "We take pride in the quality and freshness of our meals. However, if there are any issues with your order, such as incorrect or damaged items, please contact us within 30 minutes of delivery. We will assess and, if necessary, provide a replacement or refund. Bhasnha Express is not liable for allergic reactions or other health-related issues arising from food consumption. It is your responsibility to inform us of any allergies or dietary restrictions."
  },
  {
    title: "Returns and Refunds",
    subsections: [
      {
        subtitle: "No Return Policy",
        content: "Due to the nature of food items, we do not accept returns. If your order is incorrect or unsatisfactory, we will review the complaint and may offer a replacement or refund at our discretion."
      },
      {
        subtitle: "Refunds",
        content: "Refunds will be processed only if Bhasnha Express is unable to fulfill your order due to unavoidable circumstances or if the order is canceled by us."
      }
    ]
  },
  {
    title: "Customer Conduct",
    content: "Customers are expected to behave respectfully towards our staff. Bhasnha Express reserves the right to refuse service to any customer exhibiting inappropriate behavior or violating these terms."
  },
  {
    title: "Modifications to Service",
    content: "Bhasnha Express reserves the right to modify, suspend, or terminate any aspect of our service, including delivery areas, payment methods, or menu items, at any time without prior notice."
  },
  {
    title: "Privacy Policy",
    content: "Your personal information, including name, address, and contact details, will be used solely for the purpose of fulfilling your order and improving our service. We do not share your information with third parties without your consent."
  },
  {
    title: "Governing Law",
    content: "These terms and conditions are governed by the laws of Nepal. Any disputes arising from the use of Bhasnha Express services will be subject to the jurisdiction of Nepalese courts."
  }
];

const TermsAndConditions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState(null);
  const contentRefs = useRef([]);

  // Initialize refs for each section and subsection
  useEffect(() => {
    contentRefs.current = termsAndConditions.map((_, index) => ({
      ref: React.createRef(),
      subRefs: termsAndConditions[index].subsections
        ? termsAndConditions[index].subsections.map(() => React.createRef())
        : [],
    }));
  }, []);

  const handleSelect = (index, subIndex = null) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex);

    // Scroll to the main section or subsection
    if (subIndex !== null && contentRefs.current[index]?.subRefs[subIndex]) {
      contentRefs.current[index].subRefs[subIndex].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (contentRefs.current[index]?.ref.current) {
      contentRefs.current[index].ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div className="grid grid-cols-12 w-full h-screen">
      {/* Sidebar - Titles */}
      <section className="border-r-2 col-span-3 lg:p-4 ">
        <ul className="">
          {termsAndConditions.map((term, index) => (
            <li
              key={index}
              className={`transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer p-2 ${selectedIndex === index && selectedSubIndex === null ? 'font-bold bg-colorRed text-white' : 'hover:ml-1 md:hover:ml-2'}`}
              onClick={() => handleSelect(index)}
            >
              {term.title}
            </li>
          ))}
        </ul>
      </section>

      {/* Content Section */}
      <section className="col-span-9 h-full overflow-scroll">
        <div className='pb-[10000px]'>


          {termsAndConditions.map((term, index) => (

            <div key={index} className={` mb-4 p-2 ${selectedIndex === index && selectedSubIndex === null ? 'transition-all duration-300 border-b-2 bg-gray-200' : ''}`}>
              <div className={`mb-4`}>
                <h2
                  ref={contentRefs.current[index]?.ref}
                  className={`text-lg lg:text-2xl font-semibold mb-4 ${selectedIndex === index && selectedSubIndex === null ? 'border-colorRed border-b-2 w-fit text-colorRed' : ''}`}
                  onClick={() => handleSelect(index)}
                >
                  {term.title}
                </h2>
                <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${selectedIndex === index && selectedSubIndex === null ? 'transition-all duration-300 pl-2' : ''}`}>
                  {term.content}
                </p>

                {/* If subsections exist, render them */}
                {term.subsections && (
                  <div className="mt-4">
                    {term.subsections.map((subsection, subIndex) => (
                      <div
                        key={subIndex}
                        ref={contentRefs.current[index]?.subRefs[subIndex]}
                        className={`mb-4 p-2 cursor-pointer ${selectedIndex === index && selectedSubIndex === subIndex ? 'bg-colorRed text-white' : ''}`}
                        onClick={() => handleSelect(index, subIndex)}
                      >
                        <h3 className="text-lg lg:text-xl font-medium">-{subsection.subtitle}</h3>
                        <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${selectedIndex === index && selectedSubIndex === null ? 'transition-all duration-300 pl-2' : ''}`}>{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))
          }

        </div >
      </section >
    </div >
  );
};

export default TermsAndConditions;

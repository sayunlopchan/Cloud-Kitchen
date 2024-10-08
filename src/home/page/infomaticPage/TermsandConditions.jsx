import { EMAIL } from "../../../Routes/Path"

const TermsandConditions = () => {
  return (
    <div className="space-y-5 px-10 my-10">
      <h2 className='text-center underline underline-offset-4 text-xl font-bold'>Terms and Conditions/Bhansha Express</h2>

      <ul className="space-y-5">
        <li><strong className="text-lg">Terms and Conditions</strong></li>
        <li>Welcome to Bhasnha Express! These Terms and Conditions outline the rules and regulations for using our services. By accessing or placing an order with Bhasnha Express, you accept these terms. Please read them carefully.</li>
      </ul>

      <ul className="space-y-5">
        <li className="space-y-2">
          <li><strong className="text-lg">1. General Information</strong></li>
          <li>Bhasnha Express is a cloud kitchen restaurant providing food delivery services within Butwal and Tilottama, Nepal. Our services are available through our website, mobile app, or phone orders.</li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">2. Ordering</strong></li>
          <li><strong className="text-lg">Accuracy of Information:</strong><span> You are responsible for providing accurate details when placing an order, including delivery address, contact information, and food preferences.</span></li>
          <li><strong className="text-lg">Order Confirmation:</strong><span> Once an order is placed, you will receive a confirmation through your provided contact details. Orders cannot be modified or canceled after confirmation unless agreed upon by Bhasnha Express.</span></li>
          <li><strong className="text-lg">Delivery Areas:</strong><span> We provide free delivery within Butwal and Tilottama. Delivery outside these areas may not be available or may incur additional charges.</span></li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">3. Payment</strong></li>
          <li><strong className="text-lg">Cash on Delivery:</strong><span> Payment is required upon delivery unless prepaid.</span></li>
          <li><strong className="text-lg">Mobile Banking:</strong><span> You may also choose to pay via mobile banking. The payment should be sent to the account details provided at the time of the order.</span></li>
          <li><strong className="text-lg">Currency:</strong><span> All prices are listed in Nepali Rupees &quot;NPR&quot;.</span></li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">4. Delivery and Timing</strong></li>
          <li><strong className="text-lg">Delivery Times:</strong><span> We strive to deliver your order promptly, but delivery times may vary based on weather, traffic, or other unforeseen circumstances.</span></li>
          <li><strong className="text-lg">Missed Deliveries:</strong><span> If you are unavailable to receive your order, please inform us immediately. Failure to do so may result in order cancellation, and charges may still apply.</span></li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">5. Food Quality and Safety</strong></li>
          <li>We take pride in the quality and freshness of our meals. However, if there are any issues with your order, such as incorrect or damaged items, please contact us within 30 minutes of delivery. We will assess and, if necessary, provide a replacement or refund.</li>
          <li>Bhasnha Express is not liable for allergic reactions or other health-related issues arising from food consumption. It is your responsibility to inform us of any allergies or dietary restrictions.</li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">6. Returns and Refunds</strong></li>
          <li><strong className="text-lg">No Return Policy: </strong><span> Due to the nature of food items, we do not accept returns. If your order is incorrect or unsatisfactory, we will review the complaint and may offer a replacement or refund at our discretion.</span></li>
          <li><strong className="text-lg">Refunds:</strong><span> Refunds will be processed only if Bhasnha Express is unable to fulfill your order due to unavoidable circumstances or if the order is canceled by us.</span></li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">7. Customer Conduct</strong></li>
          <li>Customers are expected to behave respectfully towards our staff. Bhasnha Express reserves the right to refuse service to any customer exhibiting inappropriate behavior or violating these terms.</li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">8. Modifications to Service</strong></li>
          <li>Bhasnha Express reserves the right to modify, suspend, or terminate any aspect of our service, including delivery areas, payment methods, or menu items, at any time without prior notice.</li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">9. Privacy Policy</strong></li>
          <li>Your personal information, including name, address, and contact details, will be used solely for the purpose of fulfilling your order and improving our service. We do not share your information with third parties without your consent.</li>
        </li>

        <li className="space-y-2">
          <li><strong className="text-lg">10. Governing Law</strong></li>
          <li>These terms and conditions are governed by the laws of Nepal. Any disputes arising from the use of Bhasnha Express services will be subject to the jurisdiction of Nepalese courts.</li>
        </li>
      </ul>

      <ul className="space-y-2">
        <li><strong className="text-lg">Contact Us</strong></li>
        <li>
          If you have any questions or concerns regarding these Terms and Conditions, please contact us at
          <span
            className="underline underline-offset-2 cursor-pointer"
            onClick={() => window.location.href = EMAIL}>
            info@bhanshaexpress.com
          </span>.
        </li>
      </ul>
    </div>
  )
}

export default TermsandConditions;

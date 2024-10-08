import { useNavigate } from "react-router-dom";
import { CONTACT, CONTACT_2, EMAIL } from "../../../Routes/Path";

const ContactPage = () => {

  const nav = useNavigate();


  return (
    <div className="my-10 mx-10 space-y-10">

      <h2 className='text-center underline underline-offset-4 text-xl font-bold'>Contact Us/Bhansha Express</h2>

      <div className="space-y-10">
        <ul>
          <li><strong>BHANSHA EXPRESS</strong></li>
          <li>
            <strong>Location: </strong>
            <span className="text-secondaryText">
              <span onClick={() => nav('')}>Butwal</span>,
              <span onClick={() => nav('')}>Tilottama</span>,Nepal
            </span>
          </li>
          <li className="space-x-2">
            <strong>Phone: </strong>
            <span
              className="text-secondaryText"
              onClick={() => window.location.href = CONTACT}>
              +9779867247262
            </span>
            <span>|</span>
            <span
              className="text-secondaryText"
              onClick={() => window.location.href = CONTACT_2}>
              +9779806982238
            </span>
          </li>
          <li>
            <strong>Email: </strong>
            <span
              className="text-secondaryText "
              onClick={() => window.location.href = EMAIL}>
              info@bhanshaexpress.com
            </span>
          </li>
          <li>
            <strong>Website: </strong>
            <span
              className="text-secondaryText">
              www.bhanshaexpress.com
            </span>
          </li>
        </ul>
        <ul>
          <li><strong>Follow Us</strong></li>
          <li>
            <strong>Facebook: </strong>
            <span className="text-secondaryText">
              @BhasnhaExpress</span>
          </li>
          <li>
            <strong>Instagram: </strong>
            <span
              className="text-secondaryText">
              @BhasnhaExpress
            </span>
          </li>

        </ul>
        <ul>
          <li><strong>Operating Hours</strong></li>
          <li><strong>Saturday to Sunday: </strong><span className="text-secondaryText">24/7</span></li>
        </ul>
        <ul>
          <li>For any inquiries, feel free to contact us via phone or email. We&rsquo;re here to assist you with your orders and any questions you may have!</li>
        </ul>
      </div>
    </div >
  )
}

export default ContactPage;

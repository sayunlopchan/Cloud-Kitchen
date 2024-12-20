import Lottie from "lottie-react";
import SuccessAnimation from "../../assets/animation/Email_succes.json";
import ErrorAnimation from "../../assets/animation/Email_error.json";

const Contact_Dialog = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="h-[370px] w-full md:w-[360px] rounded-lg overflow-hidden bg-white mx-5 lg:mx-0">
        <div className="w-full h-50 pt-3 pb-5">
          {isSuccess ? (
            <div className="w-full h-36 rounded-t-lg flex justify-center items-center">
              <Lottie
                animationData={SuccessAnimation}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ) : (
            <div className="w-full h-36 rounded-t-lg flex justify-center items-center">
              <Lottie
                animationData={ErrorAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
        </div>
        <div className="w-full text-center p-3 text-gray-600">
          {isSuccess ? (
            <span>
              Success! Your message has been sent successfully.<br />
              Thank you for contacting us!
            </span>
          ) : (
            <span>
              Oops! There was an issue processing your message.<br />
              Please try again or contact support if the problem persists.
            </span>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="rounded-md px-10 py-2 bg-black text-white transition-all duration-300 hover:scale-90">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Contact_Dialog;

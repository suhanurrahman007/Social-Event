import { DefaultStepper } from "./Stepper";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GiPartyFlags } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const EventPlanning = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
    return (
      <div className="px-5 py-5 md:px-16 lg:px-24 text-center space-y-14">
        <h2 className="text-3xl md:text-5xl mt-7">
          <span className="text-orange-600">Hello!</span> We Are an Event Planning Agency
        </h2>
        <p className="text-md text-gray-700">
          As the premier event planning company in New York City, we know that
          it’s not <br /> “one size fits all”. Each event and client is unique
          and we believe our services should <br /> be as well. We know that it
          should be “Can I hire a planner?” not “Can I afford one?”.
        </p>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex justify-center items-center space-y-4 flex-col" data-aos="zoom-in-down">
              <div className="text-6xl text-orange-900">
                <IoHomeOutline></IoHomeOutline>
              </div>
              <h2 className="text-xl">
                Find the perfect <br /> venue for free
              </h2>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col" data-aos="zoom-in-down">
              <div className="text-6xl text-orange-900">
                <FiPhoneCall></FiPhoneCall>
              </div>
              <h2 className="text-xl">
                Connect with the <br /> best vendor
              </h2>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col" data-aos="zoom-in-down">
              <div className="text-6xl text-orange-900">
                <FaEnvelopeOpenText></FaEnvelopeOpenText>
              </div>
              <h2 className="text-xl">
                Let us help you <br /> with the event
              </h2>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col" data-aos="zoom-in-down">
              <div className="text-6xl text-orange-900">
                <GiPartyFlags></GiPartyFlags>
              </div>
              <h2 className="text-xl">
                Enjoy the party <br /> with your friends
              </h2>
            </div>
          </div>
          <div className="md:mx-16">
            <DefaultStepper></DefaultStepper>
          </div>
        </div>
      </div>
    );
};

export default EventPlanning;
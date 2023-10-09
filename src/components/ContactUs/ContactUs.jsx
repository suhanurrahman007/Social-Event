import { MdOutlineLocationOn, MdOutlineAssessment } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" grid items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-14 bg-[#f5f5f6]  md:px-16 lg:px-24">
      <div className="card rounded-3xl bg-white shadow-xl" data-aos="zoom-out">
        <figure className="px-10 pt-10">
          <MdOutlineLocationOn className="text-6xl text-orange-900"></MdOutlineLocationOn>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Postal Address</h2>
          <p className="text-sm text-gray-600">
            Unica Event Agency <br />
            85 Fontina Ave <br /> Ottawa, ON K1S 0T7
          </p>
        </div>
      </div>

      <div className="card rounded-3xl bg-white shadow-xl" data-aos="zoom-out">
        <figure className="px-10 pt-10">
          <AiOutlineClockCircle className="text-6xl text-orange-900"></AiOutlineClockCircle>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Phone & E-mail</h2>
          <p className="text-sm text-gray-600">
            Phone: 1-800-64-38 <br />
            Fax: 1-800-64-39 <br /> <span className="text-orange-900">office@fable.com</span>
          </p>
        </div>
      </div>

      <div className="card rounded-3xl bg-white shadow-xl" data-aos="zoom-out">
        <figure className="px-10 pt-10">
          <BiSolidPhoneCall className="text-6xl text-orange-900"></BiSolidPhoneCall>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Open Hours</h2>
          <p className="text-sm text-gray-600">
            Monday – Friday
            <br />
            8.00 am – 5.00 pm <br /> Weekend Closed
          </p>
        </div>
      </div>

      <div className="card rounded-3xl bg-white shadow-xl" data-aos="zoom-out">
        <figure className="px-10 pt-10">
          <MdOutlineAssessment className="text-6xl text-orange-900"></MdOutlineAssessment>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Sessions</h2>
          <p className="text-sm text-gray-600">
            Mornings, 8 am – 12 noon <br />
            Afternoons, 1 pm – 5 pm <br /> Full Day, 8 am – 5 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

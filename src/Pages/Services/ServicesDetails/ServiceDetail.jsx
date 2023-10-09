import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";


const ServiceDetail = ({ service }) => {
    const { image, category, description } = service;

  return (
    <div className="mt-10">
      <div className="px-5 md:px-16 lg:px-24 grid lg:grid-cols-3 gap-4 lg:gap-20">
        <div className="col-span-2">
          <div className="card h-80  bg-base-100 shadow-xl image-full">
            <figure>
              <img className="w-full" src={image} alt="Shoes" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl">{category}</h2>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mt-10 text-justify">{description}</p>
            <p className="text-gray-700 mt-10 text-justify">
              A gathering or activity where individuals come together primarily
              for personal, often leisurely, reasons rather than professional or
              obligatory ones. These events are organized with the intent to
              facilitate interaction, enjoyment, entertainment, or celebration
              among attendees. Social events can vary in scale from small
              gatherings like family dinners and coffee meets to large ones like
              weddings, festivals, and public parades. These events can be
              formal or informal and might be organized for a variety of
              purposes, such as celebrating milestones (birthdays,
              anniversaries), observing cultural or religious occasions,
              facilitating community interaction, or simply for entertainment.
              They are characterized by a shared experience among participants
              and often include activities, food, music, and other forms of
              entertainment.
            </p>
          </div>
        </div>
        <div className="col-span-1 space-y-5">
          <div className="flex justify-center mb-10 items-center">
              <GoogleMap></GoogleMap>
          </div>
          <div className="space-y-14">
            <div className="flex gap-5">
              <div className="text-6xl text-orange-900">
                <FaRegClock></FaRegClock>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Open Hours</h2>
                <p className="text-sm font-semibold text-gray-700">
                  Monday – Friday 8.00 am – 5.00 pm <br />
                  Weekend Closed
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-6xl text-orange-900">
                <div>
                  {" "}
                  <FiPhoneCall></FiPhoneCall>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Phone & E-mail</h2>
                <p className="text-sm font-semibold text-gray-700">
                  Phone: 1-800-64-38
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  Fax: 1-800-64-39
                </p>
                <a className="text-sm font-semibold text-gray-500" href="#">
                  office@fable.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
ServiceDetail.propTypes = {
  service: PropTypes.object,
};
import PropTypes from "prop-types";
import Service from "./Service";
const Services = ({ services }) => {
  return (
    <div className="bg-gray-200">
      <div className="p-9 space-y-5">
        <h2 className="text-center text-3xl font-extrabold">
          It’s simple. You have an event to plan and <br /> we have{" "}
          <span className="text-orange-900">the solutions</span>
        </h2>
        <p className="text-sm text-gray-700 text-center">
          HERE IS HOW WE CAN HELP YOU
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-5 md:px-16 lg:px-24">
        {services?.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

Services.propTypes = {
  services: PropTypes.array,
};
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = ({ service }) => {
  const {id, image, category, description, price } = service;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="card bg-base-100 shadow-sm"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl h-36 w-full" />
      </figure>

      <div className="card-body items-center text-center h-52">
        <h2 className="card-title">{category}</h2>
        {description.length > 50 ? (
          <p className="text-sm text-gray-700">{description.slice(0, 50)}...</p>
        ) : (
          <p className="text-sm text-gray-700">{description}</p>
        )}
        <p className="text-sm text-gray-700">
          Price : <span className="font-bold text-black">${price}</span>
        </p>
        <Link
          to={`/services/${id}`}
          className="btn w-40 text-xs text-white bg-[#2c1e6d] hover:bg-[#140d32]"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Service;

Service.propTypes = {
  service: PropTypes.object,
};

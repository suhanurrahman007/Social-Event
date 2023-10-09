import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GalleryCard = ({ galley }) => {
  const { image } = galley;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <div
      className="relative h-60 overflow-hidden"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img
        className="h-60 w-full transition duration-500 ease-in-out transform hover:scale-105"
        src={image}
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <p className="text-white font-extrabold text-2xl p-4 rounded-full bg-orange-600 hover:bg-orange-900">
          <BsPlus></BsPlus>
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;

GalleryCard.propTypes = {
  galley: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};

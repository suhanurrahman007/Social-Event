import { Carousel, Typography } from "@material-tailwind/react";
import coverOne from "../../../assets/cover1.avif";
import coverTwo from "../../../assets/cover2.jpg";
import coverThree from "../../../assets/cover3.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="h-screen">
      <Carousel className="rounded-sm">
        <div className="relative h-full w-full">
          <img
            src={coverOne}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4" data-aos="fade-down">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 lg:ml-56 lg:text-left text-lg md:text-2xl lg:text-5xl"
              >
                <span className="text-orange-700">We create</span>
                <br /> You <br />
                celebrate
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 lg:mb-12 lg:px-16 text-xs md:text-sm opacity-80"
              >
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy, and it takes skills (and time) to make it all look
                easy-going
              </Typography>
              <div className="flex justify-center gap-2">
                <button className="btn bg-orange-700 text-white rounded-full hover:text-black hover:bg-orange-900 btn-sm">
                  ONLINE REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={coverTwo}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div
              className="w-3/4 text-center md:w-2/4"
              data-aos-easing="linear"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 lg:ml-56 lg:text-left text-lg md:text-2xl lg:text-5xl"
              >
                <span className="text-orange-700">From set up</span>
                <br /> To <br />
                clean up
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 lg:mb-12 lg:px-16 text-xs md:text-sm opacity-80"
              >
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy, and it takes skills (and time) to make it all look
                easy-going
              </Typography>
              <div className="flex justify-center gap-2">
                <button className="btn bg-orange-700 text-white rounded-full hover:text-black hover:bg-orange-900 btn-sm">
                  ONLINE REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={coverThree}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div
              className="w-3/4 text-center md:w-2/4"
              data-aos-duration="1500"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 lg:ml-56 lg:text-left text-lg md:text-2xl lg:text-5xl"
              >
                <span className="text-orange-700">Let us help</span>
                <br /> You <br />
                create
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 lg:mb-12 lg:px-16 text-xs md:text-sm opacity-80"
              >
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy, and it takes skills (and time) to make it all look
                easy-going
              </Typography>
              <div className="flex justify-center gap-2">
                <Link to={"/online"}>
                  <button className="btn bg-orange-700 text-white rounded-full hover:text-black hover:bg-orange-900 btn-sm">
                    ONLINE REQUEST
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;

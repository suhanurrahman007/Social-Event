import teamOne from "../../../assets/team-1-600x600.jpg";
import teamTwo from "../../../assets/team-2-600x600.jpg";
import teamThree from "../../../assets/team-3-600x600.jpg";


import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
const OurStaffCard = () => {
  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-28">
      <div className="card bg-[#f5f5f6]">
        <div className="avatar">
          <div className="w-40 transition-all hover:scale-110 mx-auto rounded-full">
            <img className="" src={teamOne} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className=" text-2xl">Jessica Mann</h2>
          <p className="text-xs text-gray-700">BANQUET MANAGER</p>
          <div className="card-actions text-orange-900 text-xl space-x-1">
            <FaLinkedinIn></FaLinkedinIn>
            <FaFacebookF></FaFacebookF>
            <FaGithub></FaGithub>
          </div>
        </div>
      </div>
      <div className="card bg-[#f5f5f6]">
        <div className="avatar">
          <div className="w-40 transition-all hover:scale-110 mx-auto rounded-full">
            <img className="" src={teamTwo} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className=" text-2xl">
            Betty Bass
          </h2>
          <p className="text-xs text-gray-700">DECORATOR</p>
          <div className="card-actions text-orange-900 text-xl space-x-1">
            <FaLinkedinIn></FaLinkedinIn>
            <FaFacebookF></FaFacebookF>
            <FaGithub></FaGithub>
          </div>
        </div>
      </div>
      <div className="card bg-[#f5f5f6]">
        <div className="avatar">
          <div className="w-40 transition-all hover:scale-110 mx-auto rounded-full">
            <img className="" src={teamThree} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className=" text-2xl">Sabrina Roberts</h2>
          <p className="text-xs text-gray-700">EVENT PLANNER</p>
          <div className="card-actions text-orange-900 text-xl space-x-1">
            <FaLinkedinIn></FaLinkedinIn>
            <FaFacebookF></FaFacebookF>
            <FaGithub></FaGithub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStaffCard;

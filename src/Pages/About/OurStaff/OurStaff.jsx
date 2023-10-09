
import Marquee from "react-fast-marquee";
import OurStaffCard from "./OurStaffCard";

const OurStaff = () => {
    return (
      <div className="px-5 py-5 md:px-16 lg:px-24 text-center bg-[#f5f5f6] space-x-4">
        <h2 className="text-4xl font-bold">Our Staff</h2>
        <p className="text-sm text-gray-700">MEET OUR BEST TEAM</p>

        <Marquee>
          <OurStaffCard></OurStaffCard>
        </Marquee>
      </div>
    );
};

export default OurStaff;
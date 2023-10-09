import { BsCheck2Circle } from "react-icons/bs";
import images  from "../../../assets/Depositphotos_11153356_original1.webp"
const PartialList = () => {
  return (
    <div className="grid bg-[#f5f5f6] grid-cols-1 lg:grid-cols-2 px-5 md:px-16 lg:px-28 gap-5">
      <div className="space-y-5">
        <h2 className="text-3xl text-justify py-10 font-bold">
          A partial list of our services includes:
        </h2>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">Scouting a venue</h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">Scouting a venue</h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">Developing a theme</h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">
            Coordinating paper goods with a stationery vendor
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">
            Organizing a tasting with up to three caterers
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">
            Recommending up to three florists (if necessary)
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">
            Recommending up to three photographers (if necessary)
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">Managing your guest list </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">Assisting with rentals </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-700">
            Depending on the wishes, being on-site or on-call during
          </h2>
        </div>
      </div>
      <div>
        <img className="w-full" src={images} alt="" />
      </div>
    </div>
  );
};

export default PartialList;

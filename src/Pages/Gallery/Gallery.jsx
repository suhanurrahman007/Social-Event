import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const galleys = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGalleys =
    activeCategory === "All"
      ? galleys
      : galleys?.filter(
          (galley) =>
            galley.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="bg-[#f1efef] space-y-10 px-5 py-12 md:px-16 lg:px-24">
      <div className="text-center space-y-10">
        <h2 className="text-4xl text-black font-bold">Gallery</h2>
        <p className="text-sm text-black">OUR RECENT PROJECTS</p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        {["All", "Corporate", "Social", "Wedding"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`transition-all rounded-md bg-white text-gray-600 border hover:scale-105 py-2 px-4`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGalleys?.map((galley) => (
          <GalleryCard key={galley.id} galley={galley}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

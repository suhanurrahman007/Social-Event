import { PricingCard } from "./OurPriceCard";

const OurPrices = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.80)), url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
      className="relative bg-cover bg-center text-center px-5 py-12 space-y-10 md:px-16 lg:px-24"
    >
      <h2 className="text-4xl text-white font-bold">Our Prices</h2>
      <p className="text-sm text-white">OUR BEST SERVICES JUST FOR YOU</p>
      <PricingCard />
    </div>
  );
};

export default OurPrices;

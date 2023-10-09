import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import PartialList from "./PartialList/PartialList";
import OurPrices from "./OurPrices/OurPrices";
import ContactUs from "../../components/ContactUs/ContactUs";

const ServicesEvent = () => {
    const services = useLoaderData();

    return (
      <div>
        <Services services={services}></Services>
        <PartialList></PartialList>
        <OurPrices></OurPrices>
        <ContactUs></ContactUs>
      </div>
    );
};

export default ServicesEvent;
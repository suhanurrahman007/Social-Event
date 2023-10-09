import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Header/Slider/Slider";
import Services from "../Services/Services";
import EventPlanning from "../About/EventPlanning/EventPlanning";
import ContactUs from "../../components/ContactUs/ContactUs";
import OnlineRequest from "../../components/OnlineRequest/OnlineRequest";


const Home = () => {
    const services = useLoaderData()
    return (
        <div className="">
           <Slider></Slider>
           <Services services={services}></Services>
           <EventPlanning></EventPlanning>
           <OnlineRequest></OnlineRequest>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
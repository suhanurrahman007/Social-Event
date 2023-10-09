import ContactUs from "../../components/ContactUs/ContactUs";
// import OnlineRequest from "../../components/OnlineRequest/OnlineRequest";
import EventPlanning from "./EventPlanning/EventPlanning";
import OurStaff from "./OurStaff/OurStaff";

const About = () => {
    return (
        <div>
            <EventPlanning></EventPlanning>
            <OurStaff></OurStaff>
            {/* <OnlineRequest></OnlineRequest> */}
            <ContactUs></ContactUs>
        </div>
    );
};

export default About;
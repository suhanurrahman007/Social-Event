import GoogleMapReact from "google-map-react";
import { FaLocationArrow } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div><FaLocationArrow></FaLocationArrow> {text}</div>;

const GoogleMap = () => {
    const defaultProps = {
      center: {
        lat: 23.811056,
        lng: 90.407608,
      },
      zoom: 11,
    };

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Location" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

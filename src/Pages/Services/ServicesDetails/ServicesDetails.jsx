import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const ServicesDetails = () => {
  const [service, setService] = useState({})
  const services = useLoaderData()
  const {id} = useParams()

  useEffect(() =>{
    const findServices = services.find(service => service.id === parseFloat(id))
    setService(findServices);
  },[id, services])

  return (
    <div>
        <ServiceDetail service={service}></ServiceDetail>
    </div>
  );
};

export default ServicesDetails;

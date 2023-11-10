import { useLoaderData } from "react-router-dom";
import Services from "./Services";


const ServiceX = () => {

const services = useLoaderData()


    return (
        <div>
            {
                services.map(service => <Services key={service._id} service={service}></Services>)
            }
        </div>
    );
};

export default ServiceX;
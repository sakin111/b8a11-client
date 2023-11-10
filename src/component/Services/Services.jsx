import { Link } from "react-router-dom";


const Services = ({ service }) => {

    const { ServiceImage, ServiceName, ServiceDescription, ServiceProviderImage, Name, ServiceArea, ServicePrice } = service;


    return (
        <div>

            <div className='grid grid-cols-2 gap-7 w-full mx-10'>
                <div>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                            bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ServiceImage} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight font-custom font-roboto  text-white dark:text-white">{ServiceName}</h5>
                            <p className="mb-3 font-normal text-white font-custom font-roboto dark:text-white">{ServiceDescription}</p>
                            <div className='flex justify-between items-center '>
                                <div className='flex justify-start items-center'>
                                    <img src={ServiceProviderImage} className='w-12 h-12 rounded-full' alt="" />
                                    <h3 className='text-xl text-white font-bold ml-4 font-custom font-ubuntu'>{Name}</h3>
                                    <p>{ServiceArea}</p>
                                    <p>{ServicePrice}</p>
                                </div>
                                <div className='ml-5'>
                                    <Link to="/detail">
                                        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default Services;
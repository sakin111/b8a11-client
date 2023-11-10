import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Project = () => {
  const [reals, setReals] = useState([]);

  useEffect(() => {
    axios.get('https://real-project-server-rnpz6w2mp-maliksakin53gmailcom.vercel.app/project')
      .then((response) => {
        setReals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='grid grid-cols-2 gap-7 w-full mx-10'>

      {reals.map((real) =>
        <div key={real._id} >
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
          bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={real.serviceImage} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight font-custom font-roboto  text-white dark:text-white">{real.serviceName}</h5>
              <p className="mb-3 font-normal text-white font-custom font-roboto dark:text-white">{real.serviceDescription}</p>
              <div className='flex justify-between items-center '>
              <div className='flex justify-start items-center'>
               <img src={real.serviceProviderImage} className='w-12 h-12 rounded-full' alt="" />
               <h3 className='text-xl text-white font-bold ml-4 font-custom font-ubuntu'>{real.serviceProviderName}</h3>
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
      )}

    </div>
  );
};

export default Project;

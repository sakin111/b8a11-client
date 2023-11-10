import { useState } from 'react';
import { FaGlobe, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const TourCard = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      destination: 'Paris, France',
      duration: 5,
      description: 'Explore the City of Lights, from the Eiffel Tower to the Louvre Museum.',
      price: 2500,
      image:'https://i.ibb.co/C82QcZb/4dc9df76-102b-42b8-9f6a-1ff6159dd827.jpg'
    },
    {
      id: 2,
      destination: 'Rome, Italy',
      duration: 7,
      description: 'Experience the Eternal City, from the Colosseum to the Vatican City.',
      price: 3000,
      image:'https://i.ibb.co/WvVdL6g/380b6601-2c37-4b67-80e5-bbd3bc7a568c.jpg'
    },
    {
      id: 3,
      destination: 'New York City, USA',
      duration: 4,
      description: 'See the sights and sounds of the Big Apple, from Times Square to the Statue of Liberty.',
      price: 2200,
      image:'https://i.ibb.co/ZBSyfZP/f5c4717f-4db8-4117-9ae0-7ae1f3337520.jpg'
    },
  ]);

  return (
    <div className="flex flex-col rounded-lg  gap-10 shadow-md p-16 ">
      {tours.map((tour) => (
        <div key={tour.id} className="mb-6 p-8 bg-slate-50 rounded-md">
          <div className='flex items-center justify-between'>
            <div>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <FaGlobe className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h2 className="font-bold text-lg">{tour.destination}</h2>
              <p className="text-gray-500">{tour.duration} days</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">{tour.description}</p>
          </div>
          <p className="font-bold text-lg mb-4">${tour.price}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaStar className="w-4 h-4 text-yellow-400" />
              <FaStar className="w-4 h-4 text-yellow-400" />
              <FaStar className="w-4 h-4 text-yellow-400" />
              <FaStar className="w-4 h-4 text-yellow-400" />
              <FaStar className="w-4 h-4 text-gray-400" />
            </div>
            
          </div>
          </div>
          <div className='flex items-center justify-end mt-4 h-full '>
            <img src={tour.image} alt="" className='w-[100%] h-40' />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;

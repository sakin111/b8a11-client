import { Link } from "react-router-dom";


const Banner = () => {







  return (
    <div>
      <img src="https://i.ibb.co/tYQQspd/2ab14751-8ee5-4041-a5a8-8ed96d4248c9.jpg" alt="" className="w-full h-[700px] relative" />
      <div>

        <h2 className="text-5xl text-slate-50 font-extrabold w-[700px] ml-[350px] font-custom font-ubuntu absolute -translate-y-[550px]">Discover the Worlds Wonders with Us
          Your Journey Awaits</h2>
        <p className="text-xl font-custom font-ubuntu w-[500px] ml-[430px] text-slate-50 absolute -translate-y-[400px]">Embark on Unforgettable Adventures
          and Create Lifelong Memories
          with Our Expertly Crafted Tours.
          Explore the World, One Destination at a Time</p>


        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 translate-x-[600px] -translate-y-72">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           <Link to="/signUp"> Sign up</Link>
          </span>
        </button>

      </div>
    </div>
  );
};

export default Banner;



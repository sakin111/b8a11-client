import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HomeSecOne = () => {

    useEffect(() => {
        AOS.init({
    
          offset: 200,
          duration: 1000,
          once: true,
        });
      }, []);



    return (
        <div data-aos="fade-up">
         <h1 className="text-5xl font-bold logo mb-24 mt-14 text-center ">Here Is Our Category Services You Can See</h1>
        </div> 
    );
};

export default HomeSecOne;






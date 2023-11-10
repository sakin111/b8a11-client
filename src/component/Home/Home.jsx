import Banner from "../../HomeSection/Banner/Banner";
import HomeSecOne from "../../HomeSection/HomeSecOne/HomeSecOne";
import Project from "../../HomeSection/Project/Project";
import ProjectCard from "../../HomeSection/Project/ProjectCard";
import TourCard from "../../HomeSection/Sectwo/TourCard";
import TourGuide from "../../HomeSection/Sectwo/TourGuide";




const Home = () => {
    return (
        <div>
           <div className="mt-20">
           <Banner></Banner>
           </div>
           <HomeSecOne></HomeSecOne>
           <Project></Project>
           <ProjectCard></ProjectCard>
           <TourGuide></TourGuide>
           <TourCard></TourCard>
        </div>
    );
};

export default Home;








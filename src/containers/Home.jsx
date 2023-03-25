import useFetch from "../utils/useFetch";

import HomeCard from "../components/Home/HomeCard";
import { Loader } from "@mantine/core";

import about from "../images/home-card-1.png";
import question from "../images/home-card-2.png";
import award from "../images/home-card-3.png";
import events_underline from "../images/events-underline.svg";
import SigCarousel from "../components/Home/SigCarousel";
import midVector from "../images/common/mid-vector.svg";

const Home = () => {
  const { data, isLoading, error } = useFetch("sig/all/");
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="px-8 flex flex-row items-center justify-center phone:flex-col phone:gap-20">
        <HomeCard
          Icon={about}
          Heading="About Us"
          Content="The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts
                        who were a computer user group and felt the need to organize their activities."
        />
        <HomeCard
          Icon={question}
          Heading="What We Do"
          Content="Having 488 student branches and rooted firmly at 73 different locations, CSI has plans of opening more chapters & 
            activity centers in smaller towns of the country. The idea is to spread the knowledge, and provide opportunities to as many 
            interested as possible"
        />
        <HomeCard
          Icon={award}
          Heading="CSI Awards"
          Content="We Recognize Innovations And Indigenous Developments In The Field Of Information Technology In India. CSI Awards 
            Are Instituted To Acknowledge And Motivate Individuals And Organizations Working In The ICT Field."
        />
      </div>
      <div className="w-full uppercase flex flex-col items-center justify-center my-8">
        <h1 className="my-8 font-semibold text-4xl mb-4">OUR SIGs</h1>
        <img className="w-[17vw]" src={events_underline} alt="__________" />
      </div>
      <div className="relative w-full">
        {isLoading ? <Loader /> : <SigCarousel sigs={data} />}
        <img
          src={midVector}
          alt="vector"
          className="absolute z-[-1] left-0 top-0 phone:-left-10"
        />
        <img
          src={midVector}
          alt="vector"
          className="absolute z-[-1] right-0 top-0 phone:-right-12"
        />
      </div>
    </div>
  );
};

export default Home;

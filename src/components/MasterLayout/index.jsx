import Navbar from "../Common/Navbar";
import { Outlet } from "react-router-dom";

import homeHeroImage from "../../images/common/home-hero.png";
import leftVector from "../../images/common/left-vector.svg"
import rightVector from "../../images/common/right-vector.svg";

const MasterLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-header bg-no-repeat bg-contain pt-6 px-10 relative">
        <Navbar />
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p className="text-6xl font-semibold uppercase">
              More than <br /> 10,000 members
            </p>
            <p className="mt-5 text-base font-regular">
              CSI has 72 chapters all over India, 511 student branches, and more
              than 100,000 members including India’s most famous IT industry
              leaders, brilliant scientists and dedicated academicians.
            </p>
          </div>
          <img src={homeHeroImage} alt="hero-icon" />
        </div>
        <img
          src={leftVector}
          alt=""
          className="absolute left-0 bottom-[-5rem]"
        />
        <img
          src={rightVector}
          alt=""
          className="absolute right-0 bottom-[-6rem]"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default MasterLayout;

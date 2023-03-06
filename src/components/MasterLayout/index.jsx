import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

import { headerData } from "../../constants";

import leftVector from "../../images/common/left-vector.svg"
import rightVector from "../../images/common/right-vector.svg";

const MasterLayout = ({ currPath }) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-header bg-no-repeat bg-contain pt-6 px-10 relative">
        <Navbar />
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p className="text-6xl font-semibold uppercase">
              {headerData[currPath].headerText}
            </p>
            <p className="mt-5 text-base font-regular">
              {headerData[currPath].subheaderText}
            </p>
          </div>
          <img src={headerData[currPath].imageUrl} alt="hero-icon" className="self-end"/>
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
      <Footer />
    </div>
  );
};

export default MasterLayout;

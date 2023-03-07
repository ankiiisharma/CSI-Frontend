import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

import { headerData } from "../../constants";

import leftVector from "../../images/common/left-vector.svg"

const MasterLayout = ({ currPath }) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-header bg-no-repeat bg-cover pt-6 px-10 relative">
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
          className="absolute left-0 bottom-[-10rem]"
        />
        <img
          src={leftVector}
          alt=""
          className="absolute right-0 bottom-[-10rem] -scale-x-100"
        />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;

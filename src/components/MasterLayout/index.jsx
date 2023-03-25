import Navbar from "../Common/Navbar";
import SideDrawer from "../Common/SideDrawer";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

import { headerData } from "../../constants";

import leftVector from "../../images/common/left-vector.svg";

const MasterLayout = ({ currPath }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full desktop:bg-header desktop:bg-no-repeat desktop:bg-cover pt-6 px-10 relative phone:bg-mobileHeader phone:flex phone:justify-center phone:items-center'>
        {isSmallScreen ? <SideDrawer /> : <Navbar />}
        <div className='flex justify-between items-center phone:flex-col phone:gap-32'>
          <div className='text-white'>
            <p className='text-6xl font-semibold uppercase'>
              {headerData[currPath].headerText}
            </p>
            <p className='mt-5 text-base font-regular'>
              {headerData[currPath].subheaderText}
            </p>
          </div>
          <img
            src={headerData[currPath].imageUrl}
            alt='hero-icon'
            className='self-end'
          />
        </div>
        <img
          src={leftVector}
          alt=''
          className='absolute left-0 bottom-[-10rem] phone:hidden'
        />
        <img
          src={leftVector}
          alt=''
          className='absolute right-0 bottom-[-10rem] -scale-x-100 phone:hidden'
        />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;

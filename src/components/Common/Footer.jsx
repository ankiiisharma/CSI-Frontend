import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineRight,
} from "react-icons/ai";
import footerVector from "../../images/common/footer-vector.svg";
import { Textarea } from '@mantine/core';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      className='desktop:bg-footer desktop:bg-no-repeat desktop:bg-cover w-screen h-[500px] relative grid grid-cols-5 grid-rows-2 phone:flex phone:flex-col phone:bg-[#020216] phone:h-[520px]'
      id='footer'
    >
      <div className='flex items-center absolute top-[5%] left-[5%] phone:hidden'>
        <img src={logo} alt='logo' width={80} height={80} />
        <div>
          <p className='font-medium text-2xl text-black ml-2 relative'>
            Computer Society of India
            <span className='text-chip absolute bottom-3'>TM</span>
          </p>
          <p className='font-medium text-sm text-black text-right'>
            Since 1965
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center row-span-2 col-span-2'>
        <div className='px-6 pt-20 phone:pt-4 phone:w-full'>
          <p className='text-base text-white phone:hidden'>
            The seed for the Computer Society of India (CSI) was first shown in
            the year 1965 with a handful of IT enthusiasts who were a computer
            user group and felt the need to organize their activities.
          </p>
          <div className='flex items-center gap-4 mt-10 phone:my-3 phone:justify-center'>
            <a href='https://www.facebook.com/csiipec/' target='_blank'>
              <BsFacebook color='white' fontSize={32} />
            </a>
            <a href='https://www.instagram.com/csiipec/' target='_blank'>
              <AiFillInstagram color='white' fontSize={36} />
            </a>
            <a
              href='https://in.linkedin.com/in/computer-society-of-india-ipec-205776217'
              target='_blank'
            >
              <AiFillLinkedin color='white' fontSize={32} />
            </a>
          </div>
        </div>
      </div>
      <div className='pl-10 flex flex-col items-start justify-end'>
        <p className=' text-white uppercase font-semibold text-lg'>
          Quick Navigation
        </p>
        <div className='bg-[#C5A318] w-1/2 h-[2px]'></div>
        <div className='mt-4'>
          <div className='flex items-center'>
            <AiOutlineRight color='white' />
            <p
              className='text-white ml-1 cursor-pointer'
              onClick={() => navigate("/")}
            >
              Home
            </p>
          </div>
          <div className='flex items-center my-4'>
            <AiOutlineRight color='white' />
            <p
              className='text-white ml-1 cursor-pointer'
              onClick={() => navigate("/events")}
            >
              Events
            </p>
          </div>
          <div className='flex items-center'>
            <AiOutlineRight color='white' />
            <p
              className='text-white ml-1 cursor-pointer'
              onClick={() => navigate("/team")}
            >
              Our Team
            </p>
          </div>
        </div>
      </div>
      <div className='pl-10 flex flex-col items-start justify-end col-span-2 h-64 pt-20'>
        <p className=' text-white uppercase font-semibold text-lg'>
          Write to us
        </p>
        <div className='bg-[#C5A318] w-3/4 min-h-[2px]'></div>
        <Textarea
          placeholder='Write something...'
          autosize
          minRows={4}
          sx={{ width: "80%", marginTop: "1rem", zIndex: "2" }}
        />
        <button className='bg-gradient-to-r from-secondary-from to-secondary-to rounded-md text-white font-medium px-3 py-1 w-1/4 mt-6'>
          Submit
        </button>
      </div>
      <div className='self-end bg-gradient-to-r from-footerNote-from to-footerNote-to px-4 py-2 rounded-tl-2xl rounded-tr-2xl w-full text-center col-span-5 relative z-10'>
        <p className='text-white text-sm'>Made by CSI Fam ❤️</p>
      </div>
      <img
        src={footerVector}
        alt='vector'
        className='absolute right-0 bottom-0'
      />
    </div>
  );
};

export default Footer;

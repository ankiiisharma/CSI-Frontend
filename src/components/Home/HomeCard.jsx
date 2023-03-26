import React from "react";
import { GoChevronRight } from "react-icons/go";

const HomeCard = ({ Heading, Content, Icon, link }) => {
  return (
    <div className='bg-white rounded-xl shadow-lg border border-secondary-shades1 h-96 flex flex-col justify-around relative w-80 flex-shrink-0 mx-6'>
      <img
        src={Icon}
        alt=''
        className='absolute w-50 self-center top-0 transform -translate-y-1/2 '
      />
      <div className='mt-50 px-30 pt-10 self-center text-2xl text-black font-bold'>
        {Heading}
      </div>
      <div>
        <p className='px-5 flex-1 text-md text-gray-600 text-center'>
          {Content}
        </p>
      </div>
      <p className='pt-3 text-md flex justify-center items-center'>
        <a
          className='text-primary-shades2 flex items-center justify-center cursor-pointer'
          href={link}
          target='_blank'
        >
          <span className='mr-1'>More Details</span>
          <span>
            <GoChevronRight fontSize='18' />
          </span>
        </a>
      </p>
    </div>
  );
};

export default HomeCard;

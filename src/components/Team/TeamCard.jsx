import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const cdnKey = "td0ht2ygc";

const TeamCard = ({ data }) => {
  return (
    <div className='shadow-teamCard w-[300px] flex flex-col items-center justiy-center py-6 rounded-xl'>
      <img
        src={`https://ik.imagekit.io/${cdnKey}/${data?.imgage_key}?tr=w-1080%2Ch-1080%2Cfo-auto`}
        alt='member-photo'
        className='rounded-full w-[150px] h-[150px] object-cover'
      />
      <p className='text-textColor-header text-lg font-medium mt-2'>
        {data?.name}
      </p>
      <p className='text-textColor-header text-base'>{data?.Post}</p>
      <p className='text-textColor-subheader text-sm mt-2 px-6 text-center'>
        {data?.About}
      </p>
      <div className='flex items-center gap-4 mt-3'>
        {/* <a
          className='rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center cursor-pointer'
          href='#'
          target='_blank'
        >
          <AiFillGithub fontSize={24} />
        </a> */}
        <a
          className='rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center cursor-pointer'
          href={`https://www.linkedin.com/in/${data?.linkdin}/`}
          target='_blank'
        >
          <AiFillLinkedin fontSize={24} />
        </a>
        {/* <a
          className='rounded-full w-10 h-10 bg-[#898989]/[.19] flex items-center justify-center cursor-pointer'
          href='#'
          target='_blank'
        >
          <AiFillInstagram fontSize={24} />
        </a> */}
      </div>
    </div>
  );
};

export default TeamCard;

import Carousel from "react-material-ui-carousel";
import { HiOutlineUserGroup } from "react-icons/hi";
import { sigData } from "../../constants";

const SigCarousel = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Carousel className="w-[300px]">
        {sigData.map((sig) => (
          <SigCard data={sig} />
        ))}
      </Carousel>
    </div>
  );
};

const SigCard = ({ data }) => {
  return (
    <div
      className="rounded-md w-[300px] h-[300px] py-3 px-5 flex flex-col justify-between items-center relative"
      style={data.bgStyles}
    >
      <HiOutlineUserGroup className="text-right w-12 h-12 text-white font-bold ml-auto" />
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold text-white">{data.name}</p>
        <img
          src={data.iconUrl}
          alt="icon"
          className="mt-3"
          width={48}
          height={48}
        />
      </div>
      <button className="mr-auto text-base font-medium py-1 px-3 border border-white text-white uppercase">
        Read syllabus
      </button>
      <div className="w-1/3 h-[100px] border-t border-l rounded-tl-lg border-white absolute left-2 top-2"></div>
      <div className="w-1/3 h-[100px] border-b border-r rounded-br-lg border-white absolute right-2 bottom-2"></div>
    </div>
  );
};

export default SigCarousel;

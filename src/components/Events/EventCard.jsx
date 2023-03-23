// Components
import { GoChevronRight } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const EventCard = ({
  img,
  title,
  datetime,
  location,
  description,
  price,
  regLink,
}) => {
  return (
    <div className="w-4/5 flex items-center justify-center shadow-2xl shadow-[#d3e5ea] bg-white rounded-lg my-3">
      <div className="h-full w-1/3 flex justify-center items-center">
        <img
          src={img}
          alt="Image"
          className="rounded-lg"
          width={100}
          height={100}
        />
      </div>
      <div className="h-full w-2/3 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm my-2 flex items-center">
            <span>
              <MdDateRange
                className="text-primary-shades2 mr-1"
                fontSize="20"
              />
            </span>
            <span>{datetime.split("-").reverse().join("/")}</span>
          </p>
        </div>
        <p className="text-base font-bold mb-2">{location}</p>
        <p className="text-sm mb-6">{description}</p>
        <p className="text-base flex justify-between items-center">
          <a
            className="text-primary-shades2 flex items-center justify-center cursor-pointer"
            href={regLink}
          >
            <span className="mr-1">Register</span>
            <span>
              <GoChevronRight fontSize="20" />
            </span>
          </a>
          <p className="text-primary-shades2 font-semibold text-3xl">{price}</p>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

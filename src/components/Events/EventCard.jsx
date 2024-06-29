import { useMediaQuery } from "@mantine/hooks";

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
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return isSmallScreen ? (
    <div className="flex flex-col items-start shadow-2xl shadow-[#d3e5ea] bg-white rounded-lg my-3 border border-[#e3e3e3] w-full">
      <img
        src={img}
        alt="Image"
        className="rounded-lg self-center"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="flex items-center px-4 mt-3">
        <p className="text-base font-semibold border-r border-black pr-3">
          {location}
        </p>
        <p className="text-base my-2 flex items-center ml-3">
          <span>
            <MdDateRange className="text-primary-shades2 mr-1" fontSize="24" />
          </span>
          <span className="font-semibold">
            {datetime.split("-").reverse().join("/")}
          </span>
        </p>
      </div>
      <h1 className="text-2xl font-semibold px-4 mt-2">{title}</h1>
      <p className="text-base font-medium px-4 mt-2">{description}</p>
      <a
        className="text-primary-shades2 text-lg mb-3 flex items-center justify-center cursor-pointer px-4 mt-3"
        href={regLink}
      >
        <span className="mr-1">Register</span>
        <span>
          <GoChevronRight fontSize="20" />
        </span>
      </a>
    </div>
  ) : (
    <div className="w-4/5 flex items-center justify-center shadow-2xl shadow-[#d3e5ea] bg-white rounded-lg my-3 border border-[#e3e3e3]">
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

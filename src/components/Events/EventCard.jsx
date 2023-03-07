// Components
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DateRangeIcon from "@mui/icons-material/DateRange";

const EventCard = ({ img, title, datetime, location, description, price }) => {
  return (
    <div className="w-4/5 flex items-center justify-center shadow-2xl shadow-[#d3e5ea] bg-white rounded-lg my-3">
      <div className="h-full w-1/3 flex justify-center items-center p-4">
        <img src={img} alt="Image" className="rounded-lg object-contain" />
      </div>
      <div className="h-full w-2/3 p-8">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-sm my-2 flex items-center">
          <span>
            <DateRangeIcon className="text-primary-shades2 mr-1" />
          </span>
          <span>{datetime}</span>
        </p>
        <p className="text-base font-bold my-2">{location}</p>
        <p className="text-sm mb-6">{description}</p>
        <p className="text-base flex justify-between items-center">
          <p className="text-primary-shades2 flex items-center justify-center">
            <span className="mr-1">More Detail</span>
            <span>
              <ArrowForwardIosIcon fontSize="18"/>
            </span>
          </p>
          <p className="text-primary-shades2 font-semibold text-3xl">{price}</p>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

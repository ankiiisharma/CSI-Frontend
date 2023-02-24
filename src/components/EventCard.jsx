// Assets
import event_img from "../images/event-img.jpg";

// Components
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DateRangeIcon from "@mui/icons-material/DateRange";

const EventCard = () => {
  return (
    <div className="w-4/5 flex items-center justify-center shadow-2xl shadow-[#d3e5ea] bg-white rounded-lg my-3">
      <div className="h-full w-1/3 flex justify-center items-center p-4">
        <img
          src={event_img}
          alt="Image"
          className="rounded-lg object-contain"
        />
      </div>
      <div className="h-full w-2/3 p-8">
        <h1 className="text-4xl font-semibold mb-4">Event Title</h1>
        <p className="text-sm my-2 flex items-center">
          <span>
            <DateRangeIcon className="text-yellow-500 mr-1" />
          </span>
          <span>Event Date & Time</span>
        </p>
        <p className="text-sm font-bold my-2">Event Location</p>
        <p className="text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          nulla id nulla molestie maximus. Etiam vel neque a ipsum sollicitudin
          venenatis ac dignissim nibh. Morbi imperdiet magna sit amet...
        </p>
        <p className="text-md flex justify-between items-center">
          <p className="text-yellow-500 flex items-center justify-center">
            <span className="mr-1">More Detail</span>
            <span>
              <ArrowForwardIosIcon />
            </span>
          </p>
          <p className="text-yellow-500 font-semibold text-4xl">FREE</p>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

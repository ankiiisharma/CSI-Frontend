import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

// Components
import ReactPaginate from "react-paginate";
import EventCard from "../components/Events/EventCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from '@mui/material/CircularProgress';

// Assets
import events_underline from "../images/events-underline.svg";

// Data
import dummy_events from "../data/dummy_events";
import month_names from "../data/month_names";

// Event Cards Mapped
function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((item) => (
        <EventCard
          key={item.id}
          img={`https://drive.google.com/uc?export=view&id=${item.Poster_link}`}
          title={item.name}
          datetime={item.Date}
          location={item.venue}
          description={item.Description}
          regLink={item.reg_link}
          price={item.price ?? "FREE"}
        />
      ))}
    </>
  );
}

const Events = ({ itemsPerPage = 4 }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const { data, error, isLoading } = useFetch("all/events/");

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(dummy_events.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dummy_events.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (error) return "";

  return (
    <div className='flex flex-col items-center justify-center bg-slate-50 p-10'>
      <div className='w-full uppercase flex flex-col items-center justify-center mb-8'>
        <h1 className='font-semibold text-4xl mb-4'>Events</h1>
        <img className='' src={events_underline} alt='__________' />
      </div>

      <div className='bg-white flex justify-between items-center mb-10 w-4/5 px-4 py-1 rounded-md shadow-teamCard'>
        <SearchIcon className='text-[#888888]' />
        <input
          type='text'
          placeholder='Search for events'
          className='w-5/12 outline-none border-r border-secondary-shades2'
        />

        <select className='w-2/12 outline-none text-[#888888] border-r border-secondary-shades2'>
          <option default value='all'>
            All
          </option>
          <option value='technical'>Technical</option>
          <option value='non-technical'>Non Technical</option>
        </select>

        <select className='w-2/12 outline-none text-[#888888]'>
          <option default value='all'>
            All
          </option>
          {month_names.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>

        <button
          type='submit'
          className='w-2/12 text-white py-3 rounded-md font-bold bg-gradient-to-t'
          style={{
            background: "linear-gradient(180deg, #183882 6.17%, #001649 100%)",
          }}
        >
          SEARCH
        </button>
      </div>

      {!!isLoading ? <CircularProgress /> : <Items currentItems={data} />}
      {/* <ReactPaginate
        breakLabel='...'
        nextLabel={<ArrowForwardIosIcon />}
        previousLabel={<ArrowBackIosIcon />}
        pageClassName='bg-white w-12 h-12 flex justify-center items-center rounded-md m-2 shadow-2xl shadow-[#d3e5ea] duration-300'
        nextClassName='bg-white w-12 h-12 flex justify-center items-center rounded-md m-2 shadow-2xl shadow-[#d3e5ea] duration-300'
        previousClassName='bg-white w-12 h-12 flex justify-center items-center rounded-md m-2  shadow-2xl shadow-[#d3e5ea] duration-300'
        breakClassName='font-bold flex justify-center items-center w-12 h-12'
        activeClassName='bg-[#092155] text-white w-12 h-12 flex justify-center items-center rounded-md'
        containerClassName='text-[#737373] w-full h-12 flex justify-center items-center m-2'
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
};

export default Events;

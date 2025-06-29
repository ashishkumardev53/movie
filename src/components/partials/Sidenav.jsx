
import { Link } from "react-router-dom";

const Sidenav = () => {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
        <span> Ashish App. </span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl text mt-6 mb-2">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className=" ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-1 ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-3 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-3 ri-tv-2-fill"></i>
          Tv shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-3 ri-team-fill"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl text mt-6 mb-2">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-3 ri-information-2-fill"></i>
          About
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 p-3">
          <i className="mr-3 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

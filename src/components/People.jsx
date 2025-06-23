import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";

function People() {
      document.title = "Ashish-Movie | Tv Shows ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        settv((pervState) => [...pervState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refershHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      settv([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);



  return  person.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-fill"
          ></i>{" "}
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
export default People;
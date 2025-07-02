import { asyncThunkCreator } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[160vh] px-[10%] "
    >
      {/* part-1 */}
      <nav
        className="h-[10vh]  w-full text-zinc-100  flex 
      items-center gap-10 text-xl"
      >
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6565CD] ri-arrow-left-fill"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#6565CD] ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-[#6565CD] ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <small className="hover:text-[#6565CD]"> Imdb </small>
        </a>
      </nav>

      {/* part-2 poster and details */}

      <div className="w-full flex ">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[55vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[10%] text-white">
          <h1 className="text-5xl font-black  ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-2 mb-2 flex items-center gap-x-3">
            <span
              className="
           rounded-full bg-yellow-600 
          text-xl font-semibold text-white w-[8vh] h-[6vh]
           flex justify-center items-center"
            >
              {(info.detail.vote_average * 10).toFixed()} <sub>%</sub>
            </span>
            <h1 className=" w-[60px] font-semibold text-2xl leading-6">
              {" "}
              User Score{" "}
            </h1>
            <h1 className=" "> ({info.detail.release_date}) </h1>
            <h1 className=" ">
              {" "}
              {info.detail.genres.map((g) => g.name).join(", ")}{" "}
            </h1>
            <h1 className=" "> {info.detail.runtime} min </h1>
          </div>
          <h1 className="text-zinc-200 text-2xl font-semibold italic">
            {info.detail.tagline}{" "}
          </h1>

          <h1 className="text-2xl mt-1">Overview :</h1>
          <p className="text-[12px]">{info.detail.overview}</p>

          <h1 className="text-2xl mt-1">Movie Translated :</h1>
          <p className="text-[12px] mb-10">{info.translations.join(", ")}</p>

          <Link
            to={`${pathname}/trailer`}
            className="mt-[10%] p-5  bg-[#6556CD] rounded-lg "
          >
            <i className="text-xl mr-1 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part-3 Available on platforms */}

      <div className="w-[80%] mt-10 flex flex-col gap-y-5 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold">Available on Platforms :</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold">Available on Rent :</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold">Available to Buy :</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part-4  recomendetations and similarity stuf */}
      <hr className="text-zinc-500 mt-10 mb-5 h-[2px]" />
      <h1 className="text-white text-3xl font-bold mt-5">
        Recommendations & Similar stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;

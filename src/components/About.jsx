import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  document.title = "Ashish-Movie | About ";
  return (
    <div className="w-screen h-screen">
      <div className="p-[10%]">
        <h1 className="text-2xl text-zinc-400 font-semibold w-full ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-fill"
          ></i>{" "}
          About Us
        </h1>
        <div >
        <p className="text-zinc-400 my-8 text-xl ">
          <small className="font-bold text-[#6565CD]">Ashish-Movie</small> is
          the best website to download Bollywood and Hollywood movies in 720p
          HD.
          <br />
          We provide direct download links without any annoying ads or pop-ups.
          <br />
          You can find links from different file-sharing sites, and each movie
          is available in multiple qualities like BluRay, HDRip, BRRip, and
          Web-DL.
        </p>
        <p className="text-zinc-400 my-8 text-xl">
          <small className="font-bold text-[#6565CD] mr-2"> Disclaimer :</small>
          All My Post Are Free Available On Internet Posted By Somebody Else
          <br />
          I’m Not VIOLATING Any COPYRIGHTED LAW. If Anything Is Against LAW,
          Please Notify Me At
        </p>
        <p className="text-zinc-400 my-8 text-xl">
          <small className="font-bold text-[#6565CD] mr-2"> Note :</small>
          Ashish-Movie is Complete Independent Entity.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;


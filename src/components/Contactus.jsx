import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();
  document.title = "Ashish-Movie | Contact ";
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="p-[10%]">
        <h1 className="text-2xl text-zinc-400 font-semibold w-full ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-fill"
          ></i>{" "}
          Contact Us
        </h1>
        <div>
          <p className="text-zinc-400 my-8 text-xl ">
            <small className="font-bold text-[#6565CD] text-3xl">
              Feel free to contact us :{" "}
            </small>{" "}
            If you have any questions, suggestions, or need help with anything,
            please don’t hesitate to contact us. Whether it's a technical issue,
            feedback about the site, or just a general inquiry — we're always
            here to help and listen.
            <br />
            Also, if there’s a specific movie or TV series you’re looking for,
            feel free to send us a request! We’re always updating our library
            and would be more than happy to upload your favorite titles in the
            best possible quality.
            <br />
            Your satisfaction is our priority, and we truly appreciate your
            support. So go ahead — reach out anytime. We’re just a message away!
          </p>
          <p className="text-zinc-400 my-8 text-xl">
            <small className="font-bold text-[#6565CD] mr-2 text-3xl">
              {" "}
              Note :
            </small>
            Ashish-Movie is your go-to source for free movie downloads, where we
            update the latest Bollywood and Hollywood movies, as well as web
            series, every day in full HD quality with dual audio options. To
            make your experience smooth, we recommend reading our simple
            download instructions so you can easily watch or download your
            favorite content. If you ever come across a broken link, please
            don’t hesitate to report it — your feedback helps us keep the site
            running smoothly. You can reach out to us anytime via email or
            phone, and we’ll respond to your queries within 24 working hours.
            Don’t forget to subscribe to our newsletter for the latest updates,
            and follow us on all social media platforms to stay up to date with
            new releases and announcements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join join-vertical flex *:w-full *:bg-base-100">
        <button className="btn join-item justify-start">
          <span className="text-[#3B599C]">
            <FaFacebookF />
          </span>{" "}
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <span className="text-[#58A7DE]">
            <FaTwitter />
          </span>{" "}
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <span className="text-[#D82D7E]">
            <FaInstagram />
          </span>{" "}
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { img2_url } from "../utils/constants";
const Onway = () => {
  return (
    <div className="py-4 px-6">
      <Link to="/math">
        <button>🔙</button>
      </Link>
      <button className=" text-left m-4 bg-green-700 h-1 w-11/12 mb-18 rounded-lg"></button>
      <div className="text-center">
        <div className="flex justify-center mt-[60px]">
          <img className="w-[320px]" src={img2_url} />
          <div className="w-4/12 ml-[80px]">
            <h1 className="font-bold text-2xl mb-8 ml-[-260px]">
              You're on your way
            </h1>{" "}
            <div class="flex ml-2 mb-2">
              <MdStarRate className="text-yellow-400 rounded-full w-7 " />
              <MdStarRate className="text-yellow-400 rounded-ful  w-7 " />
              <MdStarRate className="text-yellow-400 rounded-full w-7 " />
              <MdStarRate className="text-yellow-400 rounded-full w-7 " />
              <MdStarRate className="text-yellow-400 rounded-full w-7 " />
            </div>
            <h2 className="text-md italic text-left">
              "Through its engaging and well-structured course, Brilliant has
              taught me mathematical concepts that i previously struggled to
              understand.I now feel confident approaching both technical job
              interviews and real world problem solvinga situations."
            </h2>
            <h2 className="text-md italic text-left">-Jacpb S.</h2>
          </div>
        </div>
        <div className=" my-1">
          <Link to="/final">
            <button className="bg-black  rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onway;

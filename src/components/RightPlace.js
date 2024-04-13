import { Link } from "react-router-dom";
import { img1_url } from "../utils/constants";
const RightPlace = () => {
  return (
    <div className="py-4 px-6">
      <Link to="/interested">
        <button>🔙</button>
      </Link>
      <button className=" text-left m-4 bg-green-700 h-1 w-6/12 mb-18 rounded-lg"></button>
      <div className="text-center ">
        <div className="flex justify-center  mt-[60px]">
          <img className="w-[320px]" src={img1_url} />
          <div className="w-4/12 ">
            <h1 className="font-bold text-2xl mb-8 ml-[-200px]">
              You're in the right place
            </h1>
            <h2>
              Brilliant gets you hands-on to help improve your Professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, scienc, and computer science
            </h2>
          </div>
        </div>
        <div className=" my-5">
          <Link to="/math">
            <button className="bg-black  rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightPlace;

import { Link } from "react-router-dom";
import { logoList2 } from "../utils/constants";
import Card from "./Card";
const Interested = () => {
  const List = logoList2;
  return (
    <div className="py-4 px-6">
      <Link to="/">
        <button>🔙</button>
      </Link>
      <button className=" text-left m-4 bg-green-700 h-1 w-4/12 mb-18 rounded-lg"></button>
      <div className="text-center">
        <h1 className="font-bold text-2xl m-2">
          Which are you most interested in?
        </h1>
        <h2 className=" mb-4 mt-4 text-gray-600 text-sm  text-gray ">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </h2>
        <div>
          {List.map((res) => (
            <Card list={res} key={res.id} />
          ))}
        </div>
        <div className=" my-8">
          <Link to="/rightplace">
            <button className="bg-black  rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interested;

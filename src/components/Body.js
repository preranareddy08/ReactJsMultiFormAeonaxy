import { logoList1 } from "../utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";
const Body = () => {
  const List = logoList1;

  return (
    <div class="py-4  px-6">
      <button className=" text-left m-4 bg-green-700 h-1 w-2/12 mb-18 rounded-lg"></button>
      <div className="text-center">
        <h1 className="font-bold text-2xl m-2">Which describes you best?</h1>
        <h2 className=" mb-4 mt-4 text-gray-600 text-sm  text-gray ">
          This help us personalize your experience
        </h2>
      </div>
      <div>
        {List.map((res) => (
          <Card list={res} key={res.id} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/interested">
          <button className="bg-black my-5 rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;

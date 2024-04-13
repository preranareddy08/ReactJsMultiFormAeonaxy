import { Link } from "react-router-dom";
const FinalPage = () => {
  return (
    <div>
      <div className="text-center w-4/12 m-auto mb-6">
        <button className="  border-orange-400 border-4 text-white border-solid p-4 w-[60px] h-[60px] mt-[160px] rounded-full ">
          a
        </button>
        <h1 className="my-3 font-bold">
          Finding the learning path recommendations for you based on your
          response
        </h1>
      </div>
      <div className="text-center">
        <Link to="/last">
          <button className="bg-black my-5 rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinalPage;

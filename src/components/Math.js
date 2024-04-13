import { Link } from "react-router-dom";

const Math = () => {
  return (
    <div className="py-4 px-6">
      <Link to="/rightplace">
        <button>🔙</button>
      </Link>
      <button className=" text-left m-4 bg-green-700 h-1 w-8/12 mb-18 rounded-lg"></button>
      <div className="text-center">
        <h1 className="font-bold text-2xl m-2 mt-[60px]">
          What is your math comfort level?
        </h1>
        <h2 className=" mb-4 mt-4 text-gray-600 text-sm  text-gray ">
          Choose the right level you feel confident in - you can always adjust
          later.
        </h2>
        <div className="flex justify-center mt-[50px]">
          <div className="p-7 px-9 m-2 bg-gray-50 hover:bg-gray-100 active:border-yellow-200 border-2 rounded-lg">
            <span className="italic mb-5">50 * 1/2 = 25</span>
            <h1 className="font-medium mt-[20px]">Arthemetic</h1>
            <h2 className="text-gray-500">Introductory</h2>
          </div>
          <div className="p-7 px-9 m-2 bg-gray-50 hover:bg-gray-100 active:border-yellow-200 border-2 rounded-lg">
            <span className="italic mb-5">50 * 1/2 = 25</span>
            <h1 className="font-medium mt-[20px]">Arthemetic</h1>
            <h2 className="text-gray-500">Introductory</h2>
          </div>
          <div className="p-7 px-9 m-2 bg-gray-50 hover:bg-gray-100 active:border-yellow-200 border-2 rounded-lg">
            <span className="italic mb-5">50 * 1/2 = 25</span>
            <h1 className="font-medium mt-[20px]">Arthemetic</h1>
            <h2 className="text-gray-500">Introductory</h2>
          </div>
          <div className="p-7 px-9 m-2 bg-gray-50 hover:bg-gray-100 active:border-yellow-200 border-2 rounded-lg">
            <span className="italic mb-5">50 * 1/2 = 25</span>
            <h1 className="font-medium mt-[20px]">Arthemetic</h1>
            <h2 className="text-gray-500">Introductory</h2>
          </div>
        </div>
        <div className=" my-5">
          <Link to="/onway">
            <button className="bg-black  rounded-lg px-4 py-2 text-white hover:shadow-xl active:bg-gray-800">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Math;

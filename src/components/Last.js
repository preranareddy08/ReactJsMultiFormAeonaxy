import React from "react";
import { img3_url } from "../utils/constants";
const Last = () => {
  return (
    <div className=" mt-[60px]">
      <div className="text-center">
        <h1 className="font-bold text-2xl m-2">
          Learning paths based on your answers
        </h1>
        <h2 className=" mb-6 mt-4 text-gray-600 text-sm  text-gray ">
          Choose one to get started. You can switch any time
        </h2>
      </div>
      <button className="bg-orange-400 text-xs p-1 font-bold rounded-3xl ml-[530px] absolute ">
        Most popular
      </button>
      <div class="flex justify-center">
        <div
          className="w-3/12 border-2 m-3 hover:bg-gray-50 active:bg-gray-100 cursor-pointer
         active:border-yellow-200"
        >
          <div class="flex">
            <div className="p-2 m-1">
              <h1>
                <span className="font-bold">Foundational Math </span> Build ypur
                foundational skills in algebra, geometry, and probability
              </h1>
            </div>
            <div>
              <img className=" mb-3  w-[250px] h-[100px]" src={img3_url} />
            </div>
          </div>
        </div>
        <div className="w-3/12 border-2 m-3 hover:bg-gray-50 active:bg-gray-100 cursor-pointer active:border-yellow-200">
          <div class="flex ">
            <div className="p-2 m-1">
              <h1>
                <span className="font-bold">mathematical thinking </span> Build
                ypur foundational skills in algebra, geometry, and probability
              </h1>
            </div>
            <div>
              <img className=" mb-5 w-[250px] h-[100px]" src={img3_url} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Last;

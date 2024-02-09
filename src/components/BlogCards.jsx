import React from "react";

function BlogCards({ img, title, description }) {
  return (
    <div className="m-3">
      <div className="flex  w-full h-[170px] md:h-[170px] lg:w-[850px] lg:h-[200px] bg-gray-200 rounded dark:text-black dark:bg-gray-800 font-nunito">
        <div className="w-[250px]  overflow-hidden ">
          <img src={img} className="h-full  md:h-[200px] rounded-l  " />
        </div>
        {/* <div className=" flex flex-col"> */}
          <div className="relative md:pr-4 flex flex-col justify-start md:justify-center w-full">
            <div>
              <h2 className="font-black text-sm md:text-xl lg:pb-4 p-2 dark:text-cyan-600">
                {title}
              </h2>
              <p className=" px-4 md:p-2 pb-3 lg:pb-3 text-xs lg:text-sm font-feedback text-gray-700 dark:text-gray-300 ">
                {description}
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              <button className="px-2  text-md md:px-4 justify-end md:justify-center md:items-center capitalize bg-cyan-950 py-1 lg:py-3 rounded text-white font-semibold ">
                read full article
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default BlogCards;

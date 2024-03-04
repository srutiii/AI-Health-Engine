import React from "react";

function PageDivider() {
  return (
    <div className="h-[500px] flex w-full">
      <div className="bg-light_text w-full flex opacity-80 ">
        <div className="flex mx-10">
          <img
            src="src/assets/medical-report.png"
            alt=""
            className=" flex justify-centeru"
          />
        </div>
        <p className="text-red-400 font-black text-6xl w-2/3 flex justify-center items-center text-justify px-10">
          Access all health benefits from the comfort of your own space.
        </p>
      </div>
    </div>
  );
}

export default PageDivider;

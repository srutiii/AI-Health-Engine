import React from 'react'

function Card({title, img, feedback, author }) {
  return (
    <div className="">
      <div className=" md:h-[250px] h-[200px] flex  justify-center items-center my-5">
        <div className="flex w-[400px] md:w-[650px] h-[200px] md:h-[200px] text-light_text  dark:text-dark_text dark:bg-gray-700  shadow-md shadow-dark_text mx-2 p-5 justify-center text-center font-nunito">
          <div className=" flex justify-center items-center  w-[20%] d">
            <img
              src={img}
              alt={author}
              className="rounded-full shadow-md shadow-black w-35 overflow-hidden "
            />
          </div>
          <div className="flex flex-col w-[70%] items-center justify-center ">
            <div className="">
              <h3 className="text-xl md:text-2xl  flex justify-start items-start font-semibold px-4">
                {title}
              </h3>
              <p className="flex justify-center font-feedback italic items-center px-4 py-2 text-sm   dark:text-gray-200 text-gray-700">
                " {feedback} "
              </p>
              <p className="flex justify-end items-end px-4 font-semibold capitalize">
                ~ {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
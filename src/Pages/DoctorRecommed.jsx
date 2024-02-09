import React from 'react'

function DoctorRecommed() {
  return (
    <div className="w-full h-screen">
      <div className="">
        <div className="h-[300px] bg-blue-200 dark:bg-cyan-800 flex w-full justify-center relative">
          <div className='mt-20 md:w-1/2 w-[90%] flex justify-center items-center'>
            <p className='text-xl font-playfair font-semibold dark:text-gray-300 text-cyan-800'>
              Discover your ideal doctor and schedule appointments seamlessly
              with our intuitive recommendation and booking system.
            </p>
          </div>
          <img src="src/assets/medical-team (1).png" alt="" className="md:w-52 w-20 absolute right-10 bottom-0 " />
        </div>
      </div>
    </div>
  );
}

export default DoctorRecommed
import React from 'react'

function Features({title, Description}) {
  return (
    <div className="w-full bg-blue-300">
      <div className="w-full flex  p-2">
        <div className="flex justify-center items-center w-full">
          <h1 className=" text-blue-950 font-bold text-6xl p-4">
            {title}
          </h1>
        </div>
      </div>
      <div className='mx-auto px-10'>
        <p>
          {Description}
        </p>
      </div>
      <div className='flex justify-center items-center '>
        <button className='bg-cyan-950 px-10 py-2 rounded-lg'>Predict</button>
      </div>
    </div>
  );
}

export default Features
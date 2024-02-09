import React from "react";
import { Link } from "react-router-dom";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { BsChatFill } from "react-icons/bs";
import Chattbot from "./chatbot/Chatbot";

function Nav_sm() {
   
  return (
    <>
      <div className="fixed dark:bg-black dark:text-cyan-600 z-20 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 xl:hidden ">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto shadow-lg shadow-blue-300 dark:shadow-md dark:shadow-blue-950 rounded-full">
          <Link className="inline-flex flex-col items-center justify-center px-5 rounded-l-full  group">
            <MdArticle className="text-3xl  hover:text-blue-950" />
          </Link>
          <Link className="inline-flex flex-col items-center justify-center px-5  group">
            <GrServices className="text-3xl hover:text-blue-950" />
          </Link>
          <Link
            to="/"
            className="inline-flex flex-col items-center justify-center px-5 py-4 rounded-full text-white m-1 bg-blue-950 group"
          >
            <FaHouseChimneyMedical className="text-3xl" />
          </Link>
          <Link className="inline-flex flex-col items-center justify-center px-5 group">
            <TbMessageChatbot className="text-4xl hover:text-blue-950" />
          </Link>
          <Link className="inline-flex flex-col items-center justify-center px-5 rounded-r-full group">
            <IoMdContact className="text-3xl hover:text-blue-950" />
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default Nav_sm;

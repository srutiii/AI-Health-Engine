import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
  };
  return (
    <div className=" w-full md:h-[280px] h-[400px] p-5 ">
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="capitalize text-3xl font-bold font-playfair xl:text-4xl text-light_text dark:text-dark_text ">
            our happy clients
          </h1>
        </div>
        <div className="flex scroll-hidden overflow-x-scroll no-scrollbar scrollbar-hide">
          {/* <Slider {...settings}> */}
            <Card
              title="Sectumsempra ✨"
              img="https://sm.ign.com/ign_in/cover/h/harry-pott/harry-potter-the-series_598w.jpg"
              feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                    possimus n corrupti nulla
                    blanditiis. Nostrum nulla quibusdam vitae assumenda!"
              author="Harry Potter"
            />
            <Card
              title="Reparo💫💡"
              img="https://i.pinimg.com/1200x/5d/61/32/5d6132c98e0de838c833ee4810d0ee42.jpg"
              feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                    possimus necessitatibus libero nostrum "
              author="Hermione Granger "
            />
            <Card
              title="Wingardium Leviosa 🪶"
              img="https://i.pinimg.com/736x/9b/22/82/9b22823479ba43033cfdedf1045814b1.jpg"
              feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                    possimus necessitatibus libero nostrum "
              author="Ron Weasley"
            />
            <Card
              title=" ⚡️ Expelliarmus ⚡️"
              img="https://i.pinimg.com/1200x/c4/2d/35/c42d3525d411e6a6df7de0f8548ffc87.jpg"
              feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                    possimus necessitatibus libero nostrum "
              author="Draco Malfoy"
            />
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

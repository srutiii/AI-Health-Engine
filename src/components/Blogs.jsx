import React from "react";
import Slider from "react-slick";
import BlogCards from "./BlogCards";

function Blogs() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    scrollbars: true,
  };

  const related = [
    {
      id: 1,
      title: "Balanced Diet - Definition, Importance, Benefits & Diet Chart",
      link: "https://www.maxhealthcare.in/blogs/what-is-a-balanced-diet",
    },
    {
      id: 2,
      title: "Best Diet Chart for Weight Loss Patients : Free 7-day Diet Chart",
      link: "https://www.acko.com/health-insurance/best-diet-chart-for-weight-loss/",
    },
    {
      id: 3,
      title: "Coping With Stress",
      link: "https://www.cdc.gov/violenceprevention/about/copingwith-stresstips.html",
    },
    {
      id: 4,
      title: "LATEST HEALTH NEWS",
      link: "https://www.webmd.com/news/articles",
    },

    {
      id: 6,
      title: "6th Edition of World Congress on Infectious Diseases",
      link: "https://infectiouscongress.com/program/scientific-sessions/infectious-diseasest",
    },
    {
      id: 7,
      title: "What Causes Painful Menstrual Periods and How Do I Treat Them?",
      link: "https://www.healthline.com/health/painful-menstrual-periods",
    },
    {
      id: 8,
      title: "Why do I have a headache? Causes, types, and remedies",
      link: "https://www.medicalnewstoday.com/articles/headaches",
    },
    {
      id: 9,
      title: "Long COVID: major findings, mechanisms and recommendations",
      link: "https://www.nature.com/articles/s41579-022-00846-2",
    },
    {
      id: 10,
      title: "Disease Outbreak News (DONs)",
      link: "https://www.who.int/emergencies/disease-outbreak-news",
    },
    {
      id: 11,
      title: "31 Yoga Poses for Beginners",
      link: "https://www.verywellfit.com/essential-yoga-poses-for-beginners-3566747",
    },
    {
      id: 12,
      title: "Long COVID: major findings, mechanisms and recommendations",
      link: "https://www.nature.com/articles/s41579-022-00846-2",
    },
    {
      id: 13,
      title: "Long COVID: major findings, mechanisms and recommendations",
      link: "https://www.nature.com/articles/s41579-022-00846-2",
    },
    
  ];

  return (
    <div className="p-4   dark:bg-gray-900 dark:text-blue-200 w-full h-screen mt-10 xl:mt-20 font-sans ">
      <div className="flex justify-center">
        <h2 className="w-full font-playfair p-5 justify-start flex font-bold text-3xl md:text-4xl text-blue-400 dark:text-cyan-600 ">
          Blogs
        </h2>
      </div>
     <div className="flex ">
       <div className="flex flex-col overflow-y-scroll scrollbar-hide justify-between  dark:bg-gray-900 dark:text-blue-200  h-[500px] ">
         {/* leftside component */}
      
         {/* <Slider {...settings} className="lg:w-[870px]"> */}
           <BlogCards
             img="https://www.uab.edu/news/images/2018/Five_tips_Stream.jpg"
             title="Health Diets and it's Benefits"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
               nisi ex hic s!"
           />
           <BlogCards
             img="https://www.sterillium.info/-/media/disinfection/sterillium/img/how-do-viruses-spread/ph_sterillium_stories_wie_verbreiten_sich_viren_stage_1440x1100.jpg?h=1100&iar=0&mw=1440&w=1440&rev=473dac98b0df40a5b5cc6bb940a4d42e&sc_lang=en&hash=DA96C95EC9F3290AF35F6696C10D42FC"
             title="Corona-Virus updates"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
               nisi ex hic perferendis atque minima ad sit saepe ducimus quas enim
               provident facilis!"
           />
           <BlogCards
             img="https://manalombok.com/wp-content/uploads/2018/05/backlit-beach-dawn-588561.jpg"
             title="Benefits yoga"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
               nisi ex hic atque minima ad sit saepe ducimus quas enim
               provident facilis!"
           />
           <BlogCards
             img="https://hips.hearstapps.com/hmg-prod/images/dumbbells-gym-64a3f4bc2fe31.jpg"
             title="Reasons why should you join gym"
             description="Lo atque minima ad sit saepe ducimus quas enim
               provident facilis!"
           />
           <BlogCards
             img="https://doctorshub.ae/wp-content/uploads/2023/05/PERSONAL-HYGIENE.jpg"
             title="Basic Hygine"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
               nisi ex hic v minima ad sit saepe ducimus quas enim
               provident facilis!"
           />
         {/* </Slider> */}
       </div >
         <div className="xl:flex  mx-5 flex-col h-[500px] w-[400px] bg-g-500 rounded-lg bg-opacity-15 hidden ">
           <div className="flex w-full justify-center">
             <h2 className="opacity-1 p-2 text-xl capitalize font-bold font-rob">
               expore more contents
             </h2>
           </div>
      
           <div className="px-4 font-playfair text-sm shadow shadow-sky-500">
             {related.map((items) => (
               <a
                 key={items.id}
                 href={items.link}
                 target="_blank"
                 rel="noreferrer"
               >
                 <p className="text-md hover:underline py-1">{items.title}</p>
               </a>
             ))}
           </div>
         </div>
     </div>
    </div>
  );
}

export default Blogs;

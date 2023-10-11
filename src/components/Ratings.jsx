import React from "react";
import stars from "../assets/social-proof-section-master/images/icon-star.svg";
const imgCSS = "px-1  h-7/12";

const imgContainer =
  "hover:scale-[110%] duration-300 flex flex-col lg:flex-row items-center w-[80%] lg:w-[65%] py-1 lg:py-0 my-2 rounded-xl bg-[#f7f2f8]";

const imgContainer2 =
  "hover:scale-[110%] duration-300 flex flex-col lg:flex-row items-center w-[80%] lg:w-[65%] py-1 lg:py-0 lg:ml-[5rem] my-2 rounded-xl bg-[#f7f2f8]";
const imgContainer3 =
  "hover:scale-[110%] duration-300 flex flex-col lg:flex-row items-center w-[80%] lg:w-[65%] py-1 lg:py-0 lg:ml-[10rem] my-2 rounded-xl bg-[#f7f2f8]";

const starsContainer =
  "px-7 py-2 lg:py-5 flex flex-row justify-center items-center";
const textCSS = "text-[#522150] font-bold";

const Ratings = () => {
  return (
    <article className="flex flex-col w-full justify-center items-center">
      <div className={imgContainer}>
        <div className={starsContainer}>
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
        </div>
        <span className={textCSS}>Rated 5 Stars in Reviews</span>
      </div>
      <div className={imgContainer2}>
        <div className={starsContainer}>
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
        </div>
        <span className={textCSS}>Rated 5 Stars in Report Guru</span>
      </div>
      <div className={imgContainer3}>
        <div className={starsContainer}>
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
          <img src={stars} alt="stars" className={imgCSS} />
        </div>
        <span className={textCSS}>Rated 5 Stars in BestTech</span>
      </div>
    </article>
  );
};

export default Ratings;

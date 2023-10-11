import React from "react";

import coltenSmith from "../assets/social-proof-section-master/images/image-colton.jpg";
import ireneRoberts from "../assets/social-proof-section-master/images/image-irene.jpg";
import anneWallace from "../assets/social-proof-section-master/images/image-anne.jpg";

const divMainCSS =
  "flex flex-col lg:flex-row justify-between lg:justify-evenly py-8 lg:py-0 items-center";
const commentContainer =
  "hover:scale-[110%] duration-300 w-[90%] lg:w-[30%] flex flex-col bg-[#522150] rounded-lg px-8 my-2 py-6";
const commentContainer2 =
  "hover:scale-[110%] duration-300 w-[90%] lg:w-[30%] flex flex-col bg-[#522150] rounded-lg px-8 py-6 my-2 lg:mt-10";
const commentContainer3 =
  "hover:scale-[110%] duration-300 w-[90%] lg:w-[30%] flex flex-col bg-[#522150] rounded-lg px-8 py-6 my-2 lg:mt-20";
const headerContainer = "flex flex-row w-3/4 mt-3 mb-6";
const imgCSS = "rounded-full w-[2.5rem] h-[2.5rem] mr-5 ";
const headerTextDiv = "flex flex-col w-full";
const personName = "font-bold text-white text-sm";
const verifiedBuyer = "font-semibold text-[#a5518a] text-sm";
const comment = "text-white";

const Comments = () => {
  return (
    <div className={divMainCSS}>
      <article className={commentContainer}>
        <div className={headerContainer}>
          <img src={coltenSmith} alt="coltenSmith" className={imgCSS} />
          <div className={headerTextDiv}>
            <h1 className={personName}>Colten Smith</h1>
            <span className={verifiedBuyer}>Verified Buyer</span>
          </div>
        </div>
        <p className={comment}>
          " We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! "
        </p>
      </article>
      <article className={commentContainer2}>
        <div className={headerContainer}>
          <img src={ireneRoberts} alt="ireneRoberts" className={imgCSS} />
          <div className={headerTextDiv}>
            <h1 className={personName}>Irene Roberts</h1>
            <span className={verifiedBuyer}>Verified Buyer</span>
          </div>
        </div>
        <p className={comment}>
          " Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </p>
      </article>
      <article className={commentContainer3}>
        <div className={headerContainer}>
          <img src={anneWallace} alt="anneWallace" className={imgCSS} />
          <div className={headerTextDiv}>
            <h1 className={personName}>Anne Wallace</h1>
            <span className={verifiedBuyer}>Verified Buyer</span>
          </div>
        </div>
        <p className={comment}>
          " Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone! "
        </p>
      </article>
    </div>
  );
};

export default Comments;

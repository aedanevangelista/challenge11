import React from "react";
const h1CSS =
  "text-4xl lg:text-5xl font-bold lg:pr-[5rem] text-[#522150] py-4 leading-10";
const pCSS = "pr-[2rem] text-[#522150]";
const Users = () => {
  return (
    <article className="flex flex-col lg:w-2/3 p-12 text-center lg:text-left">
      <h1 className={h1CSS}>10,000+ of our users love our products.</h1>
      <p className={pCSS}>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </article>
  );
};

export default Users;

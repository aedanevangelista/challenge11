import React from "react";
import Header from "./Header";
import Comments from "./Comments";
const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center min-[1600px]:px-[24rem] min-h-screen font-League">
      <Header />
      <Comments />
    </main>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "../../globalStyle/Style.css"
const Naveen = () => {

  const opts = {
    height: '350',
    width: '400',
    margin:"auto",
    playerVars: {
    },
  };


  return (
    <div className=" py-8 ">
      <div className=" md:mx-auto">
        <div className="mb-4 justify-center flex flex-col text-center">
          <h2 className="text-2xl font-bold">Naveen Sir</h2>
          <p className="text-lg">
            Step into the World of Bollywood Dance: Free Dance Steps Mastery
            with Naveen Sir, Your Guide with Over 15 Years of Experience in the
            Art of Dance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between">
          <div className="md:col-span-1 p-4">
            <YouTube videoId={"LGakGY8CQBM"} opts={opts} className={"you-tube"}                  />
          </div>
       
          <div className="md:col-span-1 p-4">
            <YouTube opts={opts} videoId={"7NtaQf7ZE-c"} />
          </div>
          <div className="md:col-span-1 p-4">
            <YouTube opts={opts} videoId={"rxelGGuot-8"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naveen;

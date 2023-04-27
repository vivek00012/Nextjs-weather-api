import React from "react";
import Image from "next/image";
const Weather = ({ data }) => {
  console.log(data);

  return (
    <div className="relative pt-4  mx-10 w-full text-white  flex  flex-col justify-between items-center z-10">
    <span>{data.name}</span>

      <div className="relative p-15 flex justify-between bg-white/30 rounded-lg items-center width-50 p-10 ">
        <div className="flex flex-col items-center ">
          <div className="h-[150px]">
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
                `}
              alt="/"
              width="100"
              height="100"
            />
          </div>
          <p className="text-2xl ">{data.weather[0]?.main}</p>
        </div>
        <p className="text-8xl">{data?.main?.temp.toFixed(0)}&#176;</p>
      </div>
      <hr className ="border-color: rgb(253 186 116) w-full mt-10" />
      <div className="relative bg-black/40 h-auto mt-10 z-10 grid grid-cols-3 divide-x width-80 pt-20 pb-20">
         <div className ="flex flex-col items-center justify-between">
            <span className="p-5 text-4xl">{data.main.feels_like.toFixed(0)}&#176;F</span>
            <span className="p-5">Feels Like</span>
         </div>
         <div className="flex flex-col items-center justify-between">
            <span className="p-5 text-4xl">{data.main.humidity}%</span>
            <span className="p-5">Humidity</span>
        </div>
         <div className="flex flex-col items-center justify-between">
           <span className="p-5 text-4xl">{data.wind.speed.toFixed(0)} MPH</span>
            <span className="p-5">Winds</span>
         </div>
      </div>
    </div>
  );
};

export default Weather;

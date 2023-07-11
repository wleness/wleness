import React from "react";
import { LeftBlob, RightBlob } from "../assets";

const Internship = () => {
  return (
    <section
      id="internship"
      className="p-5 md:my-16 md:py-48 sm:h-[800px] relative z-10 overflow-hidden"
    >
      <img
        className="hidden sm:block sm:absolute right-[-150px] top-[-10px]"
        src={RightBlob}
      ></img>
      <img className="absolute left-[-150px]" src={LeftBlob}></img>

      <div className="md:flex justify-center items-center p flex-col my-4">
        <p className="text-6xl w-[90%] sm:w-full md:text-center leading-[85px] font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
          Looking for an internship?
        </p>
        <p className="text-2xl w-[90%] sm:w-full md:text-center sm:px-4">
          Upload your CV and make a positive impact on peoples life by joining
          our internship program!
        </p>
        <button className="mt-8 font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#2FC4B1] border-none rounded-[12px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Internship;

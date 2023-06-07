import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize the article with{" "}
        <br
          className="max-md:hidden"
        />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Make Easy to read a long open-sourc article. </h2>
    </header>
  );
};

export default Hero;

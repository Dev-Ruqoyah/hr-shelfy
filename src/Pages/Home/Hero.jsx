import { useState } from "react";
import HeroButton from "../../Component/Button/Button";
import SButton from "../../Component/Button/Sbutton";
import BookFetch from "../../Component/Fetch/bookfetch";
import NavBar from "../../Component/NavBar/NavBar";
import hero from "../../assets/heroimage.png"

const Hero = () => {

  

  

  return (
    <>
      <div className="bg-primary h-screen">
        {/* Fetch Book Data */}
       

        <div className="container mx-auto h-[86%]">
          <NavBar />

          {/* Hero Section */}
          <div className="grid md:grid-cols-2 lg:ps-16 px-5 h-full">
            {/* Text Content */}
            <div className="flex flex-col gap-3  items-center justify-center my-auto mx-auto">
              <h1 className="font-bold  text-3xl  lg:text-6xl md:text-5xl text-supporting">
                Discover, Learn, and Escape Through the Power of Books.
              </h1>
              <p className="md:text-xl  text-supporting">
                Your gateway to a world of knowledge, imagination, and
                inspiration.
              </p>
              <div className="flex   w-full  justify-start gap-4">
                <HeroButton text={"Explore "} />
                <SButton text={"Start Reading"} />
              </div>
            </div>

            {/* Book Image */}
            <div className="flex justify-center items-center ">
            <img src={hero} alt="" className="w-[85%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import Contact_card from "../Contact_card/Contact_card";
import backgroundVideo from "../../Images/4954759_Coll_halloween_Dusty_6144x3456.mp4";

export default function ContactWrapper() {
  return (
    <div id="contact" className="relative bg-black w-full min-h-screen flex flex-col px-4 py-10">
      {/* Optional Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <h2 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl text-center sm:text-left sm:pl-[3rem]">
        Contact me
      </h2>

      <div className="mt-16 flex justify-center items-center w-full">
        <Contact_card />
      </div>
    </div>
  );
}

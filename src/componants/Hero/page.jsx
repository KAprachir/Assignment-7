import React from "react";
import { BiPlus } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="hero min-h-[60vh] bg-base-100 px-4">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-base-content">
            Friends to keep close in your life
          </h1>

          <p className="py-5 text-lg md:text-xl text-base-content/70 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="flex justify-center">
            <button className="btn bg-[#244D3F] text-white gap-2 shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              <BiPlus className="text-2xl" />
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

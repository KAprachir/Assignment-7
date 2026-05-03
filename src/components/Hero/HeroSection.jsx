"use client";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 py-16 md:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral leading-[1.1]"
          >
            Friends to keep close <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              in your life
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-neutral/60 leading-relaxed max-w-2xl mx-auto"
          >
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button className="btn-premium group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
              <div className="bg-white/20 p-1 rounded-lg group-hover:rotate-90 transition-transform duration-300">
                <BiPlus className="text-xl" />
              </div>
              Add New Friend
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


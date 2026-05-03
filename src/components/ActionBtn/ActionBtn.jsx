"use client";
import React from "react";
import { FiPhone, FiVideo } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ActionBtn = ({ friend }) => {
  return (
    <div className="card-premium p-8">
      <h3 className="text-neutral font-bold text-lg mb-6">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <CheckInButton friend={friend} icon={<FiPhone />} label="Call" color="hover:text-blue-500 hover:bg-blue-50" />
        <CheckInButton
          friend={friend}
          icon={<HiOutlineChatBubbleLeftRight />}
          label="Text"
          color="hover:text-emerald-500 hover:bg-emerald-50"
        />
        <CheckInButton friend={friend} icon={<FiVideo />} label="Video" color="hover:text-rose-500 hover:bg-rose-50" />
      </div>
    </div>
  );
};

const CheckInButton = ({ icon, label, friend, color }) => {
  const handleClick = (friend) => {
    const newLog = {
      friendName: friend.name,
      type: label,
      date: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("checkin_logs") || "[]");
    existing.push(newLog);
    localStorage.setItem("checkin_logs", JSON.stringify(existing));
    toast.success(`${label} with ${friend.name} logged!`, {
      style: {
        borderRadius: '12px',
        background: '#333',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    });
  };

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleClick(friend)}
      className={`flex flex-col items-center justify-center p-6 md:p-8 border border-slate-100 rounded-2xl transition-all group ${color}`}
    >
      <div className="text-2xl md:text-3xl mb-3 text-neutral/60 transition-colors group-hover:text-inherit">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-bold text-neutral/40 transition-colors group-hover:text-inherit uppercase tracking-wide">
        {label}
      </span>
    </motion.button>
  );
};

export default ActionBtn;


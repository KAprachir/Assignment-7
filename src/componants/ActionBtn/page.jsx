"use client";
import React from "react";
import { FiPhone, FiVideo } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import toast from "react-hot-toast";

const ActionBtn = ({ friend }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="text-gray-800 font-bold text-lg mb-6">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-6">
        <CheckInButton friend={friend} icon={<FiPhone />} label="Call" />
        <CheckInButton
          friend={friend}
          icon={<HiOutlineChatBubbleLeftRight />}
          label="Text"
        />
        <CheckInButton friend={friend} icon={<FiVideo />} label="Video" />
      </div>
    </div>
  );
};

const CheckInButton = ({ icon, label, friend }) => {
  const handleClick = (friend) => {
    const newLog = {
      friendName: friend.name,
      type: label,
      date: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("checkin_logs") || "[]");
    existing.push(newLog);
    localStorage.setItem("checkin_logs", JSON.stringify(existing));
    toast.success(`${label} with ${friend.name} logged!`);
  };

  return (
    <button
      onClick={() => handleClick(friend)}
      className="flex flex-col items-center justify-center p-8 border border-gray-50 rounded-3xl hover:bg-blue-50 hover:border-blue-100 transition-all group"
    >
      <div className="text-3xl mb-3 text-gray-700 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600">
        {label}
      </span>
    </button>
  );
};

export default ActionBtn;

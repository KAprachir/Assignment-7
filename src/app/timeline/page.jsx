"use client";
import React, { useState, useEffect } from "react";
import {
  HiChatBubbleLeftRight,
  HiPhone,
  HiVideoCamera,
  HiUsers,
  HiChevronDown,
} from "react-icons/hi2";

const TimelinePage = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("checkin_logs") || "[]");
    const sorted = stored.sort((a, b) => new Date(b.date) - new Date(a.date));
    setLogs(sorted);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getIcon = (type) => {
    switch (type) {
      case "Text":
        return <HiChatBubbleLeftRight className="w-5 h-5 text-gray-400" />;
      case "Call":
        return <HiPhone className="w-5 h-5 text-gray-700" />;
      case "Video":
        return <HiVideoCamera className="w-5 h-5 text-gray-700" />;
      case "Meetup":
      default:
        return <HiUsers className="w-5 h-5 text-yellow-500" />;
    }
  };

  const filteredLogs =
    filter === "All" ? logs : logs.filter((log) => log.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Timeline</h1>

      <div className="relative mb-8 w-full md:w-72">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-50 cursor-pointer"
        >
          <option value="All">Filter timeline</option>
          <option value="Meetup">Meetup</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
          <HiChevronDown className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredLogs.map((log, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="shrink-0 flex items-center justify-center">
              {getIcon(log.type)}
            </div>

            <div>
              <p className="text-[17px] text-gray-800 font-semibold">
                {log.type}{" "}
                <span className="text-gray-400 font-normal">
                  with {log.friendName}
                </span>
              </p>
              <p className="text-sm text-gray-400 font-normal mt-0.5">
                {formatDate(log.date)}
              </p>
            </div>
          </div>
        ))}

        {filteredLogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-300 text-lg font-light italic">
              No activity logs found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;

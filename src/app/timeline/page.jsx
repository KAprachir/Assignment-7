"use client";
import React, { useState, useEffect } from "react";

const TimelinePage = () => {
  const [logs, setLogs] = useState([]);

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

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>
      <div className="space-y-3">
        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
          >
            <p className="font-bold text-gray-800">
              {log.type}{" "}
              <span className="font-normal text-gray-500">
                with {log.friendName}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{formatDate(log.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;

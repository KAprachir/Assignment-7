"use client";
import React, { useEffect, useState } from "react";

const StatsBar = () => {
  const [friends, setFriends] = useState([]);
  const [interactionsThisMonth, setInteractionsThisMonth] = useState(0);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));

    const logs = JSON.parse(localStorage.getItem("checkin_logs") || "[]");
    const now = new Date();
    const thisMonth = logs.filter((log) => {
      const logDate = new Date(log.date);
      return (
        logDate.getMonth() === now.getMonth() &&
        logDate.getFullYear() === now.getFullYear()
      );
    });
    setInteractionsThisMonth(thisMonth.length);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(
    (f) => f.status.toLowerCase() === "on-track",
  ).length;
  const needAttention = friends.filter(
    (f) =>
      f.status.toLowerCase() === "overdue" ||
      f.status.toLowerCase() === "almost due",
  ).length;

  const stats = [
    { value: totalFriends, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: interactionsThisMonth, label: "Interactions This Month" },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
          >
            <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;

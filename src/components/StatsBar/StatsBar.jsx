"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    { value: totalFriends, label: "Total Friends", color: "text-primary" },
    { value: onTrack, label: "On Track", color: "text-emerald-500" },
    { value: needAttention, label: "Need Attention", color: "text-amber-500" },
    { value: interactionsThisMonth, label: "This Month", color: "text-secondary" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 -mt-8 relative z-20">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="card-premium p-6 text-center"
          >
            <p className={`text-3xl md:text-5xl font-black ${stat.color} tracking-tight`}>
              {stat.value}
            </p>
            <p className="text-xs md:text-sm font-semibold text-neutral/40 mt-2 uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsBar;


"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("checkin_logs") || "[]");

    const counts = stored.reduce((acc, log) => {
      acc[log.type] = (acc[log.type] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key],
    }));

    setData(chartData);
  }, []);

  const COLORS = {
    Text: "#6366f1", 
    Call: "#8b5cf6", 
    Video: "#ec4899", 
    Meetup: "#f59e0b",
  };

  return (
    <div className="bg-base-200 min-h-screen py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-neutral tracking-tight mb-2">
            Friendship Analytics
          </h1>
          <p className="text-neutral/40 font-medium uppercase tracking-widest text-xs">
            Insights into your social health
          </p>
        </div>

        <div className="card-premium p-10 md:p-16">
          <h2 className="text-lg font-bold text-neutral mb-10 text-center">
            Distribution of Interactions
          </h2>

          <div className="h-80 w-full flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name] || "#E5E7EB"}
                      style={{ outline: "none" }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                    padding: "12px 16px",
                    fontWeight: "700",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: COLORS[entry.name] }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-neutral/30 uppercase tracking-widest leading-none mb-1">{entry.name}</span>
                    <span className="text-sm font-bold text-neutral/70">{entry.value} logged</span>
                  </div>
                </div>
              ))}
              {data.length === 0 && (
                <p className="text-neutral/40 font-medium italic">No interaction logs found yet.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsPage;


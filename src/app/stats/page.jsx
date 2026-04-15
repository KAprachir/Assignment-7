"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

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
    Text: "#8B5CF6", 
    Call: "#1E3F35", 
    Video: "#34D399", 
    Meetup: "#FBBF24",
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-sm font-medium text-gray-500 mb-4">
          By Interaction Type
        </h2>

        <div className="h-75 w-full flex flex-col items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={8}
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
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex gap-6 mt-4">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[entry.name] }}
                />
                <span className="text-xs text-gray-400">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;

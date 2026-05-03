"use client";
import Image from "next/image";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import ActionBtn from "@/components/ActionBtn/ActionBtn";
import { motion } from "framer-motion";
import React, { use, useState, useEffect } from "react";

const FriendDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const { id } = params;

  // Since this is a client component now for animations/hooks, we need to fetch or use a pattern that works.
  // Actually, I'll keep it as a client component but handle the data fetching.
  // Wait, the original was a server component. I'll make it a client component to support animations.
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://keen-keeper-nine-brown.vercel.app/friends.json")
      .then(res => res.json())
      .then(friends => {
        const found = friends.find((f) => f.id === parseInt(id));
        setFriend(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="loading loading-spinner loading-lg text-primary"></div>
    </div>
  );

  if (!friend)
    return <div className="p-10 text-center font-bold">Friend not found</div>;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-base-200 min-h-screen py-12 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Left Column: Profile Card & Actions */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="card-premium p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
              
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
                  <Image
                    src={friend.picture}
                    alt={friend.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl font-black text-neutral leading-tight tracking-tight">
                {friend.name}
              </h1>

              <div className="flex flex-col items-center gap-2 mt-4">
                <span
                  className={`px-6 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-sm ${
                    friend.status === "overdue" ? "bg-rose-500" : "bg-amber-400"
                  }`}
                >
                  {friend.status}
                </span>
                <span className="px-4 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase border border-primary/10">
                  {friend.tags[0]}
                </span>
              </div>

              <p className="mt-8 text-neutral/50 italic text-sm leading-relaxed px-2">
                &ldquo;{friend.bio}&rdquo;
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-[11px] font-bold text-neutral/30 uppercase tracking-widest mb-1">
                  Preferred Contact
                </p>
                <p className="text-sm font-bold text-neutral/60">
                  {friend.email.split("@")[0]}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="btn-premium w-full py-4 bg-white text-neutral/70 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 border border-white hover:bg-slate-50">
                <RiNotificationSnoozeLine className="text-lg text-primary" /> Snooze 2 Weeks
              </button>
              <button className="btn-premium w-full py-4 bg-white text-neutral/70 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 border border-white hover:bg-slate-50">
                <FiArchive className="text-lg text-amber-500" /> Archive
              </button>
              <button className="btn-premium w-full py-4 bg-white text-rose-500 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 border border-rose-50 hover:bg-rose-50/50">
                <RiDeleteBinLine className="text-lg" /> Delete
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Goals */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard
                value={friend.days_since_contact}
                label="Days Since Contact"
                color="text-primary"
              />
              <StatCard value={friend.goal} label="Goal (Days)" color="text-neutral" />
              <StatCard
                value={formatDate(friend.next_due_date)}
                label="Next Due"
                isDate
                color="text-secondary"
              />
            </div>

            <div className="card-premium p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-neutral font-black text-xl mb-1 tracking-tight">
                  Relationship Goal
                </h3>
                <p className="text-neutral/40 font-medium">
                  You aim to connect with {friend.name} every{" "}
                  <span className="font-bold text-primary">
                    {friend.goal} days
                  </span>
                </p>
              </div>
              <button className="btn-premium px-8 py-3 bg-neutral text-white rounded-xl text-sm font-bold hover:bg-neutral/90">
                Adjust Goal
              </button>
            </div>

            <ActionBtn friend={friend} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({ value, label, isDate, color }) => (
  <div className="card-premium p-8 text-center flex flex-col justify-center h-full">
    <div
      className={`font-black tracking-tight ${color} ${isDate ? "text-xl" : "text-5xl"}`}
    >
      {value}
    </div>
    <div className="text-neutral/30 text-[10px] font-black mt-3 uppercase tracking-widest leading-none">
      {label}
    </div>
  </div>
);

export default FriendDetailsPage;


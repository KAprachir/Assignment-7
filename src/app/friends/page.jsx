"use client";
import { use, Suspense } from "react";
import FriendsCard from "@/components/FriendsCard/FriendsCard";
import { motion } from "framer-motion";

const FriendsList = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 px-4"
    >
      {friends.map((friend) => (
        <FriendsCard key={friend.id} friend={friend} />
      ))}
    </motion.div>
  );
};

const Friends = () => {
  const friendsPromise = fetch(
    "https://keen-keeper-nine-brown.vercel.app/friends.json",
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <div className="container mx-auto mt-12">
      <div className="px-4 mb-8">
        <h2 className="text-3xl font-black text-neutral tracking-tight">Your Friends</h2>
        <p className="text-neutral/50 font-medium mt-1">Keep track of your meaningful connections</p>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-white rounded-3xl animate-pulse border border-slate-100" />
            ))}
          </div>
        }
      >
        <FriendsList friendsPromise={friendsPromise} />
      </Suspense>
    </div>
  );
};

export default Friends;


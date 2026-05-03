"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FriendsCard = ({ friend }) => {
  const { id, name, days_since_contact, tags, status, picture } = friend;

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-rose-500 text-white";
      case "almost due":
        return "bg-amber-400 text-white";
      case "on-track":
        return "bg-emerald-500 text-white";
      default:
        return "bg-slate-400 text-white";
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div variants={item}>
      <Link href={`/friends/${id}`} className="block group">
        <div className="card-premium h-full flex flex-col items-center p-8 text-center relative overflow-hidden">
          {/* Status Ribbon/Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${getStatusStyles(status)}`}>
            {status}
          </div>

          <div className="relative w-20 h-20 mb-4 p-1 rounded-full border-2 border-slate-100 group-hover:border-primary/30 transition-colors duration-500">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={picture}
                alt={name}
                fill
                sizes="80px"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-neutral group-hover:text-primary transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <p className="text-neutral/40 text-xs font-semibold mt-1 mb-4 uppercase tracking-wide">
            {days_since_contact} days ago
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase rounded-lg border border-slate-100 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FriendsCard;


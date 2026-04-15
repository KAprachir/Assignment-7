import React from "react";
import Image from "next/image";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive, FiPhone, FiVideo } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  const friend = friends.find((f) => f.id === parseInt(id));

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
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100">
            <div className="relative w-24 h-24 mx-auto mb-4 border-4 border-white shadow-sm rounded-full overflow-hidden">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              {friend.name}
            </h1>

            <div className="flex flex-col items-center gap-2 mt-4">
              <span
                className={`px-5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-white ${
                  friend.status === "overdue" ? "bg-red-500" : "bg-orange-400"
                }`}
              >
                {friend.status}
              </span>
              <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase border border-green-100">
                {friend.tags[0]}
              </span>
            </div>

            <p className="mt-6 text-gray-500 italic text-sm px-2">
              &quot;{friend.bio}&quot;
            </p>
            <p className="text-[11px] text-gray-400 mt-4">
              Preferred:{" "}
              <span className="text-gray-500">
                {friend.email.split("@")[0]}
              </span>
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3 bg-white border border-gray-100 rounded-2xl text-sm font-semibold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
              <RiNotificationSnoozeLine className="text-lg" /> Snooze 2 Weeks
            </button>
            <button className="w-full py-3 bg-white border border-gray-100 rounded-2xl text-sm font-semibold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
              <FiArchive className="text-lg" /> Archive
            </button>
            <button className="w-full py-3 bg-white border border-red-50 text-red-400 rounded-2xl text-sm font-semibold flex items-center justify-center gap-3 hover:bg-red-50 transition-all">
              <RiDeleteBinLine className="text-lg" /> Delete
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              value={friend.days_since_contact}
              label="Days Since Contact"
            />
            <StatCard value={friend.goal} label="Goal (Days)" />
            <StatCard
              value={formatDate(friend.next_due_date)}
              label="Next Due"
              isDate
            />
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-gray-800 font-bold text-lg mb-1">
                Relationship Goal
              </h3>
              <p className="text-gray-400 font-medium">
                Connect every{" "}
                <span className="font-bold text-gray-800">
                  {friend.goal} days
                </span>
              </p>
            </div>
            <button className="px-6 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              Edit
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <CheckInButton icon={<FiPhone />} label="Call" />
              <CheckInButton
                icon={<HiOutlineChatBubbleLeftRight />}
                label="Text"
              />
              <CheckInButton icon={<FiVideo />} label="Video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label, isDate }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
    <div
      className={`font-bold text-gray-800 ${isDate ? "text-xl" : "text-4xl"}`}
    >
      {value}
    </div>
    <div className="text-gray-400 text-xs font-semibold mt-2 uppercase tracking-wide">
      {label}
    </div>
  </div>
);

const CheckInButton = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center p-8 border border-gray-50 rounded-3xl hover:bg-blue-50 hover:border-blue-100 transition-all group">
    <div className="text-3xl mb-3 text-gray-700 group-hover:text-blue-600 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600">
      {label}
    </span>
  </button>
);

export default FriendDetailsPage;

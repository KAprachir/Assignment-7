import { use, Suspense } from "react";
import FriendsCard from "@/componants/FriendsCard/page";
import path from "path";
import fs from "fs";

const FriendsList = ({ friendsPromise }) => {
  const friends = friendsPromise;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      {friends.map((friend) => (
        <FriendsCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

const Friends = () => {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const friendsPromise = JSON.parse(fileData);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold p-2">Your Friends</h2>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
      >
        <FriendsList friendsPromise={friendsPromise} />
      </Suspense>
    </div>
  );
};

export default Friends;

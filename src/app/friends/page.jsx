import { use, Suspense } from "react";
import FriendsCard from "@/componants/FriendsCard/page";

const FriendsList = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      {friends.map((friend) => (
        <FriendsCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

const Friends = () => {
  const friendsPromise = fetch("http://localhost:3000/friends.json", {
    cache: "no-store",
  }).then((res) => res.json());

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

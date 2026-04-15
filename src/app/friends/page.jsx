import { use } from "react";
import FriendsCard from "@/componants/FriendsCard/page";

const Friends = () => {
  const friendsData = fetch("http://localhost:3000/friends.json").then((res) =>
    res.json(),
  );
  const friends = use(friendsData);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
      <div>
        {friends.map((friend) => {
          return <FriendsCard key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;

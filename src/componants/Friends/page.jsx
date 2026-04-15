import { use } from "react";

const Friends = () => {
  const friendsData = fetch("http://localhost:3000/friends.json").then((res) =>
    res.json(),
  );
  const friends = use(friendsData);
  console.log(friends);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
    </div>
  );
};

export default Friends;

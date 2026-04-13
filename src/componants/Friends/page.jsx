const Friends = async () => {
  const res = await fetch("friends.json");
  const friends = await res.json();
  console.log(friends);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
    </div>
  );
};

export default Friends;

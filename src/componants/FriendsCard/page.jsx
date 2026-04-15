const FriendsCard = ({ friend }) => {
  const { id, name, days_since_contact, tags, status } = friend;

  return (
    <div className="border p-4 m-2 rounded shadow">
      <h1 className="text-xl font-bold">{name}</h1>
      <p>Status: {status}</p>
      <p>Last contacted: {days_since_contact} days ago</p>
    </div>
  );
};
export default FriendsCard;

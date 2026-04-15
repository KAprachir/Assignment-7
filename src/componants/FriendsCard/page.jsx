import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friend }) => {
  const { id, name, days_since_contact, tags, status, picture } = friend;

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-orange-400 text-white";
      case "on-track":
        return "bg-emerald-700 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <Link href={`/friends/${id}`}>
      <div className="flex flex-col items-center p-6 m-3 bg-white rounded-xl shadow-sm border border-gray-50 text-center">
        <div className="relative w-16 h-16 mb-3">
          <Image
            src={picture}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-gray-800 leading-tight">
          {name}
        </h3>
        <p className="text-gray-400 text-xs mb-3">{days_since_contact}d ago</p>

        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md border border-green-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`px-5 py-1.5 text-xs font-bold rounded-full capitalize shadow-sm ${getStatusStyles(
            status,
          )}`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
};

export default FriendsCard;

import Image from "next/image";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = () => {
  // Placeholder data for requests
  const requests = [
    {
      id: 1,
      sender: {
        avatar: "/noAvatar.png",
        username: "senderUsername",
        name: "Sender",
        surname: "User",
      },
    },
    {
      id: 2,
      sender: {
        avatar: "/noAvatar.png",
        username: "anotherSender",
        name: "Another",
        surname: "User",
      },
    },
    // Add more placeholder requests as needed
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;

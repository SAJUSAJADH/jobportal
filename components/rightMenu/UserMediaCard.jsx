import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ user }) => {
  // Placeholder data for demonstration
  const postsWithMedia = [
    { id: 1, img: "https://via.placeholder.com/150" },
    { id: 2, img: "https://via.placeholder.com/150" },
    { id: 3, img: "https://via.placeholder.com/150" },
    { id: 4, img: "https://via.placeholder.com/150" },
    { id: 5, img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/5 h-24" key={post.id}>
                <Image
                  src={post.img}
                  alt=""
                 
                  className="object-cover rounded-md"
                  width={150}
                  height={150}
                />
              </div>
            ))
          : "No media found!"}
      </div>
    </div>
  );
};

export default UserMediaCard;

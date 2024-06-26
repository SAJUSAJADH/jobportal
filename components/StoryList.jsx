"use client";

import { addStory } from "@/libs/actions";
import Image from "next/image";
import { useOptimistic, useState } from "react";

// Function to generate fake user data
const generateFakeUser = () => ({
  id: "fakeUserId",
  username: "fakeuser123",
  imageUrl: "https://fakeurl.com/avatar.jpg", // Replace with actual URL or use a placeholder
});

const StoryList = ({ stories, userId }) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState();

  // Generate fake user data
  const fakeUser = generateFakeUser();

  const add = async () => {
    if (!img?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: "/noAvatar.png", // Use fake user avatar URL
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory, ...prev]);
      setImg(null);
    } catch (err) {
      console.error("Error adding story:", err);
    }
  };

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value) => [value, ...state],
  );

  return (
    <>
      <div className="flex flex-col items-center gap-2 cursor-pointer relative">
        <Image
          src="/noAvatar.png"
          alt=""
          width={80}
          height={80}
          className="w-20 h-20 rounded-full ring-2 object-cover"
          onClick={() => open()} // Assuming `open` function is defined elsewhere
        />
        {img ? (
          <form action={add}>
            <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
              Send
            </button>
          </form>
        ) : (
          <span className="font-medium">Add a Story</span>
        )}
        <div className="absolute text-6xl text-gray-200 top-1">+</div>
      </div>

      {/* Render optimisticStories */}
      {optimisticStories.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
            src="/noAvatar.png"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
};

export default StoryList;

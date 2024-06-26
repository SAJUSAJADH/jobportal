import StoryList from "./StoryList";

const Stories = ({ currentUserId }) => {
  // Placeholder data for demonstration
  const stories = [
    {
      id: 1,
      expiresAt: new Date(),
      user: {
        id: 1,
        username: "user1",
        avatar: "https://via.placeholder.com/150",
      },
    },
    {
      id: 2,
      expiresAt: new Date(),
      user: {
        id: 2,
        username: "user2",
        avatar: "https://via.placeholder.com/150",
      },
    },
    {
      id: 3,
      expiresAt: new Date(),
      user: {
        id: 3,
        username: "user3",
        avatar: "https://via.placeholder.com/150",
      },
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
  );
};

export default Stories;

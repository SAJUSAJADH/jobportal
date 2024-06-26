import Post from "./Post";

const Feed = () => {
  // Fake data
  const posts = [
    {
      id: 1,
      content: "This is a fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 1,
        username: "fakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 1 }],
      _count: { comments: 2 },
    },
    {
      id: 2,
      content: "This is another fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 2 }],
      _count: { comments: 3 },
    },
    {
      id: 2,
      content: "This is another fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 2 }],
      _count: { comments: 3 },
    },
    {
      id: 2,
      content: "This is another fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 2 }],
      _count: { comments: 3 },
    },
    {
      id: 2,
      content: "This is another fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 2 }],
      _count: { comments: 3 },
    },
    {
      id: 2,
      content: "This is another fake post.",
      createdAt: new Date().toISOString(),
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
      },
      likes: [{ userId: 2 }],
      _count: { comments: 3 },
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No posts found!"}
    </div>
  );
};

export default Feed;

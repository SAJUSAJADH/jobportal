import Image from "next/image";
import CommentList from "./CommentList";

const Comments = () => {
  // Fake data
  const comments = [
    {
      id: 1,
      desc: "This is a fake comment.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 1,
      postId: 1,
      user: {
        id: 1,
        username: "fakeUser",
        avatar: "/noAvatar.png",
        cover: "",
        description: "",
        name: "Fake",
        surname: "User",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 2,
      desc: "This is another fake comment.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 2,
      postId: 1,
      user: {
        id: 2,
        username: "anotherFakeUser",
        avatar: "/noAvatar.png",
        cover: "",
        description: "",
        name: "Another",
        surname: "User",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date().toISOString(),
      },
    },
  ];

  const postId = 1;

  return (
    <div className="">
      {/* WRITE */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;

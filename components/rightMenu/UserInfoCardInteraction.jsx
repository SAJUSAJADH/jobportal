"use client";

import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = () => {
  const [userState, setUserState] = useState({
    following: false,
    blocked: false,
    followingRequestSent: false,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      // Simulating switchFollow action
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
      setUserState((prev) => ({
        ...prev,
        following: !prev.following,
        followingRequestSent: !prev.following ? true : false,
      }));
    } catch (err) {}
  };

  const block = async () => {
    switchOptimisticState("block");
    try {
      // Simulating switchBlock action
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (err) {}
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value) =>
      value === "follow"
        ? {
            ...state,
            following: !state.following,
            followingRequestSent: !state.following ? true : false,
          }
        : { ...state, blocked: !state.blocked },
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
              ? "Friend Request Sent"
              : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end ">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;

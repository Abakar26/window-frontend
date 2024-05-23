import React from "react";
import { useNavigate } from "react-router-dom";
import dummyImage from "../../../images/man.png";
import UserAvatar from "react-user-avatar";

// This component displays User Profile card, one which is on right nav in Collections page
const UserProfileCard = ({ follower }) => {
  console.log(follower);
  const navigate = useNavigate();
  return (
    <div
      className="flex w-full max-w-[180px] flex-row items-center justify-start mb-4 cursor-pointer"
      onClick={() => {
        navigate('/profile_collections', {
          state: { data: follower },
        });
      }}
    >
      {/* <img
        className="w-[48px] h-[48px] rounded-full mr-2"
        src={follower?.image ? follower?.image : dummyImage}
        alt="avatar"
      /> */}
      <UserAvatar
        size="48"
        name={`${follower.first_name.toUpperCase()} ${follower.last_name.toUpperCase()}`}
        colors={["grey"]}
      />
      <p className="ml-2 collection_profile_text">
        {follower.first_name + " " + follower.last_name}
      </p>
    </div>
  );
};

export default UserProfileCard;

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect } from "react";
import bookmarkimg2 from "../../../images/wdummy.jpeg";
import dummyImage from "../../../images/man.png";
import { useNavigate } from "react-router-dom";
import UserAvatar from "react-user-avatar";

const FollowersCollectionCard = (props) => {
  const navigate = useNavigate();
  const { collection } = props;
  let iterator = 0;
  useEffect(() => {
    if (props.collection.images.length < 5) {
      iterator = 5 - props.collection.images.length;
    }
  }, []);
  // This function adds collection to Favourite
  const addToFavourite = (id) => {};
  return (
    <>
      <div
        className="relative border border-[##E5E5E5] rounded-[18px] bg-[#ffffff] w-[388px] h-[265px] pt-4 px-6 pb-8 cursor-pointer"
        onClick={() => {
          navigate(`/collection_products`, {
            state: { data: collection.id, user: collection.user },
          });
        }}
      >
        <div className="flex flex-row justify-between mb-3">
          <div className="flex flex-col">
            <span className="dress_categ_text">
              {`${
                props.collection.name.length > 20
                  ? props.collection.name.substring(0, 20) + "..."
                  : props.collection.name
              }
            ${
              props.collection.name === "default"
                ? `(${props.collection.user.first_name})`
                : ""
            }`}
            </span>
            <span className="bookmark_label">{`${collection.total_products} saved products`}</span>
          </div>
          {/* Follower Profile Image Here */}
          <div className="flex max-w-[137px] h-[37px] w-full flex-row items-center justify-end">
            <UserAvatar
              size="48"
              name={`${collection.user.first_name.toUpperCase()} ${collection.user.last_name.toUpperCase()}`}
              colors={["grey"]}
            />
            {/* <img
              className="w-[48px] h-[48px] rounded-full mr-2"
              src={collection.user?.image ? collection.user.image : dummyImage}
              alt="avatar"
            /> */}
          </div>
        </div>
        <div className="flex flex-row relative wrapper">
          {collection.images.map((value, index) =>
            value === null ? (
              <img
                key={index}
                className="absolute w-[120px] h-[164px] rounded-2xl border-[3px] border-[#E5E5E5]"
                src={bookmarkimg2}
                alt=""
              />
            ) : (
              <img
                key={index}
                className="absolute w-[120px] h-[164px] rounded-2xl border-[3px]
                   border-[#fff] drop-shadow-[5px_0_10px_rgba(0,0,0,0.05)]"
                src={value}
                alt=""
              />
            )
          )}
          {[...Array(5)].map((val, index) => (
            <div
              key={index}
              className="absolute w-[120px] h-[164px] rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default FollowersCollectionCard;

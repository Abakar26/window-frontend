/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bookmarkimg2 from "../../../images/wdummy.jpeg";
import lock from "../../../images/svg/lock.svg";
import favouriteIcon from "../../../images/svg/favourite.svg";
import profileImage from "../../../images/profile1.png";
import unlock from "../../../images/svg/unlock.svg";

const BookmarksList = (props) => {
  const navigate = useNavigate();
  const [buttonToggle, setButtonToggle] = useState(props.collection.visibility);
  const userId = Number.parseInt(localStorage.getItem("user"));
  let iterator = 0;
  useEffect(() => {
    if (props.collection.images.length < 5) {
      iterator = 5 - props.collection.images.length;
    }
  }, []);
  const handleButton = () => {
    props.setCollectionId(props.collection?.id);
    props.setToggle(true);
    props.setName(props.collection.name);
    props.setCollectionProduct(props.collection.collection_product);
    props.setRemove(props.collection?.id);
    props.setSelectedCollection(props.collection);
  };
  const makeCollectionPrivate = (id) => {
    if (buttonToggle === "private") {
      setButtonToggle("public");
    } else {
      setButtonToggle("private");
    }
    if (props.collection.visibility === "private") {
      props.updateCollection(id, "public");
    } else {
      props.updateCollection(id, "private");
    }
  };
  return (
    <>
      <div
        className="relative border border-[##E5E5E5] rounded-[18px] bg-[#ffffff] w-[388px] h-[265px] pt-4
        px-6 pb-8 cursor-pointer"
      >
        <div className="flex flex-row justify-between mb-3">
          <div
            className="flex flex-col"
            onClick={() => {
              navigate(`/collection_products`, {
                state: { data: props.collection.id },
              });
            }}
          >
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
            <span className="bookmark_label">{`${props.collection.total_products} saved products`}</span>
          </div>
          {props.collection.user.id === userId && (
            <button
              type="button"
              className="max-w-[137px] w-full h-[37px] bg-[#9C0E43] rounded-[30px] bookmark_button_text"
              onClick={handleButton}
            >
              Edit Collection
            </button>
          )}
          {props.collection.user.id !== userId && (
            <div className="flex max-w-[137px] h-[37px] w-full flex-row items-center justify-end">
              <img
                className="w-[48px] h-[48px] rounded-full mr-2"
                src={profileImage}
                alt="avatar"
              />
            </div>
          )}
        </div>
        <div className="flex flex-row relative wrapper">
          {props.collection.images.map((value, index) =>
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
        {/* Adding Favourite Icon if that collection is liked by user */}
        {props.collection.user.id !== userId && props.collection.liked_by_user && (
          <div className="absolute bottom-2 right-4">
            <img src={favouriteIcon} alt="" />
          </div>
        )}
        {buttonToggle === "private" && props.collection.user.id === userId && (
          <div
            className="absolute bottom-2 right-4"
            onClick={() => {
              makeCollectionPrivate(props.collection.id);
            }}
          >
            <img src={lock} alt="" />
          </div>
        )}
        {buttonToggle === "public" && props.collection.user.id === userId && (
          <div
            className="absolute bottom-2 right-4"
            onClick={() => {
              makeCollectionPrivate(props.collection.id);
            }}
          >
            <img src={unlock} alt="" />
          </div>
        )}
      </div>
    </>
  );
};
export default BookmarksList;

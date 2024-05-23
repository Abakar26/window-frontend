import React from "react";
import dummyImage from "../../../../images/man.png";
import shareIcon from "../../../../images/svg/share.svg";
import favourite from "../../../../images/svg/favourite.svg";
import heartIcon from "../../../../images/heart.png";
import UserAvatar from "react-user-avatar";

const CollectionCard = ({
  collectionName,
  savedProducts,
  collection,
  handleShareClick,
  addToFav,
  deleteCollection,
  liked,
  setShared,
  token,
}) => {
  const userId = Number.parseInt(localStorage.getItem("user"));
  return (
    <>
      {/* This Div is for user Image */}
      {/* <div className="">
        <img
          className="w-[100px] sm:w-[50px] h-[100px] sm:h-[50px] rounded-full"
          src={collection.user?.image ? collection.user.image : dummyImage}
          alt="avtar"
        />
      </div> */}
      <UserAvatar
        // size="100"
        className="h-[100px] w-[100px] text-[30px] leading-[100px] sm:h-[50px] sm:w-[50px] sm:leading-[50px] sm:text-[18px]"
        name={`${collection.user?.first_name?.toUpperCase()} ${collection.user?.last_name?.toUpperCase()}`}
        colors={["grey"]}
      />
      {/* This for displaying Collection's name and total saved products */}
      <div className="relative w-[50%] mx-auto break-words">
        <p className="fundamental_header text-center">{collectionName}</p>
        <div className="absolute w-full">
          <p className="new_fundamental_paragraph text-center">
            {savedProducts > 1
              ? `${savedProducts} saved products`
              : `${savedProducts} saved product`}
          </p>
        </div>
      </div>
      {/* This is for buttons */}
      {collection.user?.id === userId ? (
        <div className="flex items-center justify-center buttons-container">
          <button
            type="button"
            className={`h-[36px]
            rounded-[20px] bookmark_button_text button-width`}
            onClick={() => {
              setShared(true);
            }}
          >
            <img src={shareIcon} alt="" />
          </button>
          <button
            type="button"
            className={`${collection.name === "default" ? "hidden" : "block"} ${collection.name === "default"
              ? "mr-[170px] md:mr-[100px] collection_delete flex justify-end text-center button-width"
              : "collection_delete flex justify-end text-center button-width"
              }`}
            onClick={() => {
              deleteCollection(collection?.id);
            }}
          >
            {`${collection?.name !== "default" ? "Delete Collection" : ""}`}
          </button>
        </div>
      ) : (
        <div className="flex">
          {(token ||
            collection?.user?.id === userId ||
            collection?.visibility === "public") && (
              <button
                type="button"
                className="w-[40px] h-[36px]
              rounded-[20px] bookmark_button_text mr-2"
                onClick={() => {
                  setShared((val) => !val);
                }}
              >
                <img src={shareIcon} alt="" />
              </button>
            )}
          <button
            type="button"
            className="w-[40px] h-[36px]
              rounded-[20px] bookmark_button_text"
            onClick={() => {
              addToFav(collection.id);
            }}
          >
            {liked ? (
              <img src={heartIcon} alt="" className="w-[40px] h-[36px]" />
            ) : (
              <img src={favourite} alt="" className="w-[40px] h-[36px]" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default CollectionCard;

import { useEffect } from "react";
import bookmarkimg2 from "../../../images/wdummy.jpeg";
import save_collection_icon from "../../../images/svg/save_collection.svg";
import { useNavigate } from "react-router-dom";

// This component Displays Profile of user along with his/her collections
let iterator = 0;
const FollowerProfile = (props) => {
  const navigate = useNavigate();
  const { collection } = props;
  useEffect(() => {
    if (collection.images.length < 5) {
      iterator = 5 - collection.images.length;
    }
  }, []);

  return (
    <>
      <div
        className="relative border border-[##E5E5E5] rounded-[18px] bg-[#ffffff] w-[388px] h-[265px] pt-4 px-6 pb-8 cursor-pointer"
        onClick={() => {
          navigate("/collection_products", { state: { data: collection.id } });
        }}
      >
        <div className="flex flex-row justify-between mb-3">
          <div className="flex flex-col">
            <span className="dress_categ_text">{collection.name}</span>
            <span className="bookmark_label">{`${collection.total_products} saved products`}</span>
          </div>
          <div className="flex max-w-[137px] h-[37px] w-full flex-row items-center justify-end">
            <img src={save_collection_icon} alt="" />
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
export default FollowerProfile;

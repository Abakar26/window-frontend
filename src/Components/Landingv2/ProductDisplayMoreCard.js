import { useState, useRef, useEffect } from "react";
import ColorHover from "./Collection/Elements/ColorHover";
import crossColor from "../../images/svg/colorcross.svg";
import ProductModal from "./Fundamentals/Reusable/ProductModal";
import QuickButton from "./Collection/Elements/QuickButton";
import HideButton from "./Collection/Elements/HideButton";
import bookmarkimg2 from "../../images/wdummy.jpeg";
import axios from "axios";
import {
  API_URL,
  webistesListNames,
  colorNumbers,
} from "../../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bookmarkbtn from "../../images/svg/bookmarkbtnimg.svg";
import bookmarkbtnoff from "../../images/svg/bookmarkbtnoflne.svg";
import bookmarkWhite from "../../images/svg/bookmarkWhite.svg";

const ProductDisplayMoreCard = ({
  product,
  updateProduct,
  modalProduct,
  setModalProduct,
  collectionName,
  productCollections,
}) => {
  const [focus, setFocus] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [enable, setEnable] = useState(false);
  const [style, setStyle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [suggestionsStyle, setSuggestionsStyle] = useState("size_select_box");
  const [showSizeSuggestion, setShowSizeSuggestion] = useState(false);
  const [selectImg, setSelectImg] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let array = [];
  const separator = (price) => {
    const myprice = price.toString();
    array = myprice.split(".");
    if (typeof array[1] === "undefined") {
      array[1] = "00";
    }
  };
  // Functions
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  // This function adds product to default collection
  const addToDefaultCollection = () => {
    if (localStorage.getItem("authorization")) {
      if (!product.is_in_default_collection) {
        axios
          .post(
            `${API_URL}api/v1/record_collections`,
            {
              record_collections: {
                collection_name: "default",
                recordable_id: product.id,
                recordable_type: "Product",
                attach_product: true,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem("authorization"),
              },
            }
          )
          .then((response) => {
            toast.success(
              "Product added to the default collection successfully"
            );
            updateProduct(response.data.product);
          })
          .catch((error) => {
            toast.error("Something went wrong. Please try again later.");
            updateProduct(error.response.data.product);
          });
      }
    } else {
      toast.error("Please Sign in to continue...");
    }
  };
  // This function removes product from the default collection
  const removeFromDefaultCollection = () => {
    if (product.is_in_default_collection) {
      axios
        .delete(`${API_URL}api/v1/record_collections`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          data: {
            collection_name: "default",
            recordable_id: product.id,
            recordable_type: "Product",
            attach_product: true,
          },
        })
        .then((response) => {
          updateProduct(response.data);
          if (collectionName !== undefined) {
            if (collectionName === "default") {
              setModalProduct(!modalProduct);
            }
          }
          toast.success(
            "Product removed from the default collection successfully"
          );
        })
        .catch((response) => {
          updateProduct(response.data);
          toast.error("Something went wrong. Please try again later.");
        });
    }
  };
  // This function closes modal
  const closeModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
    setShowSizeSuggestion(false);
    setShowDescription(false);
    setShowSizeSuggestion(false);
    setSuggestionsStyle("size_select_box");
    setSelectImg(0);
  };

  const openModal = (product) => {
    if (window.innerWidth > 768) {
      setShowModal(true);
    } else {
      setShowModal(false);
      navigate(`/products/${product.id}`, {
        state: { myproduct: product, myproductCollections: productCollections },
      });
    }
  };

  const onFocus = () => {
    setFocus(true);
  };
  const focusOut = () => {
    setFocus(false);
  };
  const handleColor = () => {
    setEnable(false);
  };

  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);
    return ref;
  };
  const ref = useOutsideClick(handleColor);
  return (
    <>
      {separator(product.price)}
      <div
        className={`${!focus && isHide && "opacity-[20%]"
          } flex justify-center items-center relative w-full flex-col`}
      >
        <QuickButton
          focus={focus}
          onClick={() => {
            openModal(product);
          }}
          onMouseOver={onFocus}
          onMouseOut={focusOut}
          focused={focus}
        />
        <HideButton
          focus={focus}
          text={isHide ? "Unhide" : "Hide"}
          onClick={() => {
            setIsHide(!isHide);
          }}
          onMouseOver={onFocus}
          onMouseOut={focusOut}
          focused={focus}
        />
        <div
          className="card max-w-[220px]"
          onMouseOver={onFocus}
          onMouseOut={focusOut}
        >
          {!product.is_in_default_collection && (
            <div
              className="fav_btn absolute right-4 mt-3 z-10 hover:cursor-pointer"
              onClick={addToDefaultCollection}
            >
              <img
                src={focus ? bookmarkWhite : bookmarkbtnoff}
                className="w-[6%]"
                alt=""
              />
            </div>
          )}
          {product.is_in_default_collection && (
            <div
              className="fav_btn absolute mt-3 right-4 z-10 hover:cursor-pointer"
              onClick={removeFromDefaultCollection}
            >
              <img src={bookmarkbtn} className="w-[6%]" alt="" />
            </div>
          )}
          {typeof product.images[0] === "undefined" ? (
            // sm:w-[171px] sm:h-[232px]
            <img
              className={
                focus
                  ? "darken-image w-[220px] h-[300px]  rounded-2xl object-cover border border-[#0000001A]"
                  : "w-[220px] h-[300px] rounded-2xl object-cover border border-[#0000001A]"
              }
              src={bookmarkimg2}
              alt="Avatar"
            />
          ) : (
            <img
              className={
                focus
                  ? "darken-image w-[220px] h-[300px]  rounded-2xl object-cover border border-[#0000001A]"
                  : "w-[220px] h-[300px] rounded-2xl object-cover border border-[#0000001A]"
              }
              src={`${product.images[0]}`}
              alt="Avatar"
            />
          )}
        </div>
        <div className="flex justify-between flex-col w-full max-w-[220px] sm:max-w-[171px]">
          <div className="mt-[8px] flex items-center justify-between text-base font-medium text-gray-900">
            {/* <Tooltip className='z-[100] bg-[#ffffff] color_popup color_popup_hover_text' content={webistesListNames[product.website_name]}> */}
            <p className="collection_img_txt title-text-wrap flex justify-between mb-[3px] cursor-default capitalize text-ellipsis">
              {webistesListNames[product.website_name]}
            </p>
            {/* </Tooltip> */}
            <div className="xs:block md:hidden xs:mt-1 cursor-default">
              <span className="product_price">{`$${array[0]}.`}</span>
              <span className="decimal">{array[1]}</span>
            </div>
          </div>
          {/* <Tooltip className='z-[100] bg-[#ffffff] color_popup color_popup_hover_text' content={product.title}> */}
          <p className="collection_img_detal_txt title-text-wrap mb-[4px] h-[17px] overflow-hidden cursor-default">
            {product.title}
          </p>
          {/* </Tooltip> */}
          <div
            className={
              product.mycolors.length === 0
                ? "flex items-center justify-end"
                : "flex items-center justify-between"
            }
          >
            <div
              ref={ref}
              className={product.mycolors.length === 0 ? "hidden" : "block"}
            >
              <div
                className={
                  product.mycolors.length === 0
                    ? "color_bubble gap-1 pl-[4px] pr-[7px] cursor-default"
                    : "color_bubble gap-1 pl-[4px] pr-[7px] cursor-pointer"
                }
                onClick={() => {
                  setEnable(!enable);
                }}
              >
                <div
                  className={
                    enable && product.mycolors.length !== 0
                      ? "hidden"
                      : `inner ${colorNumbers[product.mycolors[0]]}`
                  }
                // style={{ backgroundColor: `${product.mycolors[0]}` }}
                />
                <div
                  className={enable ? "hidden" : "text-xs pl-[5px]"}
                >{`+${product.mycolors.length}`}</div>
              </div>
              {enable && product.mycolors.length !== 0 && (
                <div className="absolute w-[34px] -ml-[10px] h-fit border border-[#c4c4c4] bg-[#ffffff] rounded-[20px] flex justify-center color_popup bottom-0">
                  <ul
                    className={
                      style
                        ? "p-2 m-0 flex justify-between flex-col ml-[50px]"
                        : "p-2 m-0 flex justify-between flex-col"
                    }
                  >
                    {product.mycolors.map((color) => (
                      <ColorHover
                        setEnable={setEnable}
                        setStyle={setStyle}
                        color={color}
                      />
                    ))}
                    <img
                      className="w-[22px] h-[22px] cursor-pointer object-cover"
                      src={crossColor}
                      alt=""
                      onClick={() => {
                        setEnable(false);
                      }}
                    />
                  </ul>
                </div>
              )}
            </div>
            <button
              className="bookmarks_Web_text cursor-pointer outline-none"
              onClick={() => {
                openInNewTab(product.website_link);
              }}
            >{`${product.website_name}.com`}</button>
          </div>
        </div>
        {showModal && (
          <ProductModal
            product={product}
            showModal={showModal}
            suggestionsStyle={suggestionsStyle}
            showSizeSuggestion={showSizeSuggestion}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
            closeModal={closeModal}
            updateProduct={updateProduct}
            productCollections={productCollections}
            modalProduct={modalProduct}
            setModalProduct={setModalProduct}
          />
        )}
      </div>
    </>
  );
};

export default ProductDisplayMoreCard;

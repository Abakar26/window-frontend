/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from "react";
import "../../../../Styles/ProductModal.css";
import { IoIosCloseCircleOutline, IoIosLink } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import Tooltip from "../Tooltip";
import ProductColors from "../Elements/ProductColors";
import SelectBox from "../Elements/SelectBox";
// import ProductDescription from '../Elements/ProductDescription';
// import { Link } from 'react-router-dom';
import bookmarkbtn from "../../../../images/svg/bookmarkbtnimg.svg";
import bookmarkbtnoff from "../../../../images/svg/bookmarkbtnoflne.svg";
import bookmarkimg2 from "../../../../images/wdummy.jpeg";
import BookmarkPopup from "./BookmarkPopup";

// import axios from 'axios';
import { webistesListNames } from "../../../../Constants/Constants";

const DUMMY_IMAGES = ["undefined", "undefined", "undefined", "undefined"];

const ProductModal = ({
  product,
  updateProduct,
  productCollections,
  showModal,
  closeModal,
  showSizeSuggestion,
  suggestionsStyle,
  showDescription,
  setShowDescription,
}) => {
  const iconBtnRef = useRef();
  const tooltipRef = useRef();
  const [showTooltip, setShowTooltip] = useState(false);
  const [box, setBOx] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const [selectImg, setSelectImg] = useState(0);

  const refs = product?.images?.reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});
  let array = [];

  const separator = (price) => {
    const myprice = price.toString();
    array = myprice.split(".");
    if (typeof array[1] === "undefined") {
      array[1] = "00";
    }
  };

  const scrollElement = (id) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const displayTooltip = () => {
    createPopper(iconBtnRef.current, tooltipRef.current, {
      placement: "right",
    });
    setShowTooltip(true);
  };
  const hideTooltip = () => {
    setShowTooltip(false);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const capitalize = (word) => {
    const words = word.split(" ");
    var final = "";
    if (words) {
      words.map((word) => {
        final +=
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
      });
    }
    return final;
  };

  return (
    <>
      {showModal ? (
        <>
          {separator(product.price)}
          <div className="product_modal fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative">
              <div className="modal_close_btn_div">
                {/* <Link
                  to='/collection/product-view'
                  state={{ title: product.title, websiteName:
                    product.website_name, price: product.price, websiteLink: product.website_link,
                     description: product.description,
                     images: product.images, mysizes: product.mysizes, colors: product.mycolors }}
                  className='modal_more_btn'>
                  Open in New Tab
                </Link> */}
                <button
                  type="button"
                  className="modal_close_btn"
                  onClick={() => {
                    closeModal();
                    setBOx(false);
                  }}
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
              <div className="product_modal_dim border-0 rounded-lg relative bg-white outline-none focus:outline-none">
                <div className="overflow-y-scroll flex h-full">
                  <div className="flex flex-col bg-white w-[366px]">
                    <div className="h-auto">
                      <p className="leading-relaxed product_title_tag">
                        {webistesListNames[product.website_name].toUpperCase()}
                      </p>
                      <p
                        className="leading-relaxed product_category_tag relative"
                        onMouseEnter={() => {
                          setHovered(true);
                        }}
                        onMouseLeave={() => {
                          setHovered(false);
                        }}
                      >
                        {product?.title.length > 25
                          ? capitalize(product.title.substring(0, 25)) + "..."
                          : capitalize(product.title.substring(0, 25))}
                        {hovered && (
                          <span className="absolute top-[2.5rem] right-[-2.5rem] bg-[#9c043a] text-white px-2 py-1 text-[8px] rounded-[20px] w-[250px] leading-[1.5rem] block text-center">
                            {product?.title}
                          </span>
                        )}
                      </p>

                      <div className="product_price_div">
                        <span className="product_price_tag">{`$${array[0]}.`}</span>
                        <span className="decimal_tag">{array[1]}</span>
                        {/* <span className='text-[#FFFFFF] bg-[#FFA14A] rounded-[10px]
                        ml-[8px] py-[3px] px-[5px] text-[11px]'>-40%</span> */}
                      </div>
                      <p className="product_desc w-[325px]">
                        {product.description.length >= 250 ? (
                          <>
                            {showDescription
                              ? product.description
                              : `${product.description.substring(0, 250)}...`}
                            <button
                              type="button"
                              className="more_tag"
                              onClick={() =>
                                setShowDescription(!showDescription)
                              }
                            >
                              &nbsp;
                              {showDescription ? "Less Info" : "More info"}
                            </button>
                          </>
                        ) : (
                          product.description
                        )}
                      </p>
                      {product.mycolors.length !== 0 && (
                        <>
                          <p className="color_tag">COLOR</p>
                          <ProductColors
                            innerBubble="inner_bubble"
                            outerBubble="modal_color_bubble"
                            colors={product.mycolors}
                          />
                        </>
                      )}
                      <p className="color_tag mb-1">SIZE</p>
                      <div className="inline-block relative w-64">
                        <SelectBox
                          id="sizeDropdown"
                          cssClass={`${suggestionsStyle}
                          block appearance-none px-4 py-2 rounded leading-tight
                          focus:outline-none focus:shadow-outline`}
                          // onChangeFunc={handleSizeSuggestion}
                          optionsData={product.mysizes}
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-8 flex items-center">
                          <MdKeyboardArrowDown
                            className={
                              showSizeSuggestion && "on_suggestion_icon"
                            }
                          />
                        </div>
                      </div>
                      {showSizeSuggestion && (
                        <div>
                          <p className="size_suggestions pt-px">
                            We think this size would be a good fit for you&nbsp;
                            <div
                              className="cursor-pointer"
                              ref={iconBtnRef}
                              onMouseEnter={displayTooltip}
                              onMouseLeave={hideTooltip}
                            >
                              <AiFillQuestionCircle />
                            </div>
                          </p>
                          <Tooltip
                            tooltipRef={tooltipRef}
                            showTooltip={showTooltip}
                          />
                        </div>
                      )}
                      {box && (
                        <BookmarkPopup
                          product={product}
                          updateProduct={updateProduct}
                          productCollections={productCollections}
                          mystyle="added_bookmark_button"
                          product_id={product.id}
                          box={box}
                          setBox={setBOx}
                        />
                      )}
                      <button
                        type="button"
                        className="buy_now_btn w-full"
                        onClick={() => {
                          openInNewTab(product.website_link);
                        }}
                      >
                        <div className="flex flex-col">
                          <div className="btn_text">Buy Now</div>
                          <div className="btn_link outline-none">
                            <IoIosLink />
                            {product.website_name}
                          </div>
                        </div>
                      </button>
                      <p className="not_sure">Not sure yet?</p>
                      <div className="fav_btn_div">
                        <p className="add_fav_desc">
                          Add this item to your collection and you can easily
                          come back to it later
                        </p>
                        {!product.is_bookmarked && (
                          <button
                            type="button"
                            className="modal_fav_btn outline-none"
                            onClick={() => setBOx(!box)}
                          >
                            <img src={bookmarkbtnoff} alt="" />
                          </button>
                        )}
                        {product.is_bookmarked && (
                          <button
                            type="button"
                            className="modal_fav_btn outline-none"
                            onClick={() => setBOx(!box)}
                          >
                            <img src={bookmarkbtn} alt="" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pl-[24px] pr-[13px] overflow-y-scroll remove_scroll">
                    <ul className="duration-700">
                      {product.images.length > 0 &&
                        product.images.map((img) => (
                          <li className="mb-5" ref={refs[img]}>
                            <img
                              src={`${img}`}
                              alt="Avatar"
                              className="w-[402px] h-[549px] object-cover"
                            />
                          </li>
                        ))}
                      {product.images.length === 0 &&
                        DUMMY_IMAGES.map((img) => (
                          <li className="mb-5" ref={refs[img]}>
                            <img
                              src={bookmarkimg2}
                              alt="Avatar"
                              className="w-[402px] h-[549px] object-cover"
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="flex flex-col bg-white ">
                    <div className="flex flex-col gap-y-[14px] remove_scroll">
                      {product.images.length > 0 &&
                        product.images.map((img) => (
                          <li className="mb-5">
                            <img
                              src={`${img}`}
                              alt="Avatar"
                              className="cursor-pointer w-[75px] h-[75px] object-cover"
                              onClick={() => {
                                scrollElement(img);
                              }}
                            />
                          </li>
                        ))}
                      {product.images.length === 0 &&
                        DUMMY_IMAGES.map((img) => (
                          <li className="mb-5">
                            <img
                              src={bookmarkimg2}
                              alt="Avatar"
                              className="cursor-pointer w-[75px] h-[75px] object-cover"
                              onClick={() => {
                                scrollElement(img);
                              }}
                            />
                          </li>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
};

export default ProductModal;

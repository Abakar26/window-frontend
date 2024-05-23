/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
// import Menu from '../images/svg/menu.svg';
import windowlogo from "../images/svg/window_logo.svg";
import BreadCrumb from "./Signup_Page/BreadCrumb";
// import { Link } from "react-router-dom";

const Nav2 = () => {
  const [search, setSearch] = useState("");
  const [navStyle, setNavStyle] = useState(false);
  const [nav2Style, setNav2Style] = useState(false);
  const [nav3Style, setNav3Style] = useState(false);
  const collectionPath = window.location.pathname.includes("collection");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    const mystatus = location.pathname.split("/").pop();

    if (
      mystatus === "aesthetic" ||
      mystatus === "styleidentity" ||
      mystatus === "colorselection" ||
      mystatus === "fit" ||
      mystatus === "sustainability" ||
      mystatus === "suggestions" ||
      mystatus === "welcome"
    ) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
    if (
      mystatus === "aboutsignup" ||
      mystatus === "sizeselection" ||
      mystatus === "websiteselection" ||
      mystatus === "signup"
    ) {
      setNav2Style(true);
    } else {
      setNav2Style(false);
    }
    // if (mystatus === "sizeselection" || mystatus === "websiteselection") {
    //   setNav3Style(true);
    // } else {
    //   setNav3Style(false);
    // }
  }, [location]);

  const clearSearch = () => setSearch("");

  return (
    <div className="flex w-full justify-end md:justify-start">
      <div
        className={`flex ${
          navStyle
            ? "w-full"
            : nav2Style
            ? "w-[calc(100%-41.597%)] lg:w-full"
            : nav3Style
            ? "w-[calc(100%-28.05%)] lg:w-full"
            : "w-[calc(100%-28.05%)] md:w-full"
        } flex-col `}
      >
        <div className="nav">
          <div className="justify_items">
            <img
              src={windowlogo}
              alt="not found"
              className="justify-center flex cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
            {/* <div className='flex items-center text-5xl font-bold font-serif'>
        <img className='mt-3.5 hidden md:block' src={Menu} alt='menu' />
        <a className='text-black ml-3 hidden md:block window_link' href='/'>window</a>
      </div>
      <div className='flex justify-between'>
        <a className='window_logo block md:hidden' href='/'>window</a> */}
            {collectionPath && (
              <div>
                <div className="relative">
                  <div className="search_icon">
                    <BiSearch />
                  </div>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={search}
                    className="collection_search_box focus:shadow focus:outline-none"
                    placeholder="Search"
                  />
                  <div className="clear_btn">
                    <button type="button" onClick={clearSearch}>
                      <BsFillXCircleFill />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {location.pathname.split("/").pop() !== "welcome" &&
          location.pathname.split("/").pop() !== "signup" &&
          location.pathname.split("/").pop() !== "login" && <BreadCrumb />}
      </div>
    </div>
  );
};

export default Nav2;

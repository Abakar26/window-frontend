import windowlogo from "../../../images/svg/windowlogo2.svg";
import navsearch from "../../../images/svg/navsearch.svg";
import menu from "../../../images/svg/menu.svg";
import { useNavigate, useLocation } from "react-router-dom";
import UserAvatar from "react-user-avatar";
import ProfileDropDown from "../UI/ProfileDropDown";
import { useState } from "react";
import Search from "./Reusable/Search";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(false);
  const [searchText, setSearchText] = useState(
    props.headerInput ? props.headerInput : ""
  );

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.setHeaderInput(e.target.value);
    }
  };

  const handleSearch = () => {
    navigate("/products", { state: { searchText: searchText } });
  };

  return (
    <div
      className={`px-11 py-[22px] flex items-center flex-col w-full sm:px-[26px] ${location.pathname === "/collection_cart"
        ? "bg-[#FAFAFA]"
        : "bg-[#FFFFFF]"
        }`}
    >
      <div className="flex flex-row w-full justify-between items-center">
        <img
          width={25}
          height={25}
          src={menu}
          alt=""
          className="hidden md:block"
          onClick={props.handleSidebar}
        />
        <img
          src={windowlogo}
          alt="window logo"
          className="cursor-pointer md:block"
          onClick={() => {
            navigate("/");
          }}
        />

        {/* Search Bar for specific routes */}

        {location.pathname === "/products" && (
          <div className="max-w-[486px] w-full bg-[#ffffff] border focus-within:outline-2 border-[#E5E5E5] focus-within:hover:border-[#9c0e43] hover:border-[#E1B7C7] focus-within:outline-[#9c0e43] rounded-[20px] relative pl-3 h-[35px] pt-[5px] pb-2 pr-8 md:hidden lg:hidden">
            <img className="absolute top-[35%]" src={navsearch} alt="" />
            <input
              className="focus:outline-none ml-5 products_page_nav_input w-full"
              placeholder="search"
              onKeyPress={handleKeyDown}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute top-[3px] right-[2px] w-[72px] h-[27px] rounded-[20px] bg-[#9C0E43] active:bg-[#C4C4C4] search_button_text"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        )}
        {(location.pathname === "/product_display_more" || location.pathname === "/foryou_display_more") && (
          <div className="max-w-[486px] w-full bg-[#ffffff] border focus-within:outline-2 border-[#E5E5E5] focus-within:hover:border-[#9c0e43] hover:border-[#E1B7C7] focus-within:outline-[#9c0e43] rounded-[20px] relative pl-3 h-[35px] pt-[5px] pb-2 pr-8 md:hidden lg:hidden">
            <img className="absolute top-[35%]" src={navsearch} alt="" />
            <input
              className="focus:outline-none ml-5 products_page_nav_input w-full"
              placeholder="search"
              onKeyPress={handleKeyDown}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute top-[3px] right-[2px] w-[72px] h-[27px] rounded-[20px] bg-[#9C0E43] active:bg-[#C4C4C4] search_button_text"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        )}
        {location.pathname.includes("/collection") && (
          <div className="max-w-[486px] w-full bg-[#ffffff] border focus-within:outline-2 border-[#E5E5E5] focus-within:hover:border-[#9c0e43] hover:border-[#E1B7C7] focus-within:outline-[#9c0e43] rounded-[20px] relative pl-3 h-[35px] pt-[5px] pb-2 pr-8 md:hidden lg:hidden">
            <img className="absolute top-[35%]" src={navsearch} alt="" />
            <input
              className="focus:outline-none ml-5 products_page_nav_input w-full"
              placeholder="search"
              onKeyPress={handleKeyDown}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute top-[3px] right-[2px] w-[72px] h-[27px] rounded-[20px] bg-[#9C0E43] active:bg-[#C4C4C4] search_button_text"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        )}

        <div className="relative flex items-center justify-between h-16">
          <div className="flex justify-between items-center text-center">
            <p
              className="text-[#000000]  font-[18px] mr-7 cursor-pointer  sm:hidden"
              onClick={() => {
                openInNewTab(process.env?.REACT_APP_WINDOW_FEEDBACK_URL);
              }}
            >
              Feedback
            </p>
            {localStorage.getItem("authorization") && (
              <p
                className="text-[#000000] font-[18px] mr-7 cursor-pointer sm:hidden"
                onClick={() => {
                  navigate("/collections");
                }}
              >
                Collections
              </p>
            )}
            <p
              className="text-[#000000] font-[18px] mr-10 sm:hidden cursor-pointer"
              onClick={() => {
                openInNewTab("https://www.thisiswindow.com");
              }}
            >
              About
            </p>
            {localStorage.getItem("authorization") ? (
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  setProfile(!profile);
                }}
              >
                <UserAvatar
                  size="55"
                  name={`${localStorage
                    .getItem("first-name")
                    .toUpperCase()} ${localStorage
                      .getItem("last-name")
                      .toUpperCase()}`}
                  colors={["grey"]}
                />{" "}
              </div>
            ) : (
              <p
                className="text-[#000000] font-[18px] mr-7 cursor-pointer hover:text-[#9C0E43] sm:hidden"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
            )}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:ml-6 sm:pr-0 nav-icon justify-end">
            {localStorage.getItem("authorization") && (
              <ProfileDropDown
                profile={profile}
                setProfile={setProfile}
                selected={props.selected}
                setSelected={props.setSelected}
              />
            )}
          </div>
        </div>
      </div>
      <div className="hidden mt-8 md:block w-full">
        <div className="flex justify-center w-full">
          {(location.pathname === "/products" ||
            location.pathname === "/collection/product-details") && (
              <div className="max-w-[486px] w-full bg-[#ffffff] border focus-within:outline-2 border-[#E5E5E5] focus-within:hover:border-[#9c0e43] hover:border-[#E1B7C7] focus-within:outline-[#9c0e43] rounded-[20px] relative pl-3 h-[35px] pt-[5px] pb-2 pr-8 md:hidden lg:hidden">
                <img className="absolute top-[35%]" src={navsearch} alt="" />
                <input
                  className="focus:outline-none ml-5 nav_input w-full"
                  placeholder="search"
                  onKeyPress={handleKeyDown}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  className="absolute top-[3px] right-[2px] w-[72px] h-[27px] rounded-[20px] bg-[#9C0E43] active:bg-[#C4C4C4] search_button_text"
                  onClick={handleSearch}
                >
                  search
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
export default Header;

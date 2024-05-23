import { useState } from "react";
import menu from "../../images/svg/menu.svg";

import SideBar from "./SideBar";
import ProfileDropDown from "./UI/ProfileDropDown";
import { useNavigate } from "react-router-dom";
import UserAvatar from "react-user-avatar";

export default function Example(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const navigate = useNavigate();

  return (
    <>
      <div as="nav">
        <div className="mx-auto pt-8 pb-8 sm:px-6 lg:px-8 container pl-[50px] pr-10 bg-[#ffffff]">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black cursor-pointer"
                onClick={() => {
                  setSidebarOpen(true);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <img src={menu} alt="" width={25} height={25} />
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center sm:ml-6 sm:pr-0 nav-icon justify-end">
              <p
                className="text-[#000000]  font-[18px] mr-7 cursor-pointer  sm:hidden"
                onClick={() => {
                  openInNewTab(process.env?.REACT_APP_WINDOW_FEEDBACK_URL);
                }}
              >
                Feedback
              </p>
              {localStorage.getItem("authorization") && (
                <>
                  <p
                    className="text-[#000000]  font-[18px] mr-7 cursor-pointer  sm:hidden"
                    onClick={() => {
                      navigate("/collections");
                      props.setSwitchNav(true);
                    }}
                  >
                    Collections
                  </p>
                </>
              )}
              <p
                className="text-[#000000] font-[18px] mr-10 sm:hidden cursor-pointer"
                onClick={() => {
                  openInNewTab("https://www.thisiswindow.com");
                }}
              >
                About
              </p>
              {!localStorage.getItem("authorization") ? (
                <div
                  className="text-[#000000] font-[18px] mr-7 cursor-pointer hover:text-[#9C0E43]"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login/Sign Up
                </div>
              ) : (
                <>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setProfile(!profile);
                    }}
                  >
                    {/* <img className="user-profile-img" src={profileimg} alt=""/> */}
                    <UserAvatar
                      size="50"
                      name={`${localStorage
                        .getItem("first-name")
                        .toUpperCase()} ${localStorage
                          .getItem("last-name")
                          .toUpperCase()}`}
                      colors={["grey"]}
                    />
                  </div>
                  <ProfileDropDown
                    profile={profile}
                    setProfile={setProfile}
                    setFundamentalNav={props.setFundamentalNav}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <SideBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setsubCategory={props.setsubCategory}
          />
        </div>
      </div>
    </>
  );
}

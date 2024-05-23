import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jeansShoes from "../../images/jeans_shoes.png";
import sideimg from "../../images/aboutsignup.png";
import website_selection_carousel from "../../images/website_selection_carousel.png";
import cartSearch from "../../images/aboutsummer.png";
import SignupSidebarText from "./SignupSidebarTest";

const images = [jeansShoes, sideimg, jeansShoes];
const controlButtons = [0, 1, 2];
const text = [
  {
    firstLine: "Searching For New",
    image: website_selection_carousel,
    secondLine: "Sneakers",
  },
  {
    firstLine: "Searching For",
    image: cartSearch,
    secondLine: "Summer Dresses",
  },
  {
    firstLine: "Your Home For All",
    image: website_selection_carousel,
    secondLine: "Saved",
  },
];

const QuizSidebar = (props) => {
  const { mystyle } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselControl, setCarouselControl] = useState(0);
  const slideRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnNextClick = (index) => {
    setCurrentIndex(index);
    slideRef.current.classList.add("fade-anim");
  };
  const handleCarouselControl = (control) => {
    handleOnNextClick(control);
    setCarouselControl(control);
  };

  // navigating function
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <aside
      className={`lg:hidden w-[28.0555%] bg-[#FAFAFA] left-0 top-0 absolute`}
    >
      <div className="flex w-full flex-col">
        <div className="flex w-full h-[501px] mb-6" ref={slideRef}>
          <img
            src={images[currentIndex]}
            alt=""
            className="object-cover w-full h-[501px]"
          />
        </div>
        {/* <div
          className="w-full about_signup_aside
         flex flex-col pr-6 pointer-events-none mb-[64px] px-8"
        >
          <span> Searching For</span>
          <span className="flex flex-row items-baseline">
            <img
              className="w-[67px] h-[27px]"
              src={website_selection_carousel}
              alt=""
            />
            New Sneakers
          </span>
          <span>Has Never Been So</span>
          <span className="flex flex-row">
            Convinen
            <span className="text-gray-400">t</span>
            <span className="text-[#9C0E43]">|</span>
          </span>
        </div> */}
        <SignupSidebarText text={text[carouselControl]} />
        <div className="flex flex-row w-full justify-center mb-[116px]">
          {controlButtons.map((value, index) => (
            <span
              key={index}
              className={
                carouselControl === index
                  ? "w-2 h-2 ml-2 bg-[#191919] rounded-full cursor-pointer"
                  : "w-2 h-2 ml-2 bg-[#D9D9D9] rounded-full cursor-pointer"
              }
            // onClick={() => {
            //   handleCarouselControl(index);
            // }}
            />
          ))}
        </div>
        <span
          className="about_signup_aside_link block mb-8 ml-8 cursor-pointer"
          onClick={() => {
            navigateTo(`/${location?.pathname.split("/").pop()}`);
          }}
        >
          window.online
        </span>
      </div>
    </aside>
  );
};
export default QuizSidebar;

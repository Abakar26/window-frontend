import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import signupBtn from "../../images/svg/signup_btn.svg";
import arrow from "../../images/svg/blue_arrow.svg";
import SizeCollection from "./SizeCollection";
import cartSearch2 from "../../images/cartsearch2.png";
import su3 from "../../images/su3.png";
import SidebarText from "./SidebarText";

// Define Images here which should be displayed in carousel
const controlButtons = [0, 1, 2];
const text = [
  {
    firstLine: "Save And Share Your",
    image: cartSearch2,
    secondLine: "Favorite Looks",
    thirdLine: "Across The Web",
    bool: false,
  },
];
const SizeSelection = (props) => {
  const [over, setOver] = useState(false);
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [dressCount, setDressCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("authorization")) {
      navigate("/login");
    }
    props.setSwitchSignup(true);
    if (topCount !== 0 && bottomCount !== 0 && dressCount !== 0) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [topCount, bottomCount, dressCount]);
  // Carousel Logic Here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselControl, setCarouselControl] = useState(0);
  const slideRef = useRef();
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
    navigate(path, { replace: true });
  };
  return (
    <div className="flex w-full">
      {/* Carousel Here */}
      <aside className="lg:hidden w-[41.597%] bg-[#FAFAFA] top-0 left-0 absolute h-fit">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-end mt-[66px] mb-12">
            <img src={su3} alt="" className="caoursel-img" />
          </div>
          <SidebarText text={text[0]} />
          <div className=" flex flex-row w-full justify-center mb-[2rem]">
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
            className="about_signup_aside_link mb-8 ml-8 cursor-pointer"
            onClick={() => {
              navigateTo("/sizeselection");
            }}
          >
            window.online
          </span>
        </div>
      </aside>
      <div className="flex justify-end w-full">
        <div className="flex flex-col items-center px-0 pt-[136px] w-[calc(100%-41.597%)] right-0 lg:w-full">
          <SizeCollection
            currentUser={props.currentUser}
            topCount={topCount}
            dressCount={dressCount}
            bottomCount={bottomCount}
            setTopCount={setTopCount}
            setDressCount={setDressCount}
            setBottomCount={setBottomCount}
          />
          <button
            type="button"
            disabled={!over}
            onClick={() => {
              navigate("/aesthetic");
            }}
          >
            <img src={over ? arrow : signupBtn} alt="sign up button not found" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SizeSelection;

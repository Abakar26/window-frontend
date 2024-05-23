/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import arrow from "../../images/svg/blue_arrow.svg";
import signupBtn from "../../images/svg/signup_btn.svg";
// import google from '../../images/svg/google_signup.svg';
import cartSearch from "../../images/svg/cartsearch.svg";
import { API_URL } from "../../Constants/Constants";

// import sideimg from '../../images/aboutsignup.png';
import cartSearch0 from "../../images/aboutsummer.png";
import cartSearch1 from "../../images/cartsearch1.png";
import cartSearch2 from "../../images/cartsearch2.png";

import su1 from "../../images/su1.png";
import su2 from "../../images/su2.png";
import su3 from "../../images/su3.png";
import SidebarText from "./SidebarText";

// For now this list of image is static, we can update it for what we want to display in carousel
const images = [su1, su2, su3];
const text = [
  {
    firstLine: "Shop Seamlessly With",
    image: cartSearch0,
    secondLine: "Your Preferences For",
    thirdLine: "Fast And Easy Results",
    bool: false,
  },
  {
    firstLine: "Discover Personalized",
    image: cartSearch1,
    secondLine: "Edits, Curated",
    thirdLine: "For You Daily",
    bool: false,
  },
  {
    firstLine: "Your Home For All",
    image: cartSearch2,
    secondLine: "Your Saved Looks",
    thirdLine: "Across The Web",
    bool: false,
  },
];
let count = 0;
const controlButtons = [0, 1, 2];

const SignupPage = (props) => {
  const [over, setOver] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const tIndex = 0;
  const checkEmailExistance = (myemail) => {
    axios
      .get(`${API_URL}api/v1/users/check_user_existance`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
        params: {
          email: myemail,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          if (window.innerWidth < 750) {
            toast.info(
              "Please create an account desktop web to access window on mobile"
            );
          } else {
            navigate("/aboutsignup", { replace: true, state: { email } });
          }
        }
      })
      .catch(() => {
        toast.info("Window Account already exits");
      });
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    if (validator.isEmail(email)) {
      setOver(true);
    } else {
      setOver(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.setSwitchSignup(true);
    if (localStorage.getItem("authorization")) {
      navigate("/", { replace: true });
    } else {
      navigate("/signup", { replace: true });
    }
  }, []);

  const handleNavigation = () => {
    checkEmailExistance(email);
  };
  // Carousel Logic Here
  const [carouselControl, setCarouselControl] = useState(0);

  const handleCarouselControl = (control) => {
    setCarouselControl(control);
  };
  // navigating function
  const navigateTo = (path) => {
    navigate(path, { replace: true });
  };
  return (
    <div className="flex w-full">
      {/* Carousel Here */}
      <aside className="lg:hidden w-[41.597%] bg-[#FAFAFA] top-0 absolute left-0 h-fit">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-end mt-[6.5rem] mb-12">
            <img
              src={images[carouselControl]}
              alt=""
              className="w-[498px] h-[402px] object-cover"
            />
          </div>
          <SidebarText text={text[tIndex]} />
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
              navigateTo("/signup");
            }}
          >
            window.online
          </span>
        </div>
      </aside>
      <div className="flex w-full justify-end">
        <div className="flex flex-col items-center px-0 pt-[136px] w-[58%] right-0 lg:w-full">
          <p className="signup_text window_font text-center max-w-[55%] mb-[5%]">
            Get In. We’re Going Shopping.
          </p>
          <div className="mb-[138px] flex flex-col">
            <label className="signup_label_email  mb-2">SIGN UP WITH EMAIL</label>
            <input
              className="py-[10px] border border-[#C4C4C4] rounded-lg px-3 max-w-[185px] w-full outline-[#000000]"
              type="email"
              value={email}
              required
              onChange={(event) => handleEmailInput(event)}
              placeholder="coco@chanel.com"
            />
            <span
              className="login_link mt-[20px] cursor-pointer"
              onClick={() => {
                navigate("/login", { replace: true });
              }}
            >
              Already have an account? Login
            </span>
          </div>
          <button type="button" disabled={!over} onClick={handleNavigation}>
            <img src={over ? arrow : signupBtn} alt="sign up button not found" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignupPage;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import arrow from "../../images/svg/blue_arrow.svg";
import signupBtn from "../../images/svg/signup_btn.svg";
import MyPasswordInput from "../UI/MyPasswordInput";
import { login } from "../../actions/auth";
// import google from '../../images/svg/google_signup.svg';
import sideimg from "../../images/signUp_img.png";
import cartSearch from "../../images/svg/cartsearch.svg";
import { API_URL } from "../../Constants/Constants";
import "react-toastify/dist/ReactToastify.css";
import QuizSidebar from "./QuizSidebar";

const LoginPage = (props) => {
  const [over, setOver] = useState(false);
  // const [error] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const [, setPref] = useState([]);
  const dispatch = useDispatch();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const getPreference = () => {
    axios
      .get(
        `${API_URL}api/v1/users/${localStorage.getItem("user")}/preferences`,
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      )
      .then((response) => {
        if (response.data.length > 0) {
          navigate("/");
        } else {
          navigate("/websiteselection");
        }
        const mydata = response.data;
        setPref(mydata);
      })
      .catch((myerror) => {
        console.log(myerror);
      });
  };
  const handleForm = () => {
    dispatch(login(email, passwordValue))
      .then((data) => {
        if (data) {
          if (localStorage.getItem("authorization")) {
            getPreference();
          }
        } else {
          toast.info("Provide valid email and password");
        }
      })
      .catch((myerror) => {
        if (myerror?.response?.data?.message) {
          toast.info(myerror.response.data.message);
        } else {
          toast.info("Provide valid email and password");
        }
      });
  };
  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      navigate("/");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (localStorage.getItem("signupEmail")) {
      setEmail(localStorage.getItem("signupEmail"));
      toast.info("Please confirm your email address before login");
      localStorage.removeItem("signupEmail");
    }
    props.setSwitchSignup(true);
    props.setFundamentalNav(false);
    props.setSwitchNav(false);
  }, []);

  useEffect(() => {
    if (validator.isEmail(email) && passwordValue?.length >= 8) {
      setOver(true);
    } else {
      setOver(false);
    }
    // if (isLoggedIn) {
    //   getPreference();
    //   if (pref.length === 1) {
    //     navigate('/');
    //   } else {
    //     navigate('/websiteselection');
    //   }
    // }
  }, [passwordValue, email]);
  return (
    <div className="flex w-full">
      {/* <aside className="md:hidden">
        <div className="w-[388px] h-screen bg-[#C4C4C4] opacity-20 -mt-[62px]" />
        <img className="top-[237px] left-[24px] absolute" src={sideimg} alt="" />
        <div className="absolute border border-[#999999] rounded-[28px] max-w-[258px] w-full h-10
         flex flex-row bg-white pr-6 pointer-events-none top-[270px] left-[185px]"
        >
          <img className="absolute ml-[25px] left top-[20%] mr-1" src={cartSearch} alt="" />
          <span className="ml-[49px] text-[22px] leading-[27px] pt-[6px]">
            Let's get started
            {' '}
            <span className="text-[#9C0E43]">|</span>
          </span>
        </div>
      </aside> */}
      <QuizSidebar />
      <div className="w-full flex justify-end">
        <div className="flex flex-col items-center px-0 pt-[7%] w-[71.945%] right-0 lg:w-full">
          <p className="signup_text window_font text-center max-w-[55%] mb-[60px]">
            Get In. We’re Going Shopping.
          </p>
          {/* <div className='mb-4 flex items-center border bg-[#FFFFFF]
         border-[#C4C4C4] rounded-lg pt-[12px] pb-[11px] pl-[16px] pr-[16px]'>
          <p className='signup_box_text mr-4 text-[#ea4335]'>Sign In with Google</p>
          <img src={google} alt='google imag' />
        </div>
        <div className='flex flex-row items-center mb-4'>
          <span className='w-[67px] border border-[#C4C4C4]'></span>
          <span className='signup_box_text  window_font text-[#000000] ml-2 mr-2'>OR</span>
          <span className='w-[67px] border border-[#C4C4C4]'></span>
        </div> */}
          <div className="mb-[152px] flex flex-col">
            <label className="signup_label_email  mb-2">EMAIL</label>
            <input
              className="py-[10px] border border-[#C4C4C4] rounded-lg px-3 max-w-[185px] w-full outline-[#000000]"
              type="email"
              value={email}
              required
              onChange={(event) => handleEmailInput(event)}
              placeholder="coco@chanel.com"
            />
            <label className="signup_label_email mt-5">PASSWORD</label>
            <MyPasswordInput
              name="password"
              type="password"
              placeholder="●●●●●●●●●"
              setPasswordValue={setPasswordValue}
              passwordValue={passwordValue}
            />
            <span
              className="login_link cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Does not have an account? Sign Up
            </span>
          </div>
          {/* {error && <p className="text-[#9C0E43]">Please enter a valid Email and Password</p>} */}
          <button
            type="button"
            disabled={!over}
            onClick={() => {
              handleForm();
            }}
          >
            <img src={over ? arrow : signupBtn} alt="sign up button not found" />
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default LoginPage;

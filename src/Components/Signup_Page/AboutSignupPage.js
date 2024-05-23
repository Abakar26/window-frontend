/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import TabIndexContent from "react-tabindex-content";
import signupBtn from "../../images/svg/signup_btn.svg";
import MyTextInput from "../UI/MyTextInput";
import MyPasswordInput from "../UI/MyPasswordInput";
import MyDateInput from "../UI/MyDateInput";
import PasswordValidation from "./Password_Validation";
import arrow from "../../images/svg/blue_arrow.svg";
import { register } from "../../actions/auth";
import "react-toastify/dist/ReactToastify.css";
// import sideimg from '../../images/aboutsignup.png';
import cartSearch from "../../images/aboutsummer.png";
import cartSearch1 from "../../images/cartsearch1.png";
import cartSearch2 from "../../images/cartsearch2.png";

import su1 from "../../images/su1.png";
import su2 from "../../images/su2.png";
import su3 from "../../images/su3.png";
import SidebarText from "./SidebarText";
import aboutSignupPageSU from "../../images/account_verify_2.svg";
// For now this list of image is static, we can update it for what we want to display in carousel
const images = [su1, aboutSignupPageSU, su3];
const text = [
  {
    firstLine: "Shop Seamlessly With",
    image: cartSearch,
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

const AboutSignupPage = (props) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [over, setOver] = useState(false);
  const [validation, setValidation] = useState(false);
  const [equal, setEquiality] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confpasswordValue, setConfPasswordValue] = useState("");
  const [pwdFocus, setPwdFocus] = useState(true);
  const [email, setEmail] = useState("");
  const [error] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const status = location.pathname.split("/").pop();
  const tIndex = status === "verify" || status === "aboutsignup" ? 1 : 0;

  const PasswordFocus = () => {
    setPwdFocus(false);
  };

  const BlurHandle = () => {
    setPwdFocus(true);
  };

  const onPwdKeyPress = (e) => {
    e.key === "Tab" && BlurHandle();
  };

  useEffect(() => {
    setEmail(location?.state?.email);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (localStorage.getItem("authorization")) {
      navigate("/");
    } else {
      navigate("/aboutsignup");
    }
    props.setSwitchSignup(true);
  }, []);

  useEffect(() => {
    const alphabet = /[A-Z]/;
    const numaric = /[0-9]/;
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (passwordValue.length >= 8) {
      setFirst(true);
    } else {
      setFirst(false);
    }
    if (alphabet.test(passwordValue)) {
      setSecond(true);
    } else {
      setSecond(false);
    }
    if (numaric.test(passwordValue)) {
      setThird(true);
    } else {
      setThird(false);
    }
    if (format.test(passwordValue)) {
      setForth(true);
    } else {
      setForth(false);
    }
    if (first && second && third && forth) {
      // setPwdFocus(true)
      setValidation(true);
    } else {
      setValidation(false);
      // setPwdFocus(false)
    }
    if (
      passwordValue === confpasswordValue &&
      passwordValue.length !== 0 &&
      confpasswordValue.length !== 0
    ) {
      setEquiality(true);
    } else {
      setEquiality(false);
    }
    if (
      firstname !== "" &&
      lastname !== "" &&
      dob !== "" &&
      passwordValue !== "" &&
      confpasswordValue !== "" &&
      equal
    ) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [
    firstname,
    lastname,
    dob,
    passwordValue,
    confpasswordValue,
    first,
    second,
    third,
    forth,
    equal,
  ]);

  function submission() {
    if (window.innerWidth < 750) {
      toast.info(
        "Please create an account on desktop web to access window on mobile"
      );
    } else {
      dispatch(
        register(
          firstname,
          lastname,
          dob,
          email,
          passwordValue,
          confpasswordValue
        )
      ).then((data) => {
        if (data?.status === 200) {
          setFirstName("");
          setLastName("");
          setPasswordValue("");
          setConfPasswordValue("");
          setDOB("");
          localStorage.setItem("signupEmail", data.data.email);
          toast.success("Account has been created successfully");
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        } else if (data === 500) {
          toast.error("Email already exist, try with another email");
        } else {
          toast.warning("Something went wrong, try again later");
        }
      });
    }
  }
  // Carousel Logic Here
  const [carouselControl, setCarouselControl] = useState(0);

  const handleCarouselControl = (control) => {
    setCarouselControl(control);
  };
  // navigating function
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="flex w-full">
      {/* Carousel Here */}
      <aside className="lg:hidden w-[41.597%] bg-[#FAFAFA] top-0 absolute left-0">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-end mt-[106px] mb-12">
            <img
              src={images[tIndex]}
              alt=""
              className="w-[498px] h-[402px] object-cover"
            />
          </div>
          {/* <div
            className="w-full about_signup_aside
         flex flex-col pr-6 pointer-events-none mb-[2rem] ml-8"
          >
            <span> Searching With</span>
            <span className="flex flex-row items-baseline">
              <img className="w-[67px] h-[27px]" src={cartSearch} alt="" />
              Your Preferences
            </span>
            <span>Has Never Been So</span>
            <span className="flex flex-row">
              Seamless
              <span className="text-[#9C0E43]">|</span>
            </span>
          </div> */}
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
              navigateTo("/aboutsignup");
            }}
          >
            window.online
          </span>
        </div>
      </aside>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          date_of_birth: "",
          password: "",
          conform_password: "",
        }}
      // validationSchema={submission}
      // onSubmit={submission}
      >
        <div className="w-full flex justify-end">
          <div className="flex flex-col items-center px-0 pt-[136px] w-[58%] right-0 lg:w-full">
            <p>{error}</p>
            <p className="signup_text mb-[107px] hidden sm:block">Your Account</p>
            <TabIndexContent global>
              <Form
                className="flex flex-wrap max-w-[473px] w-full justify-center
              md:flex-col mb-[65px] sm:mb-0"
              >
                <MyTextInput
                  label="FIRST NAME"
                  name="firstName"
                  type="text"
                  placeholder="Coco"
                  value={firstname}
                  tabIndex={1}
                  setText={setFirstName}
                />
                <MyPasswordInput
                  label="PASSWORD"
                  name="password"
                  type="password"
                  placeholder="●●●●●●●●●"
                  setPasswordValue={setPasswordValue}
                  onFocus={PasswordFocus}
                  onBlur={BlurHandle}
                  onKeyDown={onPwdKeyPress}
                  passwordValue={passwordValue}
                  validation={validation}
                  confirm={false}
                  tabIndex={3}
                />
                <MyTextInput
                  label="LAST NAME"
                  name="lastname"
                  type="text"
                  placeholder="Chanel"
                  value={lastname}
                  setText={setLastName}
                  tabIndex={2}
                />
                {pwdFocus && (
                  <MyPasswordInput
                    label="CONFIRM PASSWORD"
                    name="password"
                    type="password"
                    placeholder="●●●●●●●●●"
                    passwordValue={confpasswordValue}
                    setPasswordValue={setConfPasswordValue}
                    equal={equal}
                    pwdFocus={pwdFocus}
                    validation={validation}
                    confirm
                    tabIndex={4}
                  />
                )}
                <MyDateInput
                  label="DATE OF BIRTH"
                  name="date_of_birth"
                  placeholder="1/1/2000"
                  value={dob}
                  setDOB={setDOB}
                  tabIndex={5}
                />
                {!pwdFocus && (
                  <PasswordValidation
                    first={first}
                    second={second}
                    third={third}
                    forth={forth}
                  />
                )}
              </Form>
            </TabIndexContent>

            <button type="button" disabled={!over} onClick={() => submission()}>
              <img
                src={over ? arrow : signupBtn}
                alt="sign up button not found"
              />
            </button>
          </div>
        </div>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default AboutSignupPage;

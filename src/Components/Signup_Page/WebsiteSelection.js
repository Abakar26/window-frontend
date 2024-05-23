/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import WebsiteCollection from './WebsiteCollection';
import WebsiteRequestModal from './WebsiteRequestModal';
import { API_URL } from '../../Constants/Constants';
import SidebarText from './SidebarText';
// import cartSearch from '../../images/aboutsummer.png';
import su2 from '../../images/su2.png';
import aboutSignupPageBadge from '../../images/account_verify.svg';

// Define Images here which should be displayed in carousel
// const images = [jeansShoes, sideimg, jeansShoes];
const controlButtons = [0, 1, 2];
// Text to display in carousel
const text = [
  {
    firstLine: 'Explore Fashion Inspiration',
    image: aboutSignupPageBadge,
    secondLine: 'Customized',
    thirdLine: 'To Your Style',
    bool: false,
  },
];
const WebsiteSelection = (props) => {
  const websitesNames = [
    { name: '24s' },
    { name: 'attirethestudio' },
    { name: 'bershka' },
    { name: 'bodenusa' },
    { name: 'boohoo' },
    { name: 'brandymelville' },
    { name: 'chicandcurvy' },
    { name: 'ciaolucia' },
    { name: 'cuyana' },
    { name: 'everlane' },
    { name: 'express' },
    { name: 'farfetch' },
    { name: 'forloveandlemons' },
    { name: 'freepeople' },
    { name: 'hm' },
    { name: 'levi' },
    { name: 'loft' },
    { name: 'madewell' },
    { name: 'massimodutti' },
    { name: 'mytheresa' },
    { name: 'net-a-porter' },
    { name: 'newlook' },
    { name: 'pangaia' },
    { name: 'philosophyofficial' },
    { name: 'sezane' },
    { name: 'storets' },
    { name: 'stories' },
    { name: 'superdown' },
    { name: 'thelinedot' },
    { name: 'theraggedpriest' },
    { name: 'uniqlo' },
    { name: 'whitehouseblackmarket' },
    { name: 'yearofours' },
  ];
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [over, setOver] = useState(false);
  const [websiteLink, setLink] = useState('');
  const navigate = useNavigate();
  const id = localStorage.getItem('user');
  const setWebsiteFeedback = () => {
    if (websiteLink.length !== 0) {
      axios
        .post(
          `${API_URL}api/v1/users/${id}/website_feedbacks`,
          {
            website_feedbacks: { link: websiteLink },
          },
          {
            headers: {
              Authorization: localStorage.getItem('authorization'),
            },
          },
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success('Feedback added successfully!');
          }
        })
        .catch(() => {
          toast.warning('Error occured');
        })
        .finally(() => {
          setModal(false);
        });
    } else {
      toast.warning('Please enter a valid value');
    }
  };
  useEffect(() => {
    props.setSwitchSignup(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    if (count > 0 && count <= 10) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [count, props.switchSignup]);

  // Carousel Logic Here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselControl, setCarouselControl] = useState(0);
  const slideRef = useRef();
  const handleOnNextClick = (index) => {
    setCurrentIndex(index);
    slideRef.current.classList.add('fade-anim');
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
      {/* Carousel here */}
      <aside className="lg:hidden w-[41.597%] bg-[#FAFAFA] top-0 left-0 absolute h-fit">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-end mt-[106px] mb-12">
            <img
              src={su2}
              alt=""
              className="w-[498px] h-[402px] object-cover"
            />
          </div>
          <SidebarText text={text[0]} />
          <div className=" flex flex-row w-full justify-center mb-[2rem]">
            {controlButtons.map((value, index) => (
              <span
                key={index}
                className={
                  carouselControl === index
                    ? 'w-2 h-2 ml-2 bg-[#191919] rounded-full cursor-pointer'
                    : 'w-2 h-2 ml-2 bg-[#D9D9D9] rounded-full cursor-pointer'
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
              navigateTo('/websiteselection');
            }}
          >
            window.online
          </span>
        </div>
      </aside>
      {/* Website Selection Logic Here */}
      <div className="w-full flex justify-end">
        <div className="flex flex-col items-center px-0 pt-[50px] w-[calc(100%-41.597%)]
        right-0 lg:w-full relative"
        >
          {/* <p className="signup_text  mb-[15px] text-center">Your Shopping Preferences</p> */}
          <label className="signup_label mb-[49px]">
            Select up to 10 of your go-to sites
          </label>
          <WebsiteCollection
            websites={websitesNames}
            count={count}
            setCount={setCount}
            currentUser={props.currentUser}
            setOver={setOver}
          />
          <button
            className="mb-[83px]"
            type="button"
            disabled={!over}
            onClick={() => navigate('/sizeselection')}
          >
            <img src={over ? arrow : signupBtn} alt="sign up button not found" />
          </button>
          <div className="w-full flex justify-end mb-6 mr-8 bottom-0">
            <div
              className="max-w-[284px] w-full h-[56px] border border-[#9C0E43] rounded-[80px]
               flex justify-center items-center flex-col cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            >
              <span className="bottom_button">
                Don’t see your favourite website?
              </span>
              <span className="bottom_button2">Request one here!</span>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <WebsiteRequestModal
          setModal={setModal}
          setLink={setLink}
          setWebsiteFeedback={setWebsiteFeedback}
        />
      )}
      <ToastContainer />
    </div>
  );
};
export default WebsiteSelection;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import SkipButton from '../UI/SkipButton';
import { API_URL } from '../../Constants/Constants';

const Fit = (props) => {
  const [over, setOver] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const navigate = useNavigate();
  const array = [];
  // const API_URL = "http://localhost:3000/api/v1/users/2/";
  const arraySetup = (mydata) => {
    mydata.map((value) => array.push(value.title));
    if (array.includes('Tall')) {
      setFirst(true);
    }
    if (array.includes('Maternity')) {
      setForth(true);
    }
    if (array.includes('Petite')) {
      setSecond(true);
    }
    if (array.includes('Curvy/Plus Size')) {
      setThird(true);
    }
  };
  const onButtonPressed = (value) => {
    axios.post(`${API_URL}api/v1/users/${props.currentUser}/fit_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      preferences: {
        title: value,
        user_id: props.currentUser,
        type: 'FitPreference',
      },
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });
  };
  const onButtonUnpressed = (value) => {
    axios.delete(`${API_URL}api/v1/users/${props.currentUser}/fit_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      data: {
        title: value,
        type: 'FitPreference',
      },
    }).catch((error) => {
      console.log(error);
    });
  };
  const fetchData = () => {
    axios.get(`${API_URL}api/v1/users/${props.currentUser}/fit_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'FitPreference',
      },
    }).then((response) => {
      const mydata = response.data;
      arraySetup(mydata);
    }).catch((error) => {
      console.log(error);
    });
  };
  const setType = (tileNo, type) => {
    if (!tileNo) {
      onButtonPressed(type);
    } else {
      onButtonUnpressed(type);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
    fetchData();
  }, []);
  useEffect(() => {
    props.setSwitchSignup(true);
    if (first || second || third || forth) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [first, second, third, forth]);
  const handleNavigation = () => {
    navigate('/sustainability');
  };
  return (
    <div className="h-[900px]  flex flex-col items-center  px-0 pt-[171px] ">
      <span className="signup_welcome_container mb-[13px] window_font text-center">Your Fit Preferences</span>
      <p className="signup_text_aesthetic  mb-[25px] window_font text-center">
        Any body types we should prioritize in your search results?
      </p>
      <div className="flex flex-wrap max-w-[248px] mb-[177px] justify-between">
        <div
          className={first
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'}
          onClick={() => { setFirst(!first); setType(first, 'Tall'); }}
        >
          <p className=" window_font text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px]">
            Tall
          </p>
        </div>
        <div
          className={second
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'}
          onClick={() => { setSecond(!second); setType(second, 'Petite'); }}
        >
          <p className=" window_font text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px]">
            Petite
          </p>
        </div>
        <div
          className={third
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'}
          onClick={() => { setThird(!third); setType(third, 'Curvy/Plus Size'); }}
        >
          <p className=" window_font text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px]">
            Curvy/Plus Size
          </p>
        </div>
        <div
          className={forth
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'}
          onClick={() => { setForth(!forth); setType(forth, 'Maternity'); }}
        >
          <p className=" window_font text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px]">
            Maternity
          </p>
        </div>
      </div>
      <button
        type="button"
        disabled={!over}
        onClick={() => navigate('/sustainability')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
      <SkipButton onClick={handleNavigation} />
    </div>

  );
};
export default Fit;

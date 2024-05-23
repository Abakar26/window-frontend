/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import SkipButton from '../UI/SkipButton';
import { API_URL } from '../../Constants/Constants';

const Sustainability = (props) => {
  const { currentUser, setSwitchSignup } = props;
  const [over, setOver] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const navigate = useNavigate();
  // const API_URL = "http://localhost:3000/api/v1/users/2/";

  const onButtonPressed = (value) => {
    axios.post(`${API_URL}api/v1/users/${currentUser}/sustainability_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      preferences: {
        title: value,
        user_id: currentUser,
        type: 'SustainabilityPreference',
      },
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });
  };
  const deleteOtherResponse = (value) => {
    axios.delete(`${API_URL}api/v1/users/${currentUser}/sustainability_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      data: {
        title: value,
        type: 'SustainabilityPreference',
      },
    }).catch((error) => {
      console.log(error);
    });
  };
  const fetchData = () => {
    axios.get(`${API_URL}api/v1/users/${currentUser}/sustainability_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'SustainabilityPreference',
      },
    }).then((response) => {
      const mydata = response.data;
      if (mydata[0].title === 'Yes') {
        setFirst(true);
      } else {
        setSecond(true);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleYesClick = () => {
    if (second) {
      deleteOtherResponse('No');
      setSecond(false);
    }
    if (first) {
      setFirst(false);
      deleteOtherResponse('Yes');
    } else {
      onButtonPressed('Yes');
      setFirst(true);
    }
    setSecond(false);
  };

  const handleNoClick = () => {
    if (first) {
      deleteOtherResponse('Yes');
      setFirst(false);
    }
    if (second) {
      setSecond(false);
      deleteOtherResponse('No');
    } else {
      onButtonPressed('No');
      setSecond(true);
    }
    setFirst(false);
  };

  useEffect(() => {
    setSwitchSignup(true);
    // fetchData();
    if (first || second) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [first, second]);

  useEffect(() => {
    fetchData();
  }, [over]);
  const handleNavigation = () => {
    navigate('/suggestions');
  };
  return (
    <div className=" h-[900px]  flex flex-col items-center  px-0 pt-[171px]">
      <span className="signup_welcome_container mb-[13px] window_font text-center">
        Your Sustainability Preferences
      </span>
      <p className="signup_text_aesthetic mb-[25px] window_font text-center">
        Should we prioritize sustainable options in your search results?
      </p>
      <div className="flex w-[248px] justify-around mb-[177px]">
        <div
          className={first
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] cursor-pointer rounded-lg mb-[8px]'}
          onClick={() => { handleYesClick(); }}
        >
          <p className="text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px] window_font">Yes</p>
        </div>

        <div
          className={second
            ? 'fit_outline w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'
            : 'w-[120px] h-[155px] border border-[#E5E5E5] rounded-lg mb-[8px] cursor-pointer'}
          onClick={() => { handleNoClick(); }}
        >
          <p className="text-center py-[66px] text-[#9C0E43] font-medium text-[18px] leading-[22px] window_font">No</p>
        </div>
      </div>
      <button
        type="button"
        disabled={!over}
        onClick={() => navigate('/suggestions')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
      <SkipButton onClick={handleNavigation} />
    </div>
  );
};
export default Sustainability;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signupBtn from '../../images/svg/signup_btn.svg';
import resultimg from '../../images/result.png';
import arrow from '../../images/svg/green_arrow.svg';

const SignupResult = (props) => {
  const [over, setOver] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
  });
  return (
    <div className=" h-[2831px]  flex flex-col items-center  px-0 pt-[48px] ">
      <span className="signup_welcome_container mb-[20px] window_font">Results!</span>

      <img className="mb-4" src={resultimg} alt="" />
      <div className="result_paragraph mb-5 md:mb-[110px]">
        <p>
          <div className="mb-4">Your style speaks volumes without saying a word, NormCore.</div>
          The city is your canvas and you wear the hues that make you
          feel like a minimalist painting among impressionists. Your style
          is smooth, curated and tailored. All your clothes are offspring
          to one another and you style your week in capsules. Dress in
          black much? You definitely wear black as a mood and denim as
          black, but you also know how to mix it up with layered prints
          on a whimsical city day.
        </p>
      </div>
      <button
        type="button"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={() => navigate('/welcome')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
    </div>

  );
};
export default SignupResult;

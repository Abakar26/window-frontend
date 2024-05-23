/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import ColorCart from './ColorCart';
import SkipButton from '../UI/SkipButton';

const StyleIdentification = (props) => {
  const styleName = [{
    name: 'Neutrals',
    color: ['bg-[#525659]', 'bg-[#65747A]', 'bg-[#B6B6B6]', 'bg-[#9D9686]',
      'bg-[#453D42]', 'bg-[#968B8A]', 'bg-[#836B56]', 'bg-[#C4A78A]', 'bg-[#EEEBE5]',
      'bg-[#F3E9E1]', 'bg-[#BC948D]', 'bg-[#F1D7C0]'],
  },
  {
    name: 'Pastels',
    color: ['bg-[#ACDEE7]', 'bg-[#CAABCB]', 'bg-[#FFFFB5]', 'bg-[#FFCDB6]',
      'bg-[#F3B0C2]', 'bg-[#C7DBDA]', 'bg-[#FFE1E9]', 'bg-[#FDD7C2]', 'bg-[#F6EAC2]',
      'bg-[#ECD6E3]', 'bg-[#D4F0F1]', 'bg-[#CCE2CB]'],
  },
  {
    name: 'Bold/Deep',
    color: ['bg-[#C4C8AD]', 'bg-[#FD5E4D]', 'bg-[#BCD0D7]', 'bg-[#9D9686]',
      'bg-[#E6B67F]', 'bg-[#257291]', 'bg-[#F5D145]', 'bg-[#FE9178]', 'bg-[#B79236]',
      'bg-[#363E47]', 'bg-[#F08C70]', 'bg-[#FE8DBF]'],
  },
  {
    name: 'Bright/Neon',
    color: ['bg-[#4DEEEA]', 'bg-[#74EE15]', 'bg-[#FFE700]',
      'bg-[#F000FF]', 'bg-[#001EFF]', 'bg-[#00FFC5]', 'bg-[#01FFFF]', 'bg-[#FFB4FD]',
      'bg-[#CDEB24]', 'bg-[#DA1C78]', 'bg-[#8200FF]', 'bg-[#7AFF01]'],
  },
  {
    name: 'Muted Dark',
    color: ['bg-[#1D574B]', 'bg-[#265C3C]', 'bg-[#294962]',
      'bg-[#4D3255]', 'bg-[#2A2E39]', 'bg-[#1B4D44]', 'bg-[#6D5B13]', 'bg-[#6C4B16]',
      'bg-[#68401D]', 'bg-[#603211]', 'bg-[#693029]', 'bg-[#58585A]'],
  },

  ];
  const [over, setOver] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/fit');
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    console.log(count);
    if (count > 2) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [count]);
  return (

    <div className=" h-[977px] flex flex-col items-center  px-0 pt-[48px]">
      <span className="aesthetic_container mb-[13px] window_font text-center">Your Color Preferences</span>
      <p className="signup_text_aesthetic  mb-[26px] window_font text-center">
        What colors do you prefer to wear? Check all that apply.
      </p>
      <div className="max-w-[684px] flex flex-wrap mb-[106px] justify-between md:justify-center">
        {styleName.map((style) => (
          <div className="mb-4">
            <ColorCart styleName={style} setCount={setCount} count={count} currentUser={props.currentUser} />
          </div>
        ))}
      </div>
      <button
        type="button"
        disabled={!over}
        onClick={() => navigate('/fit')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
      <SkipButton onClick={handleNavigation} />
    </div>

  );
};
export default StyleIdentification;

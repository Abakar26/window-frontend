/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import WebsiteCollection from './WebsiteCollection';
import SizeCollection from './SizeCollection';
import DownChevron from '../../images/svg/downChevron.svg';

const StylePrefrence = (props) => {
  const websitesNames = [
    { name: 'asos.com' },
    { name: 'zara.com' },
    { name: 'h&m.com' },
    { name: 'bonobos.com' },
    { name: 'sample-sale.com' },
    { name: 'ssense.com' },
    { name: 'jcrew.com' },
  ];

  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [over, setOver] = useState(false);
  const navigate = useNavigate();

  const brnadHandler = () => {
    setBrand(true);
    setSize(false);
  };
  const sizeHandler = () => {
    setSize(true);
    setBrand(false);
  };
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
  });

  return (
    <div className=" h-[900px]  flex flex-col items-center  px-0 pt-[195px] ">
      <p className={brand || size
        ? 'signup_text mb-[15px] window_font'
        : 'signup_text mb-[63px] window_font'}
      >
        Your Shopping Preferences
      </p>
      <div className={size ? 'hidden' : 'flex flex-col'}>
        <label className="signup_label mb-[49px]">TOP 10 BRANDS YOU WEAR</label>
        <div
          className={brand || size
            ? 'hidden'
            : 'mb-6 border border-[#C4C4C4] pl-3 py-[5.5px] max-w-[185px] w-full rounded-lg flex flex-row'}
          onFocus={brnadHandler}
        >
          <input
            className="max-w-[148px] w-full focus:outline-none"
            type="text"
            placeholder="Zara, H&M, Louis.."
          />
          <img className="pr-[13px]" src={DownChevron} alt="brand selection" />
        </div>
      </div>
      {brand && <WebsiteCollection websites={websitesNames} />}
      <div className={brand ? 'hidden' : 'flex flex-col'}>
        <label className="signup_label mb-2">SIZE YOU WEAR</label>
        <div
          className={brand || size
            ? 'hidden'
            : 'mb-[161px] border border-[#C4C4C4] pl-3 py-[5.5px] max-w-[185px] w-full rounded-lg flex flex-row'}
          onFocus={sizeHandler}
        >
          <input
            className="max-w-[148px] w-full focus:outline-none"
            type="text"
            placeholder="S, M, L"
          />
          <img className="pr-[13px]" src={DownChevron} alt="size selection" />
        </div>
      </div>
      {size && <SizeCollection />}
      <button
        type="button"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={() => navigate('/aesthetic')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>

    </div>
  );
};

export default StylePrefrence;

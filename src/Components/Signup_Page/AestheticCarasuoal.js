/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { preferencesCarousel } from '../../helpers/history';
import forwardarrow from '../../images/svg/arrowbg.svg';
import backarrow from '../../images/svg/backarrow.svg';

const AestheticCarasuoal = (props) => {
  const myimg = preferencesCarousel[props.iter];
  const [isShown, setIsShown] = useState(false);
  const [current, setcurrent] = useState(0);
  const length = myimg?.length;
  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(myimg) || myimg.length <= 0) {
  //   return null;
  // }
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="slider"
    >
      {isShown && (
        <>
          <div
            className="bg-[#9c0e43] w-[30px] h-[30px] flex justify-center pl-[9px] pr-[7px]
           pt-[6px] pb-[9px] left-arrow-aesthetic"
            onClick={nextSlide}
          >
            <img src={forwardarrow} alt="" className="object-cover" />
          </div>
          <div
            className="bg-[#9c0e43] w-[30px] h-[30px] flex justify-center pl-[9px] pr-[7px]
           pt-[6px] pb-[9px] right-arrow-aesthetic"
            onClick={prevSlide}
          >
            <img src={backarrow} alt="" className="object-cover" />
          </div>
        </>
      )}
      {myimg?.map((img, index) => (
        <div className={index === current ? 'img active' : 'img'} key={index}>
          {index === current && (<img src={img} alt="" className="aestheticimage object-cover" />)}
        </div>
      ))}
    </div>
  );
};

export default AestheticCarasuoal;

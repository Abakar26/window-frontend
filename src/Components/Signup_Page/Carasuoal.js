/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { stylesCarousel } from '../../helpers/history';
import forwardarrow from '../../images/svg/arrowbg.svg';
import backarrow from '../../images/svg/backarrow.svg';

const Carasuoal = ({ setDisable, iter }) => {
  const images = stylesCarousel[iter];
  const [current, setcurrent] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const length = images?.length;
  const nextSlide = (event) => {
    event.stopPropagation();
    setcurrent(current === length - 1 ? 0 : current + 1);
    setDisable(false);
  };
  const prevSlide = (event) => {
    event.stopPropagation();
    setcurrent(current === 0 ? length - 1 : current - 1);
    setDisable(false);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (

    <div onMouseEnter={() => { setIsShown(true); }} onMouseLeave={() => { setIsShown(false); }} className="slider">
      {isShown && (
        <>
          <div
            className="bg-[#9c0e43] w-[30px] h-[30px] flex justify-center 
            pl-[9px] pr-[7px] pt-[6px] pb-[9px] left-arrow"
            onClick={nextSlide}
          >
            <img src={forwardarrow} alt="" className="object-cover" />
          </div>
          <div
            className="bg-[#9c0e43] w-[30px] h-[30px] flex justify-center 
            pl-[9px] pr-[7px] pt-[6px] pb-[9px] right-arrow"
            onClick={prevSlide}
          >
            <img src={backarrow} alt="" />
          </div>
        </>
      )}

      {images?.map((img, index) => (
        <div className={index === current ? 'img active' : 'img'} key={index}>
          {index === current && (<img src={img} alt="" className="image object-cover rounded-lg" />
          )}
        </div>
      ))}

    </div>

  );
};

export default Carasuoal;

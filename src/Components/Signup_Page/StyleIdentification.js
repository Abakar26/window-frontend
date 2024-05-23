/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import StyleCart from './StyleCart';

const StyleIdentification = (props) => {
  const styleName = ['Casual & Chic', 'Business Casual / Business', 'Skater', 'Feminine', 'Androgynous', 'Preppy',
    'Sporty / Comfortable', 'Dressy / Sexy', 'Edgy', 'Bohemian'];
  const [over, setOver] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    props.setSwitchSignup(true);
    if (count !== 0) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [count]);
  return (
    <div className="flex flex-col items-center  px-0 pt-[42px]">
      <span className="stylepref_container mb-[13px] window_font text-center">Your Style Preferences</span>
      <p className="signup_text_aesthetic  mb-[41px] window_font text-center">
        Which styles do you most identify with? Choose Top 3
      </p>
      <div className='grid auto-cols-auto gap-y-[32px] gap-x-[20px] grid_auto_fill px-[80px]
      w-full md:px-5" mb-[81px] md:justify-center'
      >
        {styleName.map((style, i) => (
          <div className="mb-[24px]">
            <StyleCart styleName={style} setCount={setCount} count={count} currentUser={props.currentUser} iter={i} />
          </div>
        ))}
      </div>
      <button
        className="mb-[81px]"
        type="button"
        disabled={!over}
        onClick={() => navigate('/colorselection')}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
    </div>
  );
};
export default StyleIdentification;

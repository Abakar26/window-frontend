/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import AestheticCart from './AestheticCart';
import { API_URL } from '../../Constants/Constants';

const aesthetic = [{
  title: 'ART COLLECTOR',
  description:
    ' - bohemian, patterns, textures, colors, carefree, flowy, prints, loose fit, off shoulder, fringe, cowboy',
},
{
  title: 'BADDIE',
  description:
    ' - streetwear, crop, high fashion, cut-out, sexy, trendy, bralette, mini dress, sheer, bodycon, plunge',
},
{
  title: 'COTTAGE CORE',
  description:
    ' - countryside, peasant dress, rustic, romantic, farm lifestyle, bishop sleeve, outdoorsy, smock, lace',
},
{
  title: 'ACADEMIA',
  description:
    ' - cardigans, blazers, dress shirts, plaid, Oxford shoes, houndstooth, tweed, collars',
},
{
  title: 'E-GIRL/SKATER/GRUNGE',
  description:
    ' - fishnet, choker, goth, baggy, ripped jeans, distress, band tee, leather jacket, punk, metal chain',
},
{
  title: 'NORMCORE',
  description:
    ' - unisex, jeans, tshirts, sweats, button-down, sneakers, khaki, ankle pants, essentials, monochrome',
},
{
  title: 'SOFT GIRL',
  description:
    ' - feminine, pastel, floral, plaid skirts, hearts, cardigan, tenni skirt, mini, baby tee, flare bottom, cableknit',
},
{
  title: 'WFH',
  description:
    ' - turtleneck, sweatpants, slacks, comfort, loungewear, joggers, casual, wrap shirt, button-down, solids',
}];

const Aesthetic = (props) => {
  const [over, setOver] = useState(false);
  const [count, setCount] = useState(0);
  const [aestheticdata, setAestheticData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(`${API_URL}api/v1/users/${props.currentUser}/aesthetic_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'AestheticPreference',
      },
    }).then((response) => {
      const mydata = response.data;
      if (mydata && Array.isArray(mydata)) {
        setAestheticData(mydata);
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });
  };
  useEffect(() => {
    props.setSwitchSignup(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchData();
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    if (count === aesthetic.length - 1 || aestheticdata.length !== 0) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center px-0 pt-[42px]">
      <span className="aesthetic_container window_font mb-[4px] text-center">Your Aesthetic Preferences</span>
      <p className="signup_text_aesthetic  window_font mb-[64px]">How likely are you to dress in these looks?</p>
      <div className="grid auto-cols-auto gap-y-[60px] gap-x-[60px] grid_auto_fill mb-[108px] px-[124px]
      w-full md:px-5"
      >
        {aestheticdata.length !== 0
          ? aestheticdata.map((val, i) => (
            <>
              <AestheticCart
                count={aestheticdata.length}
                setCount={setCount}
                val={val}
                currentUser={props.currentUser}
                iter={i}
              />
            </>
          ))
          : aesthetic.map((val, i) => (
            <AestheticCart
              count={count}
              setCount={setCount}
              initialrating={0}
              val={val}
              currentUser={props.currentUser}
              iter={i}
            />
          ))}
      </div>
      <button
        type="button"
        className="mb-[118px]"
        disabled={!over}
        onClick={() => { navigate('/styleidentity'); }}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
    </div>
  );
};
export default Aesthetic;

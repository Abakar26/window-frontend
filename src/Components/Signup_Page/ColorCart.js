/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Constants/Constants';

const ColorCart = ({
  styleName, count, setCount, currentUser, onButtonPressed = () => { },
}) => {
  const [style, setStyle] = useState(false);
  const array = [];
  // const API_URL = "http://localhost:3000/api/v1/users/2/";
  const arraySetup = (mydata) => {
    mydata.map((value) => array.push(value.title));
    if (array.includes(styleName.name)) {
      setStyle(true);
    }
    if (array.length !== 0) {
      setCount(array.length);
    }
  };
  onButtonPressed = () => {
    if (!style) {
      axios.post(`${API_URL}api/v1/users/${currentUser}/color_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        preferences: {
          title: styleName.name,
          user_id: currentUser,
          type: 'ColorPreference',
        },
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
      });
    } else {
      axios.delete(`${API_URL}api/v1/users/${currentUser}/color_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        data: {
          title: styleName.name,
          type: 'ColorPreference',
        },
      }).catch((error) => {
        console.log(error);
      });
    }
  };
  const fetchData = () => {
    axios.get(`${API_URL}api/v1/users/${currentUser}/color_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'ColorPreference',
      },
    }).then((response) => {
      const mydata = response.data;
      arraySetup(mydata);
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onPressed = () => {
    if (style) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setStyle(!style);
  };
  return (
    <div
      className={style
        ? 'flex flex-row flex-wrap max-w-[334px] w-full rounded-[8px] shadow-lg bg-white px-[10px] pt-3 fit_outline cursor-pointer'
        : 'flex flex-row flex-wrap max-w-[334px] w-full rounded-[8px] shadow-lg bg-white px-[10px] pt-3 cursor-pointer'}
      onClick={onPressed}
    >
      <div className="grid grid-cols-6 bg-white gap-[10px] mb-4">
        {styleName.color.map((colour) => (
          <div className={`${colour} w-[44px] h-[44px] rounded-[8px]`} />
        ))}
      </div>
      <p className="sustain_button_text mb-3">{styleName.name}</p>
    </div>
  );
};
export default ColorCart;

/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carasuoal from './Carasuoal';
import { API_URL } from '../../Constants/Constants';

const StyleCart = ({
  styleName, count, setCount, currentUser, iter,
}) => {
  const [style, setStyle] = useState(false);
  const [disable, setDisable] = useState(false);
  const array = [];
  const [deleteID, setDeleteID] = useState([{ title: '', id: '' }]);
  const arraySetup = (mydata) => {
    mydata.map((value) => array.push(value.title));
    mydata.map((myvalue) => {
      const newValue = [...deleteID];
      newValue.push({ title: myvalue.title, id: myvalue.id });
      setDeleteID(newValue);
    });
    if (array.includes(styleName)) {
      setStyle(true);
    }
    if (array.length !== 0) {
      setCount(array.length);
    }
  };
  // const deleteMethod = () => {
  //   axios.delete(`${API_URL}api/v1/users/${currentUser}/style_preferences/${deleteID.id}`, {
  //     headers: {
  //       Authorization: localStorage.getItem('authorization'),
  //     },
  //   }).catch((error) => {
  //     console.log(error);
  //   }).finally(() => {
  //     setStyle(false);
  //   });
  // };
  const onButtonPressed = () => {
    if (!style) {
      axios.post(`${API_URL}api/v1/users/${currentUser}/style_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        preferences: {
          title: styleName,
          user_id: currentUser,
          type: 'StylePreference',
        },
      });
    } else {
      axios.delete(`${API_URL}api/v1/users/${currentUser}/style_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        data: {
          title: styleName,
          type: 'StylePreference',
        },
      });
    }
  };
  const fetchData = () => {
    axios.get(`${API_URL}api/v1/users/${currentUser}/style_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'StylePreference',
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
    setStyle(!style);
    setDisable(false);
    if (style) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    onButtonPressed();
  };
  return (
    <div
      className={style
        && !disable
        ? `shadow-[0_5px_10px_0px_rgba(0,0,0,0.05)] rounded-lg py-[12px] px-[10px] 
         outline outline-[#9C0E43] box-border max-w-[240px] w-full cursor-pointer`
        : `shadow-[0_5px_10px_0px_rgba(0,0,0,0.05)] rounded-lg py-[12px] px-[10px] 
         outline-none outline-[#E5E5E5] max-w-[240px] w-full cursor-pointer`}
      onClick={onPressed}
    >
      <Carasuoal
        setDisable={setDisable}
        iter={iter}
      />
      <p className="mt-4 sustain_button_text">
        {styleName}
      </p>
    </div>
  );
};
export default StyleCart;

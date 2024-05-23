/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Constants/Constants';

const ItemList = ({
  item, count, setCount, currentUser, sizePreferences,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const sizePreferenceMatched = sizePreferences.find((sp) => sp.size === item.value && sp.title === item.type);
    if (sizePreferenceMatched) {
      setIsSelected(true);
      setCount((c) => c + 1);
    }
  }, [sizePreferences]);

  const onButtonPressed = () => {
    if (!isSelected) {
      axios.post(`${API_URL}api/v1/users/${localStorage.getItem('user')}/size_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        preferences: {
          size: item.value,
          title: item.type,
          user_id: currentUser,
          type: 'SizePreference',
        },
      }).then(() => {
        setIsSelected(true);
        setCount((c) => c + 1);
      }).catch(() => {
        setIsSelected(false);
      });
    } else {
      axios.delete(`${API_URL}api/v1/users/${localStorage.getItem('user')}/size_preferences`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        data: {
          size: item.value,
          title: item.type,
          type: 'SizePreference',
        },
      }).then(() => {
        setIsSelected(false);
        setCount((c) => c - 1);
      }).catch(() => {
        setIsSelected(true);
      });
    }
  };

  return (
    <li className="float-left size">
      <div
        className="flex items-center cursor-pointer"
        onClick={(count >= 2 && !isSelected) ? undefined : onButtonPressed}
      >
        <div className={isSelected
          ? 'w-[32px] h-[32px] border-[2px] border-[#9C0E43] bg-[#9C0E43] mb-[18px] rounded-full text-center pt-2'
          : 'w-[32px] h-[32px] border-[2px] border-[#C4C4C4] bg-[#FFFFFF] mb-[18px] rounded-full text-center pt-2'}
        >
          <p className={isSelected ? 'size_div_text text-[#ffffff]' : 'size_div_text text-[#c4c4c4]'}>{item.display}</p>
        </div>
      </div>
    </li>
  );
};
export default ItemList;

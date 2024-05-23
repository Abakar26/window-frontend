/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

const SizeList = (props) => {
  const [style, setStyle] = useState(false);
  const handleButton = () => {
    setStyle(true);
  };
  return (
    <ul>
      {props.websites.map((website, i) => (
        <li
          className="website_li"
          i={i}
        >
          <button
            type="button"
            className={
              style
                ? 'bg-blue-200 rounded website_button_li'
                : 'website_button_li bg-none'
            }
            onClick={handleButton}
          >
            {website.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default SizeList;

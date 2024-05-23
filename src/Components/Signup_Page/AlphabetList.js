/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useState } from "react";

const AlphabetList = ({ alphabet, setSearch, search, setToggle }) => {
  const [style, setStyle] = useState(false);

  const onPressed = (event) => {
    setStyle(!style);
    const ser = event.target.getAttribute("data-id");
    if (!style) {
      setSearch((oldArray) => [...oldArray, ser]);
      setToggle(true);
    } else {
      setToggle(false);
      setSearch((oldArray) => {
        return oldArray.filter((searchTerm) => {
          return searchTerm !== ser;
        });
      });
    }
  };
  return (
    <button
      type="button"
      className={
        style
          ? "text-[#000000] mt-[10px] font-normal not-italic font-[Roboto] alphabate_Search"
          : "text-[#9C0E43] mt-[10px] font-normal not-italic font-[Roboto] alphabate_Search"
      }
      key={alphabet}
      data-id={alphabet}
      onClick={onPressed}
    >
      {alphabet}
    </button>
  );
};
export default AlphabetList;

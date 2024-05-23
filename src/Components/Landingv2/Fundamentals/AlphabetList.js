import { useState } from "react";
const AlphabetList = ({ alphabet, setSearch, search, setToggle, onButtonPressed = () => { } }) => {
  const [style, setStyle] = useState(false);
  const onPressed = (event) => {
    setStyle(!style);
    let ser = event.target.getAttribute('data-id');
    if (!style) {
      setSearch(oldArray => [...oldArray, ser]);
      setToggle(true);
    }
    else {
      setToggle(false);
      setSearch(search.filter(item => item !== ser));
    }
    onButtonPressed();
  }
  return (
    <button className={style ? 'text-[#000000] mt-[10px] alphabate_search outline-none' : 'text-[#9C0E43] mt-[10px] alphabate_search outline-none'}
      key={alphabet}
      data-id={alphabet}
      onClick={onPressed}>
      {alphabet}
    </button>
  );
}
export default AlphabetList;

/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';

const PriceSelectorModal = (props) => {
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);

  const handleMinChange = (event) => {
    const inputValue = event.target.value;
    if (props.max !== '' && (Number(props.max) < Number(inputValue) || Number(inputValue) < 0)) {
      setMinError(true);
      !inputValue && props.setMin(inputValue);
    } else {
      setMinError(false);
      props.setMin(inputValue);
    }
    setMin(inputValue);
    props.setPriceToggle(true);
  };

  const handleMaxChange = (event) => {
    const inputValue = event.target.value;
    if (props.min !== '' && (Number(props.min) > Number(inputValue) || Number(inputValue) < 0)) {
      setMaxError(true);
      !inputValue && props.setMax(inputValue);
    } else {
      setMaxError(false);
      props.setMax(inputValue);
    }
    setMax(inputValue);
    props.setPriceToggle(true);
  };
  return (
    <div className="bg-[#FFFFFF] pt-4 flex flex-col pb-[24px] bottom-0 max-w-none w-full rounded-t-[18px]
     rounded-[0px]"
    >
      <p className="color_selector font-medium pb-3">PRICE</p>
      <span className="border border-[#000000] opacity-10 pl-[18px] pr-[18px] mb-3 max-w-[225px] w-full
      sm:max-w-none"
      />
      <div className="flex flex-row flex-wrap pl-[6px] text-center items-center justify-between">
        <div className={`${minError && 'red-border text-red-900'} flex-row flex px-2 pt-[10px] border 
        border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[130px] w-full mr-[18px]`}
        >
          <p className="mr-2 price_dollar">$</p>
          <input
            className="w-full outline-none focus:outline-none price_dollar"
            type="number"
            placeholder="Min"
            value={min}
            onChange={handleMinChange}
          />
        </div>
        <span className="border border-[#000000] opacity-10 max-w-[26px] w-full h-[1px]" />
        <div className={`${maxError && 'red-border text-red-900'} flex-row flex px-2 pt-[10px] border
         border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[130px] w-full ml-[17px]`}
        >
          <p className="mr-2 price_dollar">$</p>
          <input
            className="w-full outline-none focus:outline-none price_dollar"
            type="number"
            placeholder="Max"
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>
    </div>
  );
};
export default PriceSelectorModal;

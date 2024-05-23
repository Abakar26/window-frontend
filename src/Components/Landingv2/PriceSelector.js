import cross from '../../images/svg/cross.svg'
import React, { useEffect, useRef, useState } from 'react';


const PriceSelector = (props) => {
  const { priceRef } = props;
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);

  const handleMinChange = (event) => {
    let inputValue = event.target.value;
    if (props.max !== "" && (Number(props.max) < Number(inputValue) || Number(inputValue) < 0)) {
      setMinError(true);
      !inputValue && props.setMin(inputValue);
    }
    else {
      setMinError(false);
      props.setMin(inputValue);
    }
    setMin(inputValue);
    props.setPriceToggle(true);
  }

  const handleMaxChange = (event) => {
    let inputValue = event.target.value;
    if (props.min !== "" && (Number(props.min) > Number(inputValue) || Number(inputValue) < 0)) {
      setMaxError(true)
      !inputValue && props.setMax(inputValue)
    }
    else {
      setMaxError(false);
      props.setMax(inputValue);
    }
    setMax(inputValue);
    props.setPriceToggle(true);
  }

  return (
    <div className={`max-w-[261px] w-full bg-[#FFFFFF] rounded-[18px] mt-2 pt-4 pl-3 pr-3 flex flex-col pb-[24px] slector_border ${props.myStyle} 
    sm:bottom-0 sm:max-w-none sm:w-full sm:rounded-t-[18px] sm:rounded-[0px]`} ref={priceRef}>
      <p className='font-medium pb-2 sm:hidden text-[0.625rem] font-[500]'>PRICE</p>
      <div className='hidden sm:block p-4'>
        <div className='flex flex-row'>
          <img src={cross} alt='' className='mr-5' />
          <label className='nav_input font-bold text-[#9C0E43]'>Price</label>
        </div>
      </div>
      <span className='border border-[#000000] opacity-10 pl-[18px] pr-[18px] mb-3 w-full sm:max-w-none'></span>
      <div className='flex flex-row justify-around flex-wrap text-center items-center sm:justify-center '>
        <div className={`${minError && 'red-border text-red-900'} ' flex flex-row px-2 pt-[10px] border border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[82px] w-full mr-[18px]'`}>
          <p className='mr-2 price_dollar'>&#x24;</p>
          <input className='w-full outline-none focus:outline-none price_dollar hide_number_input' type='number' placeholder='Min'
            value={min}
            onChange={handleMinChange}
          />
        </div>
        <span className='border border-[#000000] opacity-10 max-w-[26px] w-full h-[1px]'></span>
        <div className={`${(maxError) && 'red-border text-red-900'} ' flex flex-row px-2 pt-[10px] border border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[82px] w-full ml-[17px]'`}>
          <p className='mr-2 price_dollar'>&#x24;</p>
          <input className='w-full outline-none focus:outline-none price_dollar hide_number_input' type='number' placeholder='Max'
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>
    </div>
  )
}
export default PriceSelector; 
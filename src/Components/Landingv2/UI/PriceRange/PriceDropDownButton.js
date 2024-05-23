import React, { useState } from 'react';

const PriceDropDownButton = (props) => {
  const { min, max, isOpen } = props;

  const isFilterApplied = min.length !== 0 || max.length !== 0;

  return (
    <div
      className="bg-none text-inherit border-none p-0 cursor-pointer outline-inherit md:hidden"
      onClick={props.onClick}
    >
      <div onClick={props.openDropDown} className="website_outer_div_button">
        <span className="border-[0.5px] border-solid border-[#808080] mx-3 my-2" />
        <span className={isOpen || isFilterApplied ? '-mr-1 text-lg new_font text-[#9C0E43] font-bold' : '-mr-1 text-lg new_font  text-[#808080] font-[1rem]'}>
          {/* {isFilterApplied ? `price($${props.min} - $${props.max})` : 'price'} */}
          price
        </span>
      </div>
    </div>
  );
};
export default PriceDropDownButton;

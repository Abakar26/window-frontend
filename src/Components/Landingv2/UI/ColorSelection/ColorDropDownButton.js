import React, { useState } from 'react';

const ColorDropDownButton = (props) => {
  const { isOpen, color, count } = props;
  return (
    <div
      className="bg-none text-inherit border-none p-0 cursor-pointer outline-inherit md:hidden"
      onClick={props.onClick}
    >
      <div className="website_outer_div_button">
        <span className="border-[0.5px] border-solid border-[#808080] mx-3 my-2" />
        <span className={isOpen || count > 0 ? '-mr-1 text-lg new_font text-[#9C0E43] font-bold' : '-mr-1 text-lg new_font text-[#808080] font-[1rem]'}>
          {/* {props.count !== 0 ? `color (${props.count})` : 'color'}  */}
          color
        </span>
      </div>
    </div>
  );
};
export default ColorDropDownButton;

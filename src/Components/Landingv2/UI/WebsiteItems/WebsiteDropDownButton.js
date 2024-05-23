import React, { useState } from "react";


const WebsiteDropDownButton = (props) => {
  const {isOpen, website, openDropDown, onClick, count} = props

  return (
    <div
      className=' bg-none text-inherit border-none p-0 cursor-pointer outline-inherit md:hidden'
      onClick={onClick}
    >
      <div onClick={openDropDown} className='website_outer_div_button'>
        <span className={isOpen || count > 0 ? '-mr-1 text-lg new_font text-[#9C0E43] font-[1rem] font-black' : '-mr-1 text-lg new_font text-[#808080] font-[1rem] font-black'}>
          {/* {count !== 0 ? `websites (${count})` : 'websites'} */}
          websites
        </span>
      </div>
    </div>
  )
}
export default WebsiteDropDownButton;

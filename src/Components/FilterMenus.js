/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

const FilterMenus = ({ filterSubMenu, filterTitle, filters }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="filter_btn_div">
        <div className="sidebar_filter_btn_dropdown" onClick={() => setIsActive(!isActive)}>
          <div className="filter_btn_text">{filterTitle}</div>
          <div>{isActive ? <KeyboardArrowUpSharpIcon /> : <KeyboardArrowDownSharpIcon />}</div>
        </div>
        {isActive && <div>{filterSubMenu(filters)}</div>}
      </div>
      <div className="line_filter" />
    </>
  );
};

export default FilterMenus;

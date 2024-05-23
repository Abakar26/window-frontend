import React, { useEffect, useRef } from "react";
import ColorList from "./UI/ColorList";
import cross from "../../images/svg/cross.svg";
import { useSelector } from "react-redux";
import { colorlist } from "../../Constants/Constants";

const ColorSelector = (props) => {
  const { colorRef } = props;

  const colorsNames = useSelector((preferences) => {
    return preferences.counter.preferences.colors;
  });
  const example = useSelector((preferences) => console.log(preferences));
  const defaultColors = colorlist;

  return (
    <div
      className={`max-w-[261px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] mt-2 pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border ${props.myStyle}
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px]`}
      ref={colorRef}
    >
      <p className=" pt-1 sm:hidden text-[0.625rem] font-[500] pb-2">
        SELECT COLORS
      </p>
      <div className="hidden sm:block p-4">
        <div className="flex flex-row">
          <img src={cross} alt="" className="mr-5" />
          <label className="nav_input font-bold text-[#9C0E43]">Color</label>
        </div>
      </div>
      <span className="border border-[#000000] opacity-10  mb-3  w-full"></span>
      <div className="flex flex-wrap pl-[10px] pr-[10px] sm:pr-0">
        <ul className="flex flex-wrap m-0 p-0 list-none color-list w-full justify-start h-[15rem] overflow-auto">
          {(colorsNames.length > 1 ? colorsNames : defaultColors).map(
            (color, i) => {
              return (
                <ColorList
                  key={i}
                  color={color}
                  count={props.count}
                  setCount={props.setCount}
                  setColorToggle={props.setColorToggle}
                  setFilter={props.setFilter}
                  setArrayColor={props.setArrayColor}
                  arrayColor={props.arrayColor}
                />
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default ColorSelector;

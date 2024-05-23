import { useEffect, useState } from "react"
import { colorNumbers } from "../../../../Constants/Constants";
import { Tooltip, Button } from "@material-tailwind/react";

const ProductColorList = (props) => {
  return (
    <li className="flex flex-col items-center justify-center relative">
      <Tooltip content={props.color} placement="top" className="z-[100] bg-[#ffffff] color_popup color_popup_hover_text">
        <div className={props.selected === props.id ? `${props.outerBubble}` : ''} onClick={() => { props.handleClick(props.id) }} >
          <div className={props.selected === props.id ? `${props.innerBubble} cursor-pointer ${colorNumbers[props.color]}` : `${props.innerBubble} cursor-pointer border ${colorNumbers[props.color]}`} style={{ backgroundColor: `${colorNumbers[props.color]}` }}></div>
        </div>
      </Tooltip>
    </li>
  )
}
export default ProductColorList; 
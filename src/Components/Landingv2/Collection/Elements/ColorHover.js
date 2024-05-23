import { useState } from 'react';
import { colorNumbers } from '../../../../Constants/Constants';

const ColorHover = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <div
        className="flex flex-row w-full"
        onMouseLeave={() => { setHover(false); props.setStyle(false); }}
      >
        <div
          className={`w-[22px] h-[22px] rounded-full mb-[2px] cursor-pointer border border-[#ededed] ${colorNumbers[props.color]}`}
          // style={{ backgroundColor: `${props.color}` }}
          onClick={() => { props.setEnable(false); props.setStyle(false); }}
          onMouseEnter={() => { setHover(true); props.setStyle(true); }}
        />
        <ul className="p-0 m-0">
          <li>
            {hover && <div className="w-[43px] h-[22px] bg-[#ffffff] items-center rounded-[20px] color_popup color_popup_hover_text flex justify-center ml-2">{props.color}</div>}
          </li>
        </ul>
      </div>
    </li>
  );
};
export default ColorHover;

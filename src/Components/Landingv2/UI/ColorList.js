import { useEffect, useState } from "react";
import { colorNumbers } from "../../../Constants/Constants";


const ColorList = (props) => {
  const [style, setStyle] = useState(false);
  useEffect(() => {
    if (typeof props.arrayColor !== "undefined") {
      if (props.arrayColor.includes(props.color)) {
        setStyle(true);
      }
    }
  }, [props.arrayColor])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setFilter('');
      props.setArrayColor(props.arrayColor.filter(item => item !== props.color));
      // if (props.color.name === 'Metallic') {
      //   props.setArrayColor(props.arrayColor.filter(item => item !== "Black"));
      // } else if (props.color.name === 'Teal') {
      //   props.setArrayColor(props.arrayColor.filter(item => item !== "Blue"));
      // } else if (props.color.name === 'Ecru') {
      //   props.setArrayColor(props.arrayColor.filter(item => item !== "Brown"));
      // } else {
      //   props.setArrayColor(props.arrayColor.filter(item => item !== props.color.name));
      // }
    } else {
      props.setArrayColor(old => [...old, props.color]);
      props.setCount(props.count + 1)
      props.setFilter(props.color);
      // if (props.color.name === 'Metallic') { 
      //   props.setArrayColor(old => [...old, "Black"]);
      // } else if (props.color.name === 'Teal') {
      //   props.setArrayColor(old => [...old, "Blue"]);
      // } else if (props.color.name === 'Ecru') {
      //   props.setArrayColor(old => [...old, "Brown"]);
      // } else {
      //   props.setArrayColor(old => [...old, props.color.name]);
      // }
    }

    if (props.count !== -1) {
      props.setColorToggle(true);
    }
    else {
      props.setColorToggle(false);
    }
  }
  return (
    <li className="mx-3 cursor-pointer" onClick={onPressed}>
      <div className='flex flex-col items-center'>
        <div className={style ? `w-[42px] h-[42px] border-[4px] border-[#6188E5] ${colorNumbers[props.color]} mb-1 rounded-full` :
          `w-[42px] h-[42px] border border-[#EDEDED] ${colorNumbers[props.color]} mb-1 rounded-full`}></div>
        <p className='color_li mb-1'>{props.color}</p>
      </div>
    </li>
  );
}
export default ColorList;
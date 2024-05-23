import { useState, useEffect } from "react";
const FitList = (props) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (typeof props.arrayFit !== "undefined") {
      if (props.arrayFit.includes(props.fit)) {
        setStyle(true);
      }
    }
  }, [props.arrayFit])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setArrayFit(props.arrayFit.filter(item => item !== props.fit));
    } else {
      props.setCount(props.count + 1)
      props.setArrayFit(old => [...old, props.fit]);
    }
  }
  return (
    <li onClick={onPressed}>
      <div className={style ? 'flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]' : 'flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]'}>
        <span className='ml-3'>{props.fit}</span>
      </div>
    </li>
  );
}

export default FitList;


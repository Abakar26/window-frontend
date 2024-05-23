import { useState, useEffect } from "react";
const LengthList = (props) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (typeof props.arrayLength !== "undefined") {
      if (props.arrayLength.includes(props.length)) {
        setStyle(true);
      }
    }
  }, [props.arrayLength])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setArrayLength(props.arrayLength.filter(item => item !== props.length));
    } else {
      props.setCount(props.count + 1)
      props.setArrayLength(old => [...old, props.length]);
    }
  }
  return (
    <li onClick={onPressed}>
      <div className={style ? 'flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]' : 'flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]'}>
        <span className='ml-3'>{props.length}</span>
      </div>
    </li>
  );
}

export default LengthList;


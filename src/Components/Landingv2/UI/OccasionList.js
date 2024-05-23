import { useState, useEffect } from "react";
const OccasionList = (props) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (typeof props.arrayOccasion !== "undefined") {
      if (props.arrayOccasion.includes(props.fabric)) {
        setStyle(true);
      }
    }
  }, [props.arrayOccasion])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setArrayOccasion(props.arrayOccasion.filter(item => item !== props.fabric));
    } else {
      props.setCount(props.count + 1)
      props.setArrayOccasion(old => [...old, props.fabric]);
    }
  }
  return (
    <li onClick={onPressed}>
      <div className={style ? 'flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]' : 'flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]'}>
        <span className='ml-3'>{props.fabric}</span>
      </div>
    </li>
  );
}
export default OccasionList;
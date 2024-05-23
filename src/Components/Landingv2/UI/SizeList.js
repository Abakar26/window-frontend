import { useState, useEffect } from "react";
const SizeList = (props) => {
  const [style, setStyle] = useState(false);
  useEffect(() => {
    if (typeof props.arraySize !== "undefined") {
      if (props.arraySize.includes(props.size)) {
        setStyle(true);
      }
    }
  }, [props.arraySize])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setFilter('');
      props.setArraySize(props.arraySize.filter(item => item !== props.size));
    } else {
      props.setCount(props.count + 1)
      props.setFilter(props.size);
      props.setArraySize(old => [...old, props.size]);
    }
  }
  return (
    <li onClick={onPressed}>
      <div className={style ? 'flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]' : 'flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]'}>
        <span className='ml-3'>{props.size}</span>
      </div>
    </li>
  );
}
export default SizeList;
import { useState, useEffect } from "react";
const FabricList = (props) => {
  const [style, setStyle] = useState(false);
  useEffect(() => {
    if (typeof props.arrayStyle !== "undefined") {
      if (props.arrayStyle.includes(props.fabric)) {
        setStyle(true);
      }
    }
  }, [props.arrayStyle]);

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1);
      props.setArrayStyle(
        props.arrayStyle.filter((item) => item !== props.fabric)
      );
    } else {
      props.setCount(props.count + 1);
      props.setArrayStyle((old) => {
        return [...old, props.fabric];
      });
    }
  };
  return (
    <li onClick={onPressed}>
      <div
        className={
          style
            ? "flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]"
            : "flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]"
        }
      >
        <span className="ml-3">{props.fabric}</span>
      </div>
    </li>
  );
};
export default FabricList;

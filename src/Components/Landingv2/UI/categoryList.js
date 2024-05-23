import { useState, useEffect } from "react";
const CategoryList = (props) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (typeof props.arrayCategory !== "undefined") {
      if (props.arrayCategory.includes(props.category)) {
        setStyle(true);
      }
    }
  }, [props.arrayCategory])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setCount(props.count - 1)
      props.setFilter('');
      props.setArrayCategory(props.arrayCategory.filter(item => item !== props.category));
    } else {
      props.setCount(props.count + 1)
      props.setFilter(props.category);
      props.setArrayCategory(old => [...old, props.category]);

    }
  }
  return (
    <li onClick={onPressed}>
      <div className={style ? 'flex w-full py-2 cursor-pointer bg-[#F8E6EC] rounded-[30px] my-[2px]' : 'flex w-full py-2 cursor-pointer hover:bg-[#F8E6EC] rounded-[30px] my-[2px]'}>
        <span className='ml-3'>{props.category}</span>
      </div>
    </li>
  );
}
export default CategoryList;
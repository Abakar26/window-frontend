import { useState } from "react";
import ProductColorList from "./ProductColorList";

const ProductColors = ({ outerBubble, innerBubble, colors }) => {
  const [selected, setSelected] = useState(0);
  const handleClick = (id) => {
    setSelected(id);
  };
  return (
    <div className="colors_div gap-x-3">
      {colors?.map((color, id) => (
        <ul key={id}>
          <ProductColorList
            color={color}
            id={id}
            selected={selected}
            handleClick={handleClick}
            outerBubble={outerBubble}
            innerBubble={innerBubble}
          />
        </ul>
      ))}
    </div>
  );
};

export default ProductColors;

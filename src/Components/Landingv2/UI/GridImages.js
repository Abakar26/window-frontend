/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import ProductDisplayMoreCard from "../ProductDisplayMoreCard";
const GridImages = ({ products, updateProduct, productCollections }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid collection_cart_colum gap-y-[30px] sm:gap-y-0 gap-x-[32px] mb-[60px] sm:mb-0">
        {products.map((product, index) => (
          <ProductDisplayMoreCard
            index={index}
            product={product}
            key={`${product.id}-${index}`}
            updateProduct={updateProduct}
            productCollections={productCollections}
          />
        ))}
      </div>
    </div>
  );
};
export default GridImages;

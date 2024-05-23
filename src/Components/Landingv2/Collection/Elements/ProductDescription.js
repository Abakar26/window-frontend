const ProductDescription = () => (
  <div className="max-w-[350px] w-full" >
    <p className='text-xs pt-2 font-semibold'>OUTER SHELL</p>
    <p className='product_desc'>100% cotton</p>
    <p className='text-xs pt-2 font-semibold'>CARE</p>
    <p className='product_desc'>
      Caring for your clothes is caring for the environment. To lengthen the life of your denim garments,
      always wash them inside out in low temperatures. This way we help preserve the colors and structure of
      the fabric and reduce energy consumption.
    </p>
    <ul className='product_desc ml-2 list-[dot]'>
      <li>&#8226; Machine wash max. 40ºC/104ºF delicate cycle</li>
      <li>&#8226; Do not use bleach / whitener</li>
      <li>&#8226; Iron maximum 150ºC/302ºF</li>
      <li>&#8226; Tetrachloroethylene Dry Clean</li>
      <li>&#8226; Low temperature dryer may be used</li>
    </ul>
  </div>
);

export default ProductDescription;
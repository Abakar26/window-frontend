import { useState } from "react";
const products = [
  {
    name: 'asos.com',
  },
  {
    name: 'zara.com'
  },
  {
    name: 'macys.com'
  },
  {
    name: 'aritzia.com'
  },]
const RecentSearches = () => {
  const [style, setStyle] = useState(false);
  const onPressed = (event) => {
    setStyle(!style);
  }
  return (
    <div className=" max-w-[791px]  w-full ">
      {
        [...Array(3)].map(() => (
          <div className=' max-w-[791px] bg-[#ffffff] w-full dress_outline mt-[32px] border border-[#999999] rounded-[8px] '>
            <div className='flex flex-row justify-between '>
              <p className='dress_categ_text '> "Skinny jeans"</p>
              <button className='  border border-[#9C0E43] rounded-[20px]  dress_cart_button_text'>Search</button></div>
            <div className='flex flex-row  justify-between'>
              <div className="">
                {products.map((product) => (
                  <button className='dress_row_text bg-[#F8E6EC]  rounded-[20px] px-[8px] py-[3px] mr-[4px]' >{product.name}</button>))}
                <button className=' dress_row_text text-[#808080] mr-[10px] ml-[10px]'> Size(2)</button>
                <button className=' dress_row_text text-[#808080] mr-[10px]'> Color(1)</button>
                <button className=' dress_row_text text-[#808080] mr-[10px]'> Fit(1)</button>
              </div>
              <div className="">
                <button className='dress_remove_text  mt-[8px] mr-[33px]'> Remove</button>
              </div>
            </div>
          </div>
        ))
      }
    </div >
  )
}
export default RecentSearches;
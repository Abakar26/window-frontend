import { useState } from "react"
import CartSearch from "./UI/Search/CartSearch"
import cartimage from '../../images/recentimg.png'
import forwardarrow from "../../images/svg/fr.svg";
import backarrow from "../../images/svg/bk.svg";

const products = [cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage, cartimage,]

const RecentViwedCart = () => {
  const [isShown, setIsShown] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectImg, setSelectImg] = useState(0);

  const nextSlide = () => {
    if (selectImg <= -183) {
      setSelectImg(selectImg + 183);
      setCounter(counter - 1);
    }
  };
  const prevSlide = () => {
    if (selectImg <= 0 && counter <= products.length - 2) {
      setSelectImg(selectImg - 183);
      setCounter(counter + 1);
    }
  }

  return (
    <div className="bg-white">
      <div className="py-16 pl-[42px] sm:py-24 lg:max-w-7xl lg:mx-auto sm:pl-4">
        <div className="pr-[45px] flex flex-row items-center justify-between sm:px-6 lg:px-0">
          <CartSearch value={'max-w-fit'} first={'Recently Viewe'} second={'d'} />
          <div className='product_cart_scroll hover:text-[#E2B9C8]'>
            <a href="/collection" className="sm:block ">
              View More<span className=''> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="mt-8 relative" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
          {isShown && (
            <>
              <div className='bg-[#ffffff] w-[42px] h-[42px] flex pl-[14px] py-3 rounded-full left-arrow-pd' onClick={nextSlide}  >
                <img src={forwardarrow} alt="" />
              </div>
              <div className='bg-[#ffffff] w-[42px] h-[42px] flex py-3 pl-[17px] rounded-full right-arrow-pd' onClick={prevSlide}>
                <img src={backarrow} alt="" />
              </div>
            </>
          )}
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto remove_scroll">
            <ul className="mr-4 inline-flex space-x-8 sm:p-0 duration-700" style={{ 'marginLeft': `${selectImg}px` }}>
              {products.map((product, i) => (
                <li key={i}>
                  <div className="w-[151px] md:w-[70px] group flex bg-[#FFFFFF] flex-col">
                    <div className='w-[151px] md:w-[70px] h-[180px] md:h-[90px] mb-1'>
                      <img src={product} alt='' />
                    </div>
                    <div className='flex flex-row w-[151px] mb-[7px] justify-between'>
                      <label className='recent_viewed_brand md:hidden'>Zara</label>
                      <label className='recent_viewed_brand md:hidden'>$49.99</label>
                    </div>
                    <p className='product_cart_detail text-[#000000]'>Molly Joe Floral Sundress</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecentViwedCart;
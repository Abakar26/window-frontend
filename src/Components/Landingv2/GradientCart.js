import { useState } from "react"
import CartSearch from "./UI/Search/CartSearch"
import { useNavigate } from "react-router-dom"
import forwardarrow from "../../images/svg/fr.svg";
import backarrow from "../../images/svg/bk.svg";

const products = [{ title: 'Sale Season!', detail: 'Shop the sales featuring discounts up to 60% off from brands such as Reformation, Zara and more!', bg_color: 'linear-gradient(252.17deg, #D9BEA0 0.93%, #9C0E43 99.48%)' },
{ title: 'New Arrivals', detail: 'Browse the fresh collections from all your saved brands.', bg_color: 'linear-gradient(110.01deg, #EAE1D2 0%, #FFE2AC 100%)' },
{ title: 'No Sleep November', detail: 'We get it. We love a good night out look too.. Shop this edit for weekend party vibes featuring  Sezane, BCBG, and Oh Polly.', bg_color: 'black' },
{ title: 'Sale Season!', detail: 'Shop the sales featuring discounts up to 60% off from brands such as Reformation, Zara and more!', bg_color: 'linear-gradient(252.17deg, #D9BEA0 0.93%, #9C0E43 99.48%)' },
{ title: 'New Arrivals', detail: 'Browse the fresh collections from all your saved brands.', bg_color: 'linear-gradient(110.01deg, #EAE1D2 0%, #FFE2AC 100%)' },
{ title: 'No Sleep November', detail: 'We get it. We love a good night out look too.. Shop this edit for weekend party vibes featuring  Sezane, BCBG, and Oh Polly.', bg_color: 'black' },
{ title: 'Sale Season!', detail: 'Shop the sales featuring discounts up to 60% off from brands such as Reformation, Zara and more!', bg_color: 'linear-gradient(252.17deg, #D9BEA0 0.93%, #9C0E43 99.48%)' },
{ title: 'New Arrivals', detail: 'Browse the fresh collections from all your saved brands.', bg_color: 'linear-gradient(110.01deg, #EAE1D2 0%, #FFE2AC 100%)' },
{ title: 'No Sleep November', detail: 'We get it. We love a good night out look too.. Shop this edit for weekend party vibes featuring  Sezane, BCBG, and Oh Polly.', bg_color: 'black' },
]

const GradientCart = (props) => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectImg, setSelectImg] = useState(0);

  const nextSlide = () => {
    if (selectImg <= -556) {
      setSelectImg(selectImg + 556);
      setCounter(counter - 1);
    }
  };
  const prevSlide = () => {
    if (selectImg <= 0 && counter <= products.length - 2) {
      setSelectImg(selectImg - 556);
      setCounter(counter + 1);
    }
  }
  return (
    <div className="bg-white">
      <div className="pt-16 pl-[42px] sm:pl-4">
        <div className="pr-[45px] flex flex-row items-center justify-between sm:px-6 lg:px-0 pointer-events-none">
          <CartSearch value={'w-fit'} first={'More of What You Lik'} second={'e'} />
          <div className='product_cart_scroll hover:text-[#E2B9C8] sm:hidden'>
            <a href="/product_display_more" className="sm:block ">
              View More<span className=''> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="mt-8 relative pointer-events-none" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
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
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto remove_scroll"
          >
            <ul className="mr-4 inline-flex space-x-8 sm:p-0 duration-700" style={{ 'marginLeft': `${selectImg}px` }}>
              {products.map((product, i) => (
                <li key={i}>
                  <div className="w-[530px] md:w-[342px] h-[161px] md:h-[101px] group flex flex-col pt-[42px] md:py-6 pb-[39px] px-8 md:px-5 rounded-[8px] justify-between"
                    style={{ background: product.bg_color }}>
                    <label className='gradient_header mb-3'>{product.title}</label>
                    <div className='flex flex-row w-[466px] md:w-[304px] justify-between'>
                      <p className='gradient_paragraph w-[256px] md:w-[169px] flex-wrap'>{product.detail}</p>
                      <button className='rounded-[40px] bg-[#ffffff] max-w-[138px] md:max-w-[89px] w-full h-[41px] md:h-[25px] gradient_button_text'
                        onClick={() => { navigate('collection') }} disabled={true} >View Collection</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}
export default GradientCart;
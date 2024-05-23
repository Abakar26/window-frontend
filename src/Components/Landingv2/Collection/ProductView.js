import '../../../Styles/ProductView.css';
import { IoIosLink } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Tooltip from './Tooltip';
import { useRef, useState, useEffect } from 'react';
import { WEBSITES } from './Constants';
import { createPopper } from '@popperjs/core';
import ProductColors from './Elements/ProductColors';
import SelectBox from './Elements/SelectBox';
import ProductDescription from './Elements/ProductDescription';
import ProductCard from './ProductCard';
import bookmarkbtn from '../../../images/svg/bookmarkbtnimg.svg';
import bookmarkbtnoff from '../../../images/svg/bookmarkbtnoflne.svg';
import bookmarkimg2 from '../../../images/wdummy.jpeg';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../Constants/Constants';

import BookmarkPopup from './Modals/BookmarkPopup';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

const ProductView = (props) => {
  const location = useLocation()
  const sizes = location.state.mysizes;
  const [showSizeSuggestion, setShowSizeSuggestion] = useState(false);
  const [suggestionsStyle, setSuggestionStyle] = useState('size_select_box');
  const [showTooltip, setShowTooltip] = useState(false);
  const iconBtnRef = useRef();
  const tooltipRef = useRef();
  const [showDescription, setShowDescription] = useState(false);
  const [reff, setReff] = useState(false);
  const [box, setBOx] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  if (location.state.images.length === 0) {
    let arr = ['undefined', 'undefined', 'undefined', 'undefined']
    location.state.images = arr
  }


  const openDescription = () => setShowDescription(true);
  const closeDescription = () => setShowDescription(false);

  const handleSizeSuggestion = () => {
    setShowSizeSuggestion(true);
    setSuggestionStyle('on_size_suggestion');
  };

  const displayTooltip = () => {
    createPopper(iconBtnRef.current, tooltipRef.current, {
      placement: 'right'
    });
    setShowTooltip(true);
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const fetchData = () => {
    axios.get(API_URL).then((response) => {
      const mydata = response.data;
      setProducts(mydata);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });
  }
  useEffect(() => {
    if(!localStorage.getItem('authorization')){
      navigate('/login')
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    fetchData()
  }, [])

  return (
    <>
      <div className='main_div'>
        <div className='product_modal_dim flex overflow-y-scroll'>
          <div className='flex flex-col bg-white w-5/12'>
            <p className='leading-relaxed product_title_tag'>
              {location.state.websiteName}
            </p>
            <p className='leading-relaxed product_category_tag'>
              {location.state.title}
            </p>
            <div className='product_price_div'>
              <span className='product_price_tag'>{`$${location.state.price}`}</span><span className='decimal_tag'>.00</span>
            </div>
            <p className='product_desc'>
              {location.state.description}
              {
                !showDescription &&
                <button className='more_tag' onClick={openDescription}>&nbsp;More info</button>
              }
            </p>
            {
              showDescription &&
              <ProductDescription />
            }
            {
              showDescription &&
              <button className='product_desc more_tag' onClick={closeDescription}>Less info</button>
            }
            <p className='color_tag'>COLOR</p>
            <ProductColors innerBubble='inner_bubble' outerBubble='modal_color_bubble' colors={location.state.colors} />
            <p className='color_tag mb-1'>SIZE</p>
            <div className='inline-block relative w-64'>
              <SelectBox
                id='sizeDropdown'
                cssClass={`${suggestionsStyle} block appearance-none px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline`}
                onChangeFunc={handleSizeSuggestion}
                optionsData={sizes}
              />
              <div className='pointer-events-none absolute inset-y-0 right-8 flex items-center'>
                <MdKeyboardArrowDown />
              </div>
            </div>
            {
              showSizeSuggestion &&
              <div>
                <p
                  className='size_suggestions pt-px'
                >
                  We think this size would be a good fit for you&nbsp;
                  <div
                    className='cursor-pointer'
                    ref={iconBtnRef}
                    onMouseEnter={displayTooltip}
                    onMouseLeave={hideTooltip}
                  >
                    <AiFillQuestionCircle />
                  </div>
                </p>
                <Tooltip tooltipRef={tooltipRef} showTooltip={showTooltip} />
              </div>
            }
            {box && <BookmarkPopup setReff={setReff} reff={reff} mystyle={'added_bookmark_button2'} />}
            <div className='mt-5'>
              <button className='buy_now_btn w-full'>
                <div className='flex flex-col'>
                  <div className='btn_text'>
                    Buy Now
                  </div>
                  <div className='btn_link' onClick={() => { openInNewTab(location.state.websiteLink); console.log('clicking') }}>
                    <IoIosLink />{`${location.state.websiteName}.com`}
                  </div>
                </div>
              </button>
            </div>
            <p className='not_sure'>Not sure yet?</p>
            <div className='fav_btn_div'>
              <p className='add_fav_desc'>Add this item to your collection and you can easily come back to it later</p>
              {!reff &&
                <button className='modal_fav_btn cursor-pointer' onClick={() => setBOx(!box)}>
                  <img src={bookmarkbtnoff} alt='' />
                </button>}
              {reff &&
                <button className='modal_fav_btn cursor-pointer' onClick={() => setBOx(!box)} >
                  <img src={bookmarkbtn} alt='' />
                </button>}
            </div>
          </div>
          <div className='bg-white pl-[24px] pr-[13px] overflow-y-scroll remove_scroll  translate-y-0'>
            <ul style={{ 'transform': `translateY(-${selectImg}px)` }} className='duration-700'>
              {location.state.images.map((img) => {
                return (
                  <li className='mb-5'>
                    {img === 'undefined' || typeof img === 'undefined' ? <img src={bookmarkimg2} alt='Avatar' className='w-[402px] h-[549px] object-cover' /> :
                      <img src={`${img}`} alt='Avatar' className='w-[402px] h-[549px] object-cover' />}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='flex flex-col bg-white '>
            <div className='flex flex-col gap-y-[14px] overflow-y-scroll remove_scroll'>
              {location.state.images.map((img, index) => {
                return (
                  <>
                    {img === 'undefined' || typeof img === 'undefined' ? <img src={bookmarkimg2} alt='Avatar' className='cursor-pointer w-[75px] h-[75px]' onClick={() => { setSelectImg((index * 549) + (index * 20)) }} /> :
                      <img src={`${img}`} alt='Avatar' className='cursor-pointer w-[75px] h-[75px]' onClick={() => { setSelectImg((index * 549) + (index * 20)) }} />}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className='related_images_div w-full'>
          <div className='px-14'>
            <div className='hr_line' />
          </div>
          <p className='related_products'>RELATED PRODUCTS</p>
          <div className='grid grid-cols-5 md:grid-cols-3 md:gap-7 mt-9'>
            {
              products.map((website, index) => (
                <ProductCard
                  index={index}
                  website={website}
                  key={`${website}-${index}`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;

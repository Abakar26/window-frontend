/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import '../../../Styles/ProductDetails.css';
import axios from 'axios';
import { IoIosLink } from 'react-icons/io';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import SelectBox from './Elements/SelectBox';
import ProductColors from './Elements/ProductColors';
import Tooltip from './Tooltip';
import bookmarkbtn from '../../../images/svg/bookmarkbtnimg.svg';
import bookmarkbtnoff from '../../../images/svg/bookmarkbtnoflne.svg';
import { webistesListNames, API_URL } from '../../../Constants/Constants';
import bookmarkimg2 from '../../../images/wdummy.jpeg';
import CollectionMobileModal from './CollectionMobileModal';

const ProductDetails = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [showSizeSuggestion] = useState(false);
  const [suggestionsStyle] = useState('size_select_box');
  const [showTooltip, setShowTooltip] = useState(false);
  const iconBtnRef = useRef();
  const tooltipRef = useRef();
  const [showDescription, setShowDescription] = useState(false);
  const [box, setBOx] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  let array = [];

  const fetchProduct = (myProduct) => {
    setLoading(true);
    axios.get(`${API_URL}api/v1/products/${myProduct}`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
    }).then((response) => {
      setProduct(response?.data);
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    props.setSwitchNav(true);
    if (location?.state) {
      const path = location.pathname.split('/');
      fetchProduct(path[2]);
    }
  }, []);

  const separator = (price) => {
    if (price) {
      const myprice = price?.toString();
      array = myprice.split('.');
      if (typeof array[1] === 'undefined') {
        array[1] = '00';
      }
    }
  };

  const updateProduct = (myProduct) => {
    setProduct(myProduct);
  };

  const displayTooltip = () => {
    createPopper(iconBtnRef.current, tooltipRef.current, {
      placement: 'top',
    });
    setShowTooltip(!showTooltip);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {typeof product?.price !== 'undefined' && separator(product?.price)}
      {loading ? <></>
        : (
          <div className="default_padding">
            <div className="flex flex-col items-center relative">
              <div className="flex flex-col items-start max-w-[350px] w-full">
                <p className="leading-relaxed product_title_style mb-1">
                  {webistesListNames[product?.website_name]?.toUpperCase()}
                </p>
                <p className="leading-relaxed product_category_style mb-1">
                  {product?.title}
                </p>
                <div className="mb-2">
                  <span className="product_price_style">{`$${array[0]}.`}</span>
                  <span className="decimal_tag">{array[1]}</span>
                </div>
                <div className="mb-2 flex w-full justify-center">
                  <img
                    src={typeof product?.images !== 'undefined' ? product?.images[0] : bookmarkimg2}
                    alt="Avatar"
                    className="w-[354px] h-[430px] object-cover"
                  />
                </div>
                <p className="color_style mb-2">{`COLOR - ${product?.mycolors}`}</p>
                <ProductColors
                  innerBubble="product_inner_bubble"
                  outerBubble="product_color_bubble"
                  colors={product?.mycolors}
                />
                <p className="color_style mt-3 mb-2">SIZE</p>
                <div className="flex">
                  <div className="inline-block relative w-[228px]">
                    <SelectBox
                      id="sizeDropdown"
                      cssClass={`${suggestionsStyle}
                   block appearance-none px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline`}
                      // onChangeFunc={handleSizeSuggestion}
                      optionsData={product?.mysizes}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-8 flex items-center">
                      <MdKeyboardArrowDown className={showSizeSuggestion && 'on_suggestion_icon'} />
                    </div>
                  </div>
                  {showSizeSuggestion && (
                    <div className="suggestion_div w-5/12">
                      <Tooltip tooltipRef={tooltipRef} showTooltip={showTooltip} />
                      <span className="size_suggestions_mobile">
                        We think this size would be a good fit for you
                        <AiFillQuestionCircle
                          className="suggestion_info_icon"
                          onClick={displayTooltip}
                          ref={iconBtnRef}
                        />
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className="mt-6 mb-6 w-full"
                  onClick={() => { openInNewTab(product?.website_link); }}
                >
                  <button
                    className="buy_now_btn_style max-w-[350px] w-full"
                    type="button"
                  >
                    <div className="flex flex-col">
                      <div className="btn_text_style">
                        Buy Now
                      </div>
                      <div className="btn_link cursor-pointer">
                        <IoIosLink />
                        {product?.website_name}
                      </div>
                    </div>
                  </button>
                </div>
                <p className="not_sure">Not sure yet?</p>
                <div className="fav_btn_div mb-4 max-w-[350px]">
                  <p className="add_fav_desc">
                    Add this item to your collection and you can easily come back to it later
                  </p>
                  {!product?.is_bookmarked
                    && (
                      <button
                        className="modal_fav_btn cursor-pointer"
                        onClick={() => setBOx(!box)}
                        type="button"
                      >
                        <img src={bookmarkbtnoff} alt="" />
                      </button>
                    )}
                  {product?.is_bookmarked
                    && (
                      <button
                        className="modal_fav_btn cursor-pointer"
                        onClick={() => setBOx(!box)}
                        type="button"
                      >
                        <img src={bookmarkbtn} alt="" />
                      </button>
                    )}
                </div>
                <hr />
                <p className="product_desc mt-4 max-w-[384px]">
                  {product?.description?.length >= 250
                    ? (
                      <>
                        {showDescription ? product?.description : `${product?.description.substring(0, 100)}...`}
                        <button
                          className="more_tag"
                          onClick={() => setShowDescription(!showDescription)}
                          type="button"
                        >
                          &nbsp;
                          {showDescription ? 'Less Info' : 'More info'}
                        </button>
                      </>
                    ) : product?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      {
        box
        && (
          // eslint-disable-next-line react/react-in-jsx-scope
          <CollectionMobileModal
            setBOx={setBOx}
            box={box}
            product_id={product.id}
            product={product}
            productCollections={location?.state?.myproductCollections}
            updateProduct={updateProduct}
          />
        )
      }
    </>
  );
};

export default ProductDetails;

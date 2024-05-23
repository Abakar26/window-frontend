/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { BsBookmark } from 'react-icons/bs';
import { AiTwotoneEuroCircle } from 'react-icons/ai';
import { IoIosLink } from 'react-icons/io';
import cardImg from '../images/card-img.jpeg';

const ProductCard = ({ website }) => {
  const productPrice = 45.95;
  const decimalPart = productPrice.toString().split('.')[1];

  return (
    <>
      <div className="card">
        <div className="fav_btn">
          <button type="button"><BsBookmark /></button>
        </div>
        <img src={cardImg} alt="Avatar" style={{ width: '100%' }} />
        <div className="name_price_div">
          <p className="website_title">{website}</p>
          <div>
            <span className="product_price">
              {Math.trunc(productPrice)}
              .
            </span>
            <span className="decimal">{decimalPart}</span>
          </div>
        </div>
        <div>
          <p className="product_title">Straight fit jeans</p>
        </div>
        <div className="color_website">
          <button className="single_color_btn" type="button"><AiTwotoneEuroCircle className="bubble" /></button>
          {/* <button className='multi_color_btn gap-1'><AiTwotoneCheckCircle className='color_bubble' />+5</button> */}
          <button type="button" className="web_url">
            <IoIosLink className="h-5" />
            {website}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

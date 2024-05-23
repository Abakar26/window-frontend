import { useNavigate } from 'react-router-dom';
import React from 'react'
import bookmarkimg from '../images/svg/bookmarkimg.svg';
import { useState } from 'react';
import bookmarkimg2 from '../images/svg/bookmarkimg2.svg';
import bookmarkimg3 from '../images/svg/bookmarkimg3.svg';
import bookmarkbtn from '../images/svg/bookmarkbtn.svg';


const products = [
  {
    id: 1,
    name: 'ANN TAYLOR',
    href: '#',
    description: 'Molly Joe Floral Sundress',
    price: '$128',
    imageSrc: bookmarkimg,
    imageAlt: '',
  },
  {
    id: 2,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg2,
    imageAlt: '',
  },
  {
    id: 3,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg3,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg3,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg2,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg2,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 9,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg3,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'ANN TAYLOR',
    description: 'Molly Joe Floral Sundress',
    href: '#',
    price: '$128',
    imageSrc: bookmarkimg,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]
const Bookmarks = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProductShowing, setCurrentProductShowing] = useState('');
  const [showSizeSuggestion, setShowSizeSuggestion] = useState(false);
  const [suggestionsStyle, setSuggestionStyle] = useState('size_select_box');
  const [showDescription, setShowDescription] = useState(false);
  const [offset, setOffset] = useState(0);
  const [imageIndex, setImageIndex] = useState(5);
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const deviceWidth = window.innerWidth;
  // const productPrice = 45.95;
  const onFocus = () => {
    setFocus(true);
  }
  const focusOut = () => {
    setFocus(false);
  }

  const openProductModal = (product) => {
    if (deviceWidth > 480) {
      setCurrentProductShowing(product);
      setShowModal(true);
    } else {
      navigate('/collection/product-details');
    }
  }

  const closeModal = () => {
    setShowModal(false);
    setShowSizeSuggestion(false);
    setSuggestionStyle('size_select_box');
    setShowDescription(false);
    setOffset(0);
    setImageIndex(5);
  }

  return (
    <>
      <div className="bg-white ">
        <div className="max-w-2xl mx-auto  lg:max-w-7xl ">
          <p className='bookmarks_show_text mb-[17px] flex  '>Showing 427 results for
            <span className=' ml-[6px] font-bold'>summer dress</span></p>
          <div className='grid  grid-cols-3   md:grid-cols-5 sm:grid-cols-2 gap-y-[64px] gap-x-[36px]'>
            {products.map((product) => (
              <a key={product.id} href={product.href} className=" " >
                <div className="">
                  <div className='flex flex-col  relative '>
                    <img src={product.imageSrc} alt='' className='mb-[8px]' />
                    <button className=' absolute top-[12px] right-[18px]' >
                      <img src={bookmarkbtn} alt='' className='dressbtn bg-[#FA454F] fill-[#FA454F] stroke-transparent outline-none border-transparent text-[#FA454F]' />
                    </button>
                  </div>
                </div>
                <div className="mt-[8px] flex items-center justify-between text-base font-medium text-gray-900">
                  <p className='collection_img_txt flex justify-between mb-[3px]'>{product.name}</p>
                  <p className=' collection_img_txt'>{product.price}<span className='font-normal'>.00</span></p>
                </div>
                <p className="collection_img_detal_txt mb-[4px]">{product.description}</p>
                <div className="mt-[8px] flex items-center justify-between ">
                  <div className='color_bubble gap-1  pl-[4px] pr-[7px]'>
                    <div className='inner '></div><div className='text-xs pl-[5px]'>+5</div>
                  </div>
                  <button className='bookmarks_Web_text'>anntaylor.com</button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Bookmarks
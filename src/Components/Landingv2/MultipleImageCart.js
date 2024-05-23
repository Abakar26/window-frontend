/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
// Landing Page section 2
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { capitalize } from '@material-ui/core';
import { toast } from 'react-toastify';
import CartSearch from './UI/Search/CartSearch';
import forwardarrow from '../../images/svg/fr.svg';
import backarrow from '../../images/svg/bk.svg';
import { API_URL, webistesListNames } from '../../Constants/Constants';
import dummyImage from '../../images/wdummy.jpeg';
import Spinner from './Spinner';
import bookmarkbtn from '../../images/svg/bookmarkbtnimg.svg';
import bookmarkbtnoff from '../../images/svg/bookmarkbtnoflne.svg';
import bookmarkWhite from '../../images/svg/bookmarkWhite.svg';

const path = 'state_of_fashion';
const MultipleImageCart = () => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectImg, setSelectImg] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState(false);

  const userName = capitalize(
    localStorage?.getItem('first-name')
      ? localStorage?.getItem('first-name')
      : 'Doyin',
  );
  let array = [];

  const separator = (price) => {
    const myprice = price.toString();
    array = myprice.split('.');
    if (typeof array[1] === 'undefined') {
      array[1] = '00';
    }
  };
  const nextSlide = () => {
    if (selectImg <= -482) {
      setSelectImg(selectImg + 482);
      setCounter(counter - 1);
    }
  };
  const prevSlide = () => {
    if (selectImg <= 0 && counter <= products.length - 2) {
      setSelectImg(selectImg - 482);
      setCounter(counter + 1);
    }
  };
  // Below functions are responsible for bookmark feature

  // This Function Updates Product
  const updateProduct = (product) => {
    const updatedProducts = products.map((obj) => {
      if (obj.id === product.id) {
        return { ...product };
      }
      return obj;
    });
    // setModalProduct(product);
    setProducts(updatedProducts);
  };
  // This function adds product to default collection
  const addToDefaultCollection = (product) => {
    if (localStorage.getItem('authorization')) {
      if (!product.is_in_default_collection) {
        axios
          .post(
            `${API_URL}api/v1/record_collections`,
            {
              record_collections: {
                collection_name: 'default',
                recordable_id: product.id,
                recordable_type: 'Product',
                attach_product: true,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem('authorization'),
              },
            },
          )
          .then((response) => {
            toast.success(
              'Product added to the default collection successfully',
            );
            updateProduct(response.data.product);
          })
          .catch((error) => {
            toast.error('Something went wrong. Please try again later.');
            updateProduct(error.response.data.product);
          });
      }
    } else {
      toast.error('Please Sign in to continue...');
    }
  };
  // This function removes product from the default collection
  const removeFromDefaultCollection = (product) => {
    if (product.is_in_default_collection) {
      axios
        .delete(`${API_URL}api/v1/record_collections`, {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
          data: {
            collection_name: 'default',
            recordable_id: product.id,
            recordable_type: 'Product',
            attach_product: true,
          },
        })
        .then((response) => {
          updateProduct(response.data);
          // if (collectionName !== undefined) {
          //   if (collectionName === "default") {
          //     setModalProduct(!modalProduct);
          //   }
          // }
          toast.success(
            'Product removed from the default collection successfully',
          );
        })
        .catch((response) => {
          updateProduct(response.data);
          toast.error('Something went wrong. Please try again later.');
        });
    }
  };
  const onFocus = () => {
    setFocus(true);
  };
  const focusOut = () => {
    setFocus(false);
  };
  // We will now fetch data of user saved searches
  useEffect(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${API_URL}api/v1/users/${localStorage.getItem(
          'user',
        )}/state_of_fashion`,
        {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
        },
      );

      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="bg-white">
      <div className="py-16 pl-[42px] sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8 sm:pl-4 sm:px-0">
        <div className="pr-[45px] flex flex-row items-center justify-between lg:px-0 sm:px-0">
          <CartSearch
            value="max-w-[250px] md:max-w-[165px]"
            first="State of Fashio"
            second="n"
          />
          <div className="product_cart_scroll hover:text-[#E2B9C8]">
            <div
              className="product_cart_scroll hover:text-[#E2B9C8]"
              onClick={() => {
                navigate('/product_display_more', {
                  state: { products, userName, path },
                });
              }}
            >
              <span href="#" className="sm:block cursor-pointer">
                View More
                <span className=""> &rarr;</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="mt-8 relative"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <>
              <div
                className="bg-[#ffffff] w-[42px] h-[42px] flex pl-[14px] py-3 rounded-full left-arrow-pd"
                onClick={nextSlide}
              >
                <img src={forwardarrow} alt="" />
              </div>
              <div
                className="bg-[#ffffff] w-[42px] h-[42px] flex py-3 pl-[17px] rounded-full right-arrow-pd"
                onClick={prevSlide}
              >
                <img src={backarrow} alt="" />
              </div>
            </>
          )}
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto remove_scroll">
            {loading ? (
              <Spinner />
            ) : (
              <ul
                className="mr-4 inline-flex space-x-8 md:p-0 duration-700"
                style={{ marginLeft: `${selectImg}px` }}
              >
                {products.map((product, i) => (
                  <div key={i}>
                    {separator(product.price)}
                    <li key={i}>
                      <div
                        className="w-[454px] h-[549px] md:w-[330px] md:h-[402px] group flex py-6 px-9
                     md:px-6 bg-[#F2F2F2] rounded-[18px] justify-between flex-wrap"
                        onMouseOver={onFocus}
                        onMouseOut={focusOut}
                      >
                        <div className="w-[260px] rounded-[18px] h-[354px] md:w-[190px] md:h-[260px]">
                          <img
                            className="rounded-[18px] h-[354px] w-[260px] md:w-[190px] md:h-[259px] object-cover"
                            src={
                              product.images.length > 0
                                ? product.images[0]
                                : dummyImage
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col max-h-[354px] h-full justify-start md:max-h-[260px]">
                          {product?.images[1] && (
                            <img
                              className="w-[110px] h-[110px] md:w-[80px] rounded-[18px] md:h-[80px] object-cover mb-3"
                              src={
                                product?.images[1]
                                  ? product.images[1]
                                  : dummyImage
                              }
                              alt=""
                            />
                          )}
                          {product?.images[2] && (
                            <img
                              className="w-[110px] h-[110px] md:w-[80px] rounded-[18px] md:h-[80px] object-cover mb-3"
                              src={
                                product?.images[2]
                                  ? product.images[2]
                                  : dummyImage
                              }
                              alt=""
                            />
                          )}
                          {product?.images[3] && (
                            <img
                              className="w-[110px] h-[110px] md:w-[80px] rounded-[18px] md:h-[80px] object-cover mb-3"
                              src={
                                product?.images[3]
                                  ? product.images[3]
                                  : dummyImage
                              }
                              alt=""
                            />
                          )}
                        </div>
                        {/* <div className="flex flex-col max-h-[354px] h-full justify-between sm:max-h-[260px]">
                        {product.images.length > 0 &&
                          product.images.map((image) => (
                            <img
                              className="w-[110px] h-[110px] md:w-[80px] md:h-[80px]"
                              src={image}
                              alt=""
                            />
                          ))}
                      </div> */}
                        <div className="flex flex-col max-w-[382px] w-full">
                          <div className="flex flex-row justify-between items-center pb-6 md:pb-[18px]">
                            <span className="flex flex-col">
                              <span className="product_cart_header max-w-[356px] w-full">
                                {product.title?.length >= 50
                                  ? `${product.title.substring(0, 50)}...`
                                  : product.title}
                              </span>
                              <span className="product_cart_header_detail">
                                {webistesListNames[product?.website_name]}
                              </span>
                            </span>

                            {!product.is_in_default_collection && (
                              <span
                                className="cursor-pointer w-[24px] h-[29px] sm:w-[15px] sm:h-[17px]"
                                onClick={() => {
                                  addToDefaultCollection(product);
                                }}
                              >
                                <img
                                  src={bookmarkbtnoff}
                                  alt=""
                                />
                              </span>
                            )}
                            {product.is_in_default_collection && (
                              <span
                                className="cursor-pointer w-[24px] h-[29px]"
                                onClick={() => {
                                  removeFromDefaultCollection(product);
                                }}
                              >
                                <img src={bookmarkbtn} alt="" />
                              </span>
                            )}
                          </div>
                          <span className="product_cart_price">
                            $
                            {`${array[0]}.${array[1] ? array[1] : '00'}`}
                          </span>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultipleImageCart;

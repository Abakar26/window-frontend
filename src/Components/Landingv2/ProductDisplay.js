// Landing Page section 1
import { useState, useEffect } from "react";
import CartSearch from "./UI/Search/CartSearch";
import { useNavigate } from "react-router-dom";
import forwardarrow from "../../images/svg/fr.svg";
import dummyImage from "../../images/wdummy.jpeg";
import Spinner from "./Spinner";
import backarrow from "../../images/svg/bk.svg";
import { capitalize } from "@material-ui/core";
import { API_URL } from "../../Constants/Constants";
import axios from "axios";
import bookmarkbtn from "../../images/svg/bookmarkbtnimg.svg";
import bookmarkbtnoff from "../../images/svg/bookmarkbtnoflne.svg";
import bookmarkWhite from "../../images/svg/bookmarkWhite.svg";
import { toast } from "react-toastify";

export default function ProductDisplay() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const [selectImg, setSelectImg] = useState(0);
  const [focus, setFocus] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const userName = capitalize(
    localStorage?.getItem("first-name")
      ? localStorage?.getItem("first-name")
      : "Doyin"
  );

  // This function capatalizes first initial of user name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // These Function controls carousel scroll
  const nextSlide = () => {
    if (selectImg <= -596) {
      setSelectImg(selectImg + 596);
      setCounter(counter - 1);
    }
  };
  const prevSlide = () => {
    if (selectImg <= 0 && counter <= products.length - 2) {
      setSelectImg(selectImg - 596);
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
    if (localStorage.getItem("authorization")) {
      if (!product.is_in_default_collection) {
        axios
          .post(
            `${API_URL}api/v1/record_collections`,
            {
              record_collections: {
                collection_name: "default",
                recordable_id: product.id,
                recordable_type: "Product",
                attach_product: true,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem("authorization"),
              },
            }
          )
          .then((response) => {
            toast.success(
              "Product added to the default collection successfully"
            );
            updateProduct(response.data.product);
          })
          .catch((error) => {
            toast.error("Something went wrong. Please try again later.");
            updateProduct(error.response.data.product);
          });
      }
    } else {
      toast.error("Please Sign in to continue...");
    }
  };
  // This function removes product from the default collection
  const removeFromDefaultCollection = (product) => {
    if (product.is_in_default_collection) {
      axios
        .delete(`${API_URL}api/v1/record_collections`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          data: {
            collection_name: "default",
            recordable_id: product.id,
            recordable_type: "Product",
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
            "Product removed from the default collection successfully"
          );
        })
        .catch((response) => {
          updateProduct(response.data);
          toast.error("Something went wrong. Please try again later.");
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
      const { data } = await axios.get(`${API_URL}api/v1/saved_searches`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      });

      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="bg-white">
      <div className="pb-16 pt-8 pl-[42px] sm:pl-4">
        <div className="pr-[45px] flex flex-row items-center justify-between sm:px-6 lg:px-0">
          <div className="flex flex-row">
            <CartSearch
              value={""}
              first={`For ${userName.slice(0, userName.length - 1)}`}
              second={userName[userName.length - 1]}
            />
          </div>
          <div
            className="product_cart_scroll hover:text-[#E2B9C8]"
            onClick={() => {
              navigate('/foryou_display_more', {
                state: { products: products, userName: userName },
              });
            }}
          >
            <span href="#" className="sm:block cursor-pointer">
              View More<span className=""> &rarr;</span>
            </span>
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
                className="mr-4 inline-flex space-x-8 sm:p-0 duration-700"
                style={{ marginLeft: `${selectImg}px` }}
              >
                {products.map((product, index) => (
                  <li key={index}>
                    <div className="w-[568px] h-[318px] group flex py-6 px-9 bg-[#F2F2F2] rounded-[18px] justify-between md:w-[342px] md:h-[192px] md:py-[15px] md:px-[18px]">
                      <div
                        className="w-[198px] h-[270px] md:w-[119px] md:h-[162px]"
                        onMouseOver={onFocus}
                        onMouseOut={focusOut}
                      >
                        {/* Here we will check if our state is in loading condition or product images length is 0,
                      we will display dummy image else product main image */}
                        <img
                          className="w-[198px] h-[270px] md:w-[119px] md:h-[162px] rounded-[18px] object-cover"
                          src={
                            product.images.length === 0
                              ? dummyImage
                              : product.images[0]
                          }
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col w-[250px] justify-between md:w-[150px]">
                        <span className="flex flex-col">
                          <label className="product_cart_header">
                            {product.title}
                          </label>
                          <label className="product_cart_header_detail">
                            {capitalizeFirstLetter(product.website_name)}
                          </label>
                          <p className="product_cart_detail text-[#999999]">
                            {`${product.description.substring(0, 200)}...`}
                          </p>
                        </span>
                        <span className="flex flex-row justify-between items-baseline">
                          <span className="product_cart_price">
                            ${product.price.toFixed(2)}
                          </span>
                          {!product.is_in_default_collection && (
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                addToDefaultCollection(product);
                              }}
                            >
                              <img
                                className="w-[24px] h-[29px] sm:w-[15px] sm:h-[17px]"
                                src={bookmarkbtnoff}
                                alt=""
                              />
                            </span>
                          )}
                          {product.is_in_default_collection && (
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                removeFromDefaultCollection(product);
                              }}
                            >
                              <img src={bookmarkbtn} alt="" />
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

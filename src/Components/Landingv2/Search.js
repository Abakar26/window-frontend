/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, Fragment, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import { motion } from "framer-motion";
import axios from "axios";
// import { BsExclamationCircle } from 'react-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBarDropdown from "./SearchBarDropdown";
import OpenWebsite from "./OpenWebsite";
import WebsiteDropDownButton from "./UI/WebsiteItems/WebsiteDropDownButton";
import ColorDropDownButton from "./UI/ColorSelection/ColorDropDownButton";
import PriceDropDownButton from "./UI/PriceRange/PriceDropDownButton";
import SearchIconButton from "./UI/Search/SearchIconButton";
import MainSearch from "./UI/Search/MainSearch";
import ColorSelector from "./ColorSelector";
import PriceSelector from "./PriceSelector";
import Skeleton from "./UI/Sekelton";
import "../../Styles/Appv2.css";
import windowlogo from "../../images/svg/windowlogo.svg";
import ProductDisplay from "./ProductDisplay";
import CollectionCart from "./CollectionCart";
import MultipleImageCart from "./MultipleImageCart";
import CollectionCart2 from "./ColletionCart2";
import GradientCart from "./GradientCart";
import RecentViwedCart from "./RecentViwedCart";
import WebsitePopupModal from "./WebsitePopupModal";
import wScroll from "../../images/svg/wscroll.svg";
import FabricSelector from "./FebricSelector";
import LengthSelector from "./LengthSelector";
import CustomSelector from "./CustomSelector";
import {
  style_name,
  fitArray,
  occasionArray,
  preferencesCarousel,
  preferencesText,
} from "../../helpers/history";
import { API_URL, AESTHETIC_KEYWORDS } from "../../Constants/Constants";
import PopularProduct from "./UI/PopularProduct";

import {
  preferences,
  userPreferences,
  setPreferences,
  setUserPreferences,
} from "../../reducers/preferences";
import { getPreferenceBucket } from "../../services/collection_services";
import NotifyModal from "./NotifyModal";
import exclammark from "../../images/svg/exm.svg";
import NewArrivalModal from "./NewArrivalModal";

const Search = (props) => {
  const preferences_dict = useSelector(userPreferences);
  const [openBool, setOpenBool] = useState(false);
  const [popularInput, setPopularInput] = useState(false);
  const [input, setInput] = useState("");
  const [searchBlur, setSearchBlur] = useState(false);
  const [selectedWebsites, setSelectedWebsites] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [searchBarState, setSearchBarState] = useState(false);
  const [mobileView, setMobileViews] = useState(false);
  const [focus, setFocus] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false);
  const [colorCount, SetColorCount] = useState(0);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [websiteCount, setWebsiteCount] = useState(0);
  const [priceToggle, setPriceToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);
  const [websiteToggle, setWebsiteToggle] = useState(false);
  const [focusTrend, setFocusTrend] = useState(false);
  const [filterClic, setFilterClic] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFabric, setFabric] = useState(false);
  const [fabricCount, setFabricCount] = useState(0);
  const [arrayFabric, setArrayFabric] = useState([]);
  const [isFit, setIsFit] = useState(false);
  const [fitCount, setFitCount] = useState(0);
  const [arrayFit, setArrayFit] = useState([]);
  const [isOccasion, setIsOccasion] = useState(false);
  const [occasionCount, setOccasionCount] = useState(0);
  const [arrayOccasion, setArrayOccasion] = useState([]);
  const [isLength, setIsLength] = useState(false);
  const [lengthCount, SetLengthCount] = useState(0);
  const [arrayLength, setArrayLength] = useState([]);
  const [arrayWebsites, setArrayWebsites] = useState([]);
  const [isOccasionDropDownActive, setIsOccasionDropDownActive] =
    useState(false);
  const [isFitDropDownActive, setIsFitDropDownActive] = useState(false);
  const [isLengthDropDownActive, setIsLengthDropDownActive] = useState(false);
  const [isFabricDropDownActive, setIsFabricDropDownActive] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [productDisplay, setProductDisplay] = useState(false);
  const [isColorDropDownActive, setIsColorDropDownActive] = useState(false);
  const [isPriceDropDownActive, setIsPriceDropDownActive] = useState(false);
  const [isWebsiteDropDownActive, setIsWebsiteDropDownActive] = useState(false);
  const [isSearchDropDownActive, setIsSearchDropDownActive] = useState(false);
  const [fitPreference, setFitPreference] = useState([]);
  const [sizePref, setSizePref] = useState([]);
  const [websitePreference, setWebsitePreference] = useState([]);
  const [isFirstMount, setIsFirstMount] = useState(false);
  const [isWebsitePopupModal, setIsWebsitePopupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const scrollModalRef = useRef(null);
  const [aestheticKeywords, setAestheticKeywords] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputEl = useRef(null);
  const load_page_filter = 1;

  const websites = [
    "asos.com",
    "zara.com",
    "h&m.com",
    "bonobos.com",
    "ssense.com",
  ];

  useEffect(() => {
    var elem = document.getElementsByClassName("attributeSelect")[0];
    if (typeof elem !== "undefined" && elem !== null) {
      elem.style.zoom = "80%";
    }
  }, []);

  useEffect(() => {
    fetchPreferenceData();
    // if (OpenWebsite) {
    //   setArrayWebsites(websitePreference);
    // }
    setIsFirstMount(true);
  }, []);

  useEffect(() => {
    // setArrayWebsites(websitePreference);
    if (input.length !== 0) {
      fetchData();
    }
  }, [input]);

  // This useEffect will fetch list of aesthetic keywords
  useEffect(async () => {
    if (localStorage.getItem("authorization")) {
      try {
        const { data } = await axios.get(`${API_URL}api/v1/weekly-edits`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        });
        setAestheticKeywords(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const fetchData = () => {
    // setPopularInput(true);
    // if (load_page_filter === 1) {
    //   setProducts([]);
    // }
    // axios
    //   .get(`${API_URL}api/v1/products?page=${load_page_filter}`, {
    //     headers: {
    //       Authorization: localStorage.getItem("authorization"),
    //     },
    //     params: {
    //       search: input,
    //       screen: "landing",
    //     },
    //   })
    //   .then((response) => {
    //     const mydata = response.data.products;
    //     setProducts((old_data) => [...old_data, ...mydata]);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => {
    //     setPopularInput(false);
    //     setProductDisplay(true);
    //   });
    // load_page_filter += 1;
  };

  const fetchPreferenceData = () => {
    localStorage.getItem("authorization") &&
      axios
        .get(
          `${API_URL}api/v1/users/${localStorage.getItem("user")}/preferences`,
          {
            headers: {
              Authorization: localStorage.getItem("authorization"),
            },
          }
        )
        .then((response) => {
          const mydata = response.data;
          if (typeof mydata !== "undefined") {
            let sizes = [];
            const websites = [];
            if (
              mydata?.filter((element) => {
                if (element.type === "ShoppingPreference") {
                  websites.push(element.website);
                } else if (
                  element.type === "SizePreference" &&
                  /^[a-zA-Z]/.test(element.size)
                ) {
                  sizes.push(element.size);
                }
              })
            );
            sizes = [...new Set(sizes)];
            dispatch(
              setUserPreferences({
                websites,
                sizes,
              })
            );
            setSizePref(sizes);
            setWebsitePreference(websites);
            setArrayWebsites(websites);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
  };
  // else if (element.type === "FitPreference") {
  //   return setFitPreference((old) => [...old, element.title]);
  // } else if (element.type === "FitPreference") {
  //   return setFitPreference((old) => [...old, element.title]);
  // }
  const setNotification = () => {
    if (email.length !== 0 && validator.isEmail(email)) {
      axios
        .post(`${API_URL}api/v1/notifications`, {
          notifications: {
            notify_to: email,
            notification_type: "Feature",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("We will notify you when it is available!");
          }
        })
        .catch(() => {
          toast.warning("Error occured");
        })
        .finally(() => {
          setEmail("");
        });
    } else {
      toast.warning("Please enter a valid email");
      setEmail("");
    }
  };

  const onSubmit = (e) => {
    if (inputEl.current.value.length === 0) {
      e.preventDefault();
      return;
    }
    navigate("/products", {
      state: {
        isMainPageSearch: true,
        min,
        max,
        selectedColors,
        searchText: inputEl.current.value,
        selectedOccasion: arrayOccasion,
        selectedFit:
          fitPreference.length === 0
            ? arrayFit
            : [...fitPreference, ...arrayFit],
        selectedLength: arrayLength,
        selectedFabric: arrayFabric,
        selectedWebsites:
          websitePreference.length === 0 ? arrayWebsites : arrayWebsites,
        selectedSize: sizePref,
      },
    });
  };

  const HandleColor = () => {
    setColor(!color);
    setPrice(false);
    setOpenBool(false);
    setPopularInput(false);
    setProductDisplay(false);
    setFilterClic(false);
    setSearchBarState(false);
    setIsOccasion(false);
    setIsFit(false);
    setFabric(false);
  };
  const HandlePrice = () => {
    setPrice(!price);
    setColor(false);
    setOpenBool(false);
    setFilterClic(false);
    setProductDisplay(false);
    setPopularInput(false);
    setSearchBarState(false);
    setIsOccasion(false);
    setIsFit(false);
    setFabric(false);

    setIsLength(false);
  };

  const filter_click = () => {
    setFilterClic(true);
    setIsOccasion(false);
    setIsFit(false);
    setFabric(false);
    setIsLength(false);
  };

  const onClick = (e) => {
    setIsOccasion(false);
    setIsFit(false);
    setFabric(false);

    setIsLength(false);
    e.preventDefault();
    websites.map((website) =>
      website === e.target.innerText &&
        !selectedWebsites.includes(e.target.innerText)
        ? setSelectedWebsites([...selectedWebsites, e.target.innerText])
        : null
    );
  };

  const handleColors = () => {
    if (isColorDropDownActive) {
      setColor(false);
      setIsColorDropDownActive(false);
    } else {
      setColor(true);
      setPrice(false);
      setOpenBool(false);
      setPopularInput(false);
      setFilterClic(false);
      setSearchBarState(false);
      setIsOccasion(false);
      setIsFit(false);
      setFabric(false);
      // setIsStyle(false);
    }
  };

  const handlePrice = () => {
    if (isPriceDropDownActive) {
      setPrice(false);
      setIsPriceDropDownActive(false);
    } else {
      setPrice(true);
      setColor(false);
      setOpenBool(false);
      setPopularInput(false);
      setFilterClic(false);
      setSearchBarState(false);
      setIsOccasion(false);
      setIsFit(false);
      setIsLength(false);
      setFabric(false);
      // setIsStyle(false);
    }
  };

  const handleWebsite = () => {
    if (isWebsiteDropDownActive) {
      setOpenBool(false);
      setIsWebsiteDropDownActive(false);
    } else {
      setOpenBool(true);
      setColor(false);
      setPrice(false);
      setPopularInput(false);
      setFilterClic(false);
      setSearchBarState(false);
      setIsOccasion(false);
      setIsLength(false);
      setIsFit(false);
      setFabric(false);
      // setIsStyle(false);
    }
  };

  const handleSearchIcon = () => {
    setIsWebsitePopupModal(!isWebsitePopupModal);
    if (isSearchDropDownActive) {
      setFilterClic(false);
      setIsSearchDropDownActive(false);
    } else {
      setFilterClic(true);
      setPrice(false);
      setOpenBool(false);
      setPopularInput(false);
      setColor(false);
      setSearchBarState(false);
      setIsLength(false);
      setIsOccasion(false);
      setIsFit(false);
      setFabric(false);
      // setIsStyle(false);
    }
  };

  const colorSelect = (e) => {
    e.preventDefault();
    websites.map((website) =>
      website === e.target.innerText &&
        !selectedColor.includes(e.target.innerText)
        ? setSelectedColor([...selectedColor, e.target.innerText])
        : null
    );
  };

  const openDropDown = (event) => {
    setOpenBool(!openBool);
    setColor(false);
    setPrice(false);
    setFilterClic(false);
    setSearchBarState(false);
    // setSearchBlur(!searchBlur);
  };

  const onChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      setPopularInput(false);
      setProductDisplay(false);
    } else {
      setPopularInput(true);
      setProductDisplay(false);
    }
    setSearchBarState(false);
  };

  const onFocusState = () => {
    setSearchBarState(true);
    setOpenBool(false);
    setColor(false);
    setFilterClic(false);
    setPrice(false);
    setProductDisplay(false);
    setSearchBlur(true);
    setMobileViews(true);
  };

  const onBlurState = () => {
    setMobileViews(false);
    setOpenBool(false);
    setColor(false);
    setPrice(false);
    setFilterClic(false);
    setPopularInput(false);
    setProductDisplay(false);
    if (focusTrend) {
      setSearchBarState(true);
    } else {
      setSearchBarState(false);
    }
    setSearchBlur(false);
    setInput("");
  };

  const OnFocused = () => {
    setFocus(true);
  };
  const OnBlured = () => {
    setFocus(false);
  };

  const scrollElement = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const response = getPreferenceBucket();
    response
      .then((data) => {
        dispatch(
          setPreferences({
            websites: data.data.websites,
            colors: data.data.colors,
            sizes: data.data.sizes,
            categories: data.data.categories,
            products: data.data.products ? data.data.products : [],
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
    props.setSwitchNav(false);
    props.setFundamentalNav(false);
    props.setSwitchSignup(false);
  }, []);
  const occasionRef = useRef();
  const lengthRef = useRef();
  const fitRef = useRef();
  const styleRef = useRef();
  const fabricRef = useRef();
  const colorRef = useRef();
  const priceRef = useRef();
  const websiteRef = useRef();
  const filterClicRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (color && colorRef.current && !colorRef.current.contains(e.target)) {
        setColor(false);
        if (isColorDropDownActive) {
          setIsColorDropDownActive(false);
        } else {
          setIsColorDropDownActive(true);
        }
      } else {
        setIsColorDropDownActive(false);
      }

      if (price && priceRef.current && !priceRef.current.contains(e.target)) {
        setPrice(false);
        if (isPriceDropDownActive) {
          setIsPriceDropDownActive(false);
        } else {
          setIsPriceDropDownActive(true);
        }
      } else {
        setIsPriceDropDownActive(false);
      }

      if (
        openBool &&
        websiteRef.current &&
        !websiteRef.current.contains(e.target)
      ) {
        setOpenBool(false);
        if (isWebsiteDropDownActive) {
          setIsWebsiteDropDownActive(false);
        } else {
          setIsWebsiteDropDownActive(true);
        }
      } else {
        setIsWebsiteDropDownActive(false);
      }

      if (
        filterClic &&
        filterClicRef.current &&
        !filterClicRef.current.contains(e.target)
      ) {
        setFilterClic(false);
        if (isSearchDropDownActive) {
          setIsSearchDropDownActive(false);
        } else {
          setIsSearchDropDownActive(true);
        }
      } else {
        setIsSearchDropDownActive(false);
      }
      if (isFit && fitRef.current && !fitRef.current.contains(e.target)) {
        setIsFit(false);
        if (isFitDropDownActive) {
          setIsFitDropDownActive(false);
        } else {
          setIsFitDropDownActive(true);
        }
      } else {
        setIsFitDropDownActive(false);
      }

      if (
        isOccasion &&
        occasionRef.current &&
        !occasionRef.current.contains(e.target)
      ) {
        setIsOccasion(false);
        if (isOccasionDropDownActive) {
          setIsOccasionDropDownActive(false);
        } else {
          setIsOccasionDropDownActive(true);
        }
      } else {
        setIsOccasionDropDownActive(false);
      }

      if (
        isLength &&
        lengthRef.current &&
        !lengthRef.current.contains(e.target)
      ) {
        setIsLength(false);
        if (isLengthDropDownActive) {
          setIsLengthDropDownActive(false);
        } else {
          setIsLengthDropDownActive(true);
        }
      } else {
        setIsLengthDropDownActive(false);
      }
      if (
        isFabric &&
        fabricRef.current &&
        !fabricRef.current.contains(e.target)
      ) {
        setFabric(false);
        if (isFabricDropDownActive) {
          setIsFabricDropDownActive(false);
        } else {
          setIsFabricDropDownActive(true);
        }
      } else {
        setIsFabricDropDownActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [
    isOccasion,
    isFabric,
    isFit,
    isLength,
    color,
    price,
    openBool,
    filterClic,
  ]);

  const mobileViewDrop = () => {
    setMobileViews(!mobileView);
  };

  // const isSearchDropDownsOpen = (searchBarState || openBool || color || price || filterClic || popularInput)
  const isSearchDropDownsOpen = productDisplay && input;
  return (
    <>
      <div className="w-container_width m-auto p-0 flex justify-center items-center" />
      <div
        className="flex container mx-auto px-8 flex-wrap justify-center pt-8 p-0 m-auto
       blur-none opacity-100 h-[calc(92vh-8rem)] bg-[#ffffff] md:px-0"
      >
        <motion.div
          className="landing-inner flex lg:w-full lg:px-10 md:px-8 w-2/4 flex-col h-[calc(92vh-25rem)]"
          animate={{ y: isSearchDropDownsOpen ? -20 : 100 }}
          transition={{ duration: isFirstMount ? 0.8 : 0 }}
        >
          <div className="flex justify-center mb-[4rem]">
            <img src={windowlogo} className="w-[60%]" alt="" />
          </div>
          {/* <form onSubmit={onSubmit} className={searchBarState || popularInput || productDisplay ? "flex flex-col
          radius-control": "flex flex-col items-end"} onFocus={OnFocused} onBlur={OnBlured}> */}
          <form
            onSubmit={onSubmit}
            className={
              productDisplay && input
                ? "flex flex-col radius-control"
                : "flex flex-col items-end"
            }
            onFocus={OnFocused}
            onBlur={OnBlured}
          >
            <div
              className="bg-white flex w-full pr-4 rounded-lg border border-[#EDEDED] h-[55px]
             items-center input-wrap"
            >
              <div className="flex w-full pl-1 pr-3">
                <MainSearch
                  value={input}
                  onChange={onChange}
                  onFocusState={onFocusState}
                  onBlurState={onBlurState}
                  openBool={openBool}
                  inputEl={inputEl}
                />
              </div>
              <div className="flex w-full justify-end max-w-[247px]">
                <ul className="flex justify-end items-center p-0 m-0 pt-1">
                  <li>
                    <WebsiteDropDownButton
                      isOpen={openBool}
                      onClick={onClick}
                      openDropDown={handleWebsite}
                      count={
                        websitePreference.lenght === 0
                          ? websiteCount
                          : websitePreference.length + websiteCount
                      }
                      website={websiteToggle}
                    />
                  </li>
                  <li>
                    <ColorDropDownButton
                      isOpen={color}
                      color={colorToggle}
                      count={colorCount}
                      onClick={handleColors}
                    />
                  </li>
                  <li>
                    <PriceDropDownButton
                      isOpen={price}
                      price={priceToggle}
                      min={min}
                      max={max}
                      onClick={handlePrice}
                    />
                  </li>
                  <li>
                    <SearchIconButton
                      filterClic={filterClic}
                      setFilterClic={setFilterClic}
                      setIsWebsitePopupModal={setIsWebsitePopupModal}
                      onClick={handleSearchIcon}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {filterClic && (
              <>
                <div
                  className="bg-[#ffffff] border border-[#EDEDED] h-[36px]
                  w-full input-wrap sm:hidden"
                  ref={filterClicRef}
                >
                  <ul
                    className="flex justify-start items-center text-center p-0 m-0 pt-1
                     text-[#808080] text-[18px] leading-[22px] window_font"
                  >
                    <li
                      className={`filter-text-width ${occasionCount || isOccasion
                          ? "new_font text-[#9C0E43] font-bold cursor-pointer"
                          : "cursor-pointer"
                        }`}
                      ref={occasionRef}
                      onClick={() => {
                        if (isOccasionDropDownActive) {
                          setIsOccasion(false);
                          setIsOccasionDropDownActive(false);
                        } else {
                          setIsOccasion(true);
                          setIsFit(false);
                          setFabric(false);
                          setIsLength(false);
                        }
                      }}
                    >
                      occasion
                    </li>
                    <li className="">|</li>
                    <li
                      className={`filter-text-width ${(arrayFit.length === 0
                          ? fabricCount
                          : arrayFit.length + fabricCount) || isFit
                          ? "new_font text-[#9C0E43] font-bold cursor-pointer"
                          : " cursor-pointer"
                        }`}
                      ref={fitRef}
                      onClick={() => {
                        if (isFitDropDownActive) {
                          setIsFit(false);
                          setIsFitDropDownActive(false);
                        } else {
                          setIsOccasion(false);
                          setIsFit(true);
                          setIsLength(false);
                          setFabric(false);
                        }
                      }}
                    >
                      fit
                    </li>
                    <li className="">|</li>
                    <li
                      className={`filter-text-width ${lengthCount || isLength
                          ? "cursor-pointer new_font text-[#9C0E43] font-bold"
                          : " cursor-pointer"
                        }`}
                      ref={lengthRef}
                      onClick={() => {
                        if (isLengthDropDownActive) {
                          setIsLength(false);
                          setIsLengthDropDownActive(false);
                        } else {
                          setIsOccasion(false);
                          setIsFit(false);
                          setFabric(false);
                          setIsLength(true);
                        }
                      }}
                    >
                      length
                    </li>
                    <li className="">|</li>
                    <li
                      className={`filter-text-width ${fabricCount || isFabric
                          ? "cursor-pointer new_font text-[#9C0E43] font-bold"
                          : "cursor-pointer"
                        }`}
                      ref={fabricRef}
                      onClick={() => {
                        if (isFabricDropDownActive) {
                          setFabric(false);
                          setIsFabricDropDownActive(false);
                        } else {
                          setIsOccasion(false);
                          setIsFit(false);
                          setIsLength(false);
                          setFabric(true);
                        }
                      }}
                    >
                      fabric
                    </li>
                  </ul>
                  <ul
                    className="flex justify-start items-center p-0 m-0 pt-1 pl-5 text-[#808080]
                    text-[18px] leading-[22px] window_font"
                  >
                    <li className="mt-[10px] h-2/4" ref={occasionRef}>
                      {isOccasion && (
                        <CustomSelector
                          origin="home"
                          name="OCCASION"
                          selectArray={occasionArray}
                          count={occasionCount}
                          setCount={setOccasionCount}
                          setArrayStyle={setArrayOccasion}
                          arrayStyle={arrayOccasion}
                        />
                      )}
                    </li>
                    <li className="ml-[10%] mt-[10px] h-2/4" ref={fitRef}>
                      {isFit && (
                        <CustomSelector
                          origin="home"
                          name="FIT"
                          selectArray={fitArray}
                          count={fitCount}
                          setCount={setFitCount}
                          setArrayStyle={setArrayFit}
                          arrayStyle={arrayFit}
                        />
                      )}
                    </li>
                    <li className="ml-[10%] mt-[10px] h-2/4" ref={lengthRef}>
                      {isLength && (
                        <LengthSelector
                          origin="home"
                          count={lengthCount}
                          setCount={SetLengthCount}
                          arrayLength={arrayLength}
                          setArrayLength={setArrayLength}
                        />
                      )}
                    </li>
                    <li className="ml-[10%] mt-[10px]" ref={fabricRef}>
                      {isFabric && (
                        <FabricSelector
                          origin="home"
                          count={fabricCount}
                          setCount={setFabricCount}
                          setArrayFabric={setArrayFabric}
                          arrayFabric={arrayFabric}
                        />
                      )}
                    </li>
                  </ul>
                </div>
              </>
            )}
            {color && (
              <ColorSelector
                colorRef={colorRef}
                count={colorCount}
                arrayColor={selectedColors}
                setArrayColor={setSelectedColors}
                setFilter={setFilter}
                setCount={SetColorCount}
                setColorToggle={setColorToggle}
              />
            )}
            {price && (
              <PriceSelector
                priceRef={priceRef}
                min={min}
                max={max}
                setMin={setMin}
                setMax={setMax}
                setPriceToggle={setPriceToggle}
              />
            )}
            <OpenWebsite
              showWebsites={openBool}
              websiteRef={websiteRef}
              isOpen={openBool}
              arrayWebsites={arrayWebsites}
              setArrayWebsites={setArrayWebsites}
              onClick={onClick}
              count={websiteCount}
              setcount={setWebsiteCount}
              setWebsiteToggle={setWebsiteToggle}
              websitePreference={websitePreference}
            />
            {/* {searchBarState
              ? <SearchBarDropdown setFocusTrend={setFocusTrend}
              setSearchBarState={setSearchBarState} inputEl={inputEl} />
              : null} */}
            {/* {popularInput ? (
              <div className="flex w-full">
                <Skeleton input={input} />
              </div>
            ) : null}
            {input && productDisplay ? (
              <div className="flex w-full">
                <PopularProduct products={products} />
              </div>
            ) : null} */}
          </form>
        </motion.div>
        {isWebsitePopupModal && (
          <WebsitePopupModal
            setFilterClic={setFilterClic}
            arrayWebsites={
              websitePreference.length === 0 ? arrayWebsites : websitePreference
            }
            setArrayWebsites={setArrayWebsites}
            min={min}
            max={max}
            setMin={setMin}
            setMax={setMax}
            arrayColor={selectedColors}
            setArrayColor={setSelectedColors}
            setIsWebsitePopupModal={setIsWebsitePopupModal}
          />
        )}
      </div>
      {localStorage.getItem("user") && (
        <>
          <div
            className="flex justify-center w-full flex-col items-center cursor-pointer h-20 scroll_align_center pb-8"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {visible && (
              <div
                onClick={() => {
                  scrollElement(scrollRef);
                }}
              >
                <p className="w_scroll mb-2">Scroll</p>
                <img src={wScroll} alt="" className="w-[36px] h-[10px]" />
              </div>
            )}
          </div>
          <div className="relative attributeSelect" ref={scrollRef}>
            <div>
              <ProductDisplay />
              <div className="px-[42px] md:px-4 w-full bg-[#ffffff]">
                <CollectionCart
                  keyword={aestheticKeywords[0]}
                  websitePreference={websitePreference.slice(0, 3)}
                />
              </div>
              <MultipleImageCart />
              <div className="px-[42px] md:px-4 w-full bg-[#ffffff]">
                <CollectionCart
                  keyword={aestheticKeywords[1]}
                  reverse
                  websitePreference={websitePreference.slice(3, 6)}
                />
              </div>
            </div>
            <div
              className={modal && "filter grayscale"}
              onMouseEnter={() => {
                setModal(true);
              }}
              onMouseLeave={() => {
                setModal(false);
              }}
            >
              <GradientCart setModal={setModal} />
            </div>
            <div className="px-[42px] mt-8 md:px-4 w-full bg-[#ffffff] mb-12">
              <CollectionCart
                keyword={aestheticKeywords[2]}
                websitePreference={websitePreference.slice(6, 9)}
              />
            </div>
            {/* <div className="filter grayscale pointer-events-none">
              <RecentViwedCart />
            </div> */}
            {/* {modal && (
              <NotifyModal
                setNotification={setNotification}
                email={email}
                setEmail={setEmail}
                setModal={setModal}
              />
            )} */}
            {modal && (
              <div className="relative bottom-[600px] sm:bottom-[375px]">
                <NewArrivalModal setModal={setModal} />
              </div>
            )}
          </div>
        </>
      )}
      {!modal && (
        <div
          className={`${scroll
              ? "fixed right-2 bottom-2 bg-white rounded-full cursor-pointer z-10 w-14 block"
              : "hidden"
            }`}
          onClick={() => {
            setModal(true);
            scrollElement(scrollRef);
          }}
        >
          <img src={exclammark} alt="mark" className="w-14" />
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Search;

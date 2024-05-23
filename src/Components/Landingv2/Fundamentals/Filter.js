/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import WebsiteSelection from "./WebsiteSelection";
import ColorSelector from "../ColorSelector";
import PriceSelector from "../PriceSelector";
import PriceModal from "./PriceModal";
import ColorModal from "./ColorModal";
import CategorySelector from "../CategorySelector";
import SizeSelector from "../SizeSelector";
import FabricSelector from "../FebricSelector";
import LengthSelector from "../LengthSelector";
import OccasionSelector from "../OccasionSelector";
import FitSelector from "../FitSelector";
import { getPreferenceBucket } from "../../../services/collection_services";
import { setPreferences } from "../../../reducers/preferences";

const Filter = (props) => {
  const {
    handleMyResult,
    handleExplore,
    select,
    arraySize,
    arrayColor,
    arrayLength,
    arrayFabric,
    arrayOccasion,
    arrayWebsite,
    arrayFit,
    min,
    max,
    arrayCategory,
  } = props;
  const [openBool, setOpenBool] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false);
  const [category, setCategory] = useState(false);
  const [fabric, setFabric] = useState(false);
  const [length, setLength] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [size, setSize] = useState(false);
  const [colorCount, SetColorCount] = useState(0);
  const [occasionCount, setOccasionCount] = useState(0);
  const [categoryCount, SetCategoryCount] = useState(0);
  const [fabricCount, SetFabricCount] = useState(0);
  const [fitCount, SetFitCount] = useState(0);
  const [fit, setFit] = useState(false);
  const [sizeCount, SetSizeCount] = useState(0);
  const [lengthCount, SetLengthCount] = useState(0);
  const [, setColorToggle] = useState(false);
  const [, setPriceToggle] = useState(false);
  const [websiteCount, setWebsiteCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authorization")) {
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
          console.log(error);
        });
    }
  }, []);

  function getUnique(array) {
    var uniqueArray = [];

    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray.length;
  }

  useEffect(() => {
    SetColorCount(arrayColor.length);
    setOccasionCount(arrayOccasion.length);
    SetFabricCount(arrayFabric.length);
    SetFitCount(arrayFit.length);
    SetLengthCount(arrayLength.length);
    setWebsiteCount(getUnique(arrayWebsite));
    SetCategoryCount(arrayCategory.length);
    SetSizeCount(arraySize.length);
  }, [
    arrayColor,
    arrayWebsite,
    arrayLength,
    arrayFabric,
    arrayOccasion,
    arrayFit,
    min,
    max,
    arrayCategory,
    arraySize,
  ]);

  // useEffect(() => {
  //   if (sizeCount === 0 && fabricCount === 0 && categoryCount === 0
  //     && colorCount === 0 && websiteCount === 0 && props.min === '' && props.max === '') {
  //     setSelected(true);
  //   } else {
  //     setSelected(false);
  //   }
  // }, [sizeCount, fabricCount, categoryCount, colorCount, websiteCount, props.min, props.max])

  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);
    return ref;
  };

  const handleWebsite = () => {
    setOpenBool(!openBool);
  };
  const handleColor = () => {
    setColor(!color);
  };
  const handlePrice = () => {
    setPrice(!price);
  };
  const handleCategory = () => {
    setCategory(!category);
  };
  const handleSize = () => {
    setSize(!size);
  };
  const handleFabric = () => {
    setFabric(!fabric);
  };
  const handleLength = () => {
    setLength(!length);
  };
  const handleOccasion = () => {
    setOccasion(!occasion);
  };
  const handleFit = () => {
    setFit(!fit);
  };
  const OutsideWebsite = () => {
    setOpenBool(false);
  };

  const OutsidePrice = () => {
    setPrice(false);
  };

  const OutsideColor = () => {
    setColor(false);
  };

  const OutsideFabric = () => {
    setFabric(false);
  };

  const OutsideCategory = () => {
    setCategory(false);
  };

  const OutsideSize = () => {
    setSize(false);
  };

  const OutsideLength = () => {
    setLength(false);
  };

  const OutsideOccasion = () => {
    setOccasion(false);
  };
  const OutsideFit = () => {
    setFit(false);
  };

  const ref = useOutsideClick(OutsideWebsite);
  const ref1 = useOutsideClick(OutsidePrice);
  const ref2 = useOutsideClick(OutsideColor);
  const ref3 = useOutsideClick(OutsideFabric);
  const ref4 = useOutsideClick(OutsideCategory);
  const ref5 = useOutsideClick(OutsideSize);
  const ref6 = useOutsideClick(OutsideLength);
  const ref7 = useOutsideClick(OutsideOccasion);
  const ref8 = useOutsideClick(OutsideFit);

  return (
    <>
      {/* {props.subCategory.length === 0 ? '' :
      <p className='sub_side_bar_category px-[98px] mt-[30px]'>{props.subCategory[0]}</p>} */}
      <div
        className="w-full flex justify-between px-[98px] flex-row mt-[30px]
      overflow-x-scroll md:px-4 remove_scroll"
      >
        <div className="inline h-[3rem]">
          <ul className="p-0 m-0 flex flew-row whitespace-nowrap">
            <li ref={ref} className="inline mr-5">
              <div className="relative inline">
                <button
                  className={
                    openBool
                      ? `border ${
                          websiteCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } h-[40px] pl-3
                      pr-7 rounded-[30px] bg-[#ffffff] outline-none`
                      : `border ${
                          websiteCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                  }
                  onClick={handleWebsite}
                  type="button"
                >
                  {websiteCount !== 0
                    ? `Websites (${websiteCount})`
                    : "Websites"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {openBool && (
                    <WebsiteSelection
                      setCount={setWebsiteCount}
                      count={websiteCount}
                      setOpenBool={setOpenBool}
                      mstyle="absolute sm:fixed sm:bottom-0 sm:left-0 sm:rounded-t-[18px]
                         sm:rounded-[0px] z-30 md:w-full"
                      arrayWebsite={props.arrayWebsite}
                      setArrayWebsite={props.setArrayWebsite}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref1} className="inline mr-5">
              <div className="relative inline">
                <button
                  type="button"
                  className={
                    price
                      ? `border ${
                          props.min !== "" || props.max !== ""
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } h-[40px] pl-3 pr-7
                    rounded-[30px] bg-[#ffffff] outline-none`
                      : `border ${
                          props.min !== "" || props.max !== ""
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                  }
                  onClick={handlePrice}
                >
                  {props.min !== "" || props.max !== ""
                    ? `Price($${props.min} - $${props.max})`
                    : "Price"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {price && (
                    <PriceSelector
                      myStyle="absolute border border-[#E5E5E5] z-30 md:hidden"
                      min={props.min}
                      max={props.max}
                      setMin={props.setMin}
                      setMax={props.setMax}
                      setPriceToggle={setPriceToggle}
                    />
                  )}
                  {price && (
                    <PriceModal
                      myStyle="hidden md:block"
                      min={props.min}
                      max={props.max}
                      setMin={props.setMin}
                      setMax={props.setMax}
                      setPrice={setPrice}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref2} className="inline mr-5">
              <div className="relative inline">
                <button
                  type="button"
                  className={
                    color
                      ? `border ${
                          colorCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } border-[#E5E5E5]
                       rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                      : `border ${
                          colorCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                  }
                  onClick={handleColor}
                >
                  {colorCount !== 0 ? `Color (${colorCount})` : "Color"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {color && (
                    <ColorSelector
                      myStyle="absolute border border-[#E5E5E5] z-30 md:hidden"
                      count={colorCount}
                      setCount={SetColorCount}
                      setColorToggle={setColorToggle}
                      setFilter={props.setFilter}
                      arrayColor={props.arrayColor}
                      setArrayColor={props.setArrayColor}
                    />
                  )}
                  {color && (
                    <ColorModal
                      myStyle="hidden md:block"
                      count={colorCount}
                      setCount={SetColorCount}
                      setColorToggle={setColorToggle}
                      setColor={setColor}
                      arrayColor={props.arrayColor}
                      setArrayColor={props.setArrayColor}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref6} className="inline mr-5">
              <div className="relative inline">
                <button
                  type="button"
                  className={
                    length
                      ? `border ${
                          lengthCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                      : `border ${
                          lengthCount !== 0
                            ? "border-[#9c0e43] product_filter_text_bold"
                            : "border-[#E5E5E5] product_filter_text"
                        } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`
                  }
                  onClick={handleLength}
                >
                  {lengthCount !== 0 ? `Length (${lengthCount})` : "Length"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {length && (
                    <LengthSelector
                      count={lengthCount}
                      setCount={SetLengthCount}
                      arrayLength={props.arrayLength}
                      setArrayLength={props.setArrayLength}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref3} className="inline mr-5 ">
              <div className="relative inline">
                <button
                  type="button"
                  className={`border ${
                    fabricCount !== 0
                      ? "border-[#9c0e43] product_filter_text_bold"
                      : "border-[#E5E5E5] product_filter_text"
                  } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`}
                  onClick={handleFabric}
                >
                  {fabricCount !== 0 ? `Fabric (${fabricCount})` : "Fabric"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {fabric && (
                    <FabricSelector
                      count={fabricCount}
                      setCount={SetFabricCount}
                      setArrayFabric={props.setArrayFabric}
                      arrayFabric={props.arrayFabric}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref4} className="inline mr-5 outline-none">
              <div className="relative inline">
                <button
                  type="button"
                  className={`border ${
                    categoryCount !== 0
                      ? "border-[#9c0e43] product_filter_text_bold"
                      : "border-[#E5E5E5] product_filter_text"
                  } rounded-[30px] h-[40px] pl-3 pr-7 outline-none`}
                  onClick={handleCategory}
                >
                  {categoryCount !== 0
                    ? `Category (${categoryCount})`
                    : "Category"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {category && (
                    <CategorySelector
                      count={categoryCount}
                      setCount={SetCategoryCount}
                      setFilter={props.setFilter}
                      arrayCategory={props.arrayCategory}
                      setArrayCategory={props.setArrayCategory}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref5} className="inline mr-5 outline-none">
              <div className="relative inline">
                <button
                  type="button"
                  className={`border ${
                    sizeCount !== 0
                      ? "border-[#9c0e43] product_filter_text_bold"
                      : "border-[#E5E5E5] product_filter_text"
                  } rounded-[30px] product_filter
                    _text h-[40px] pl-3 pr-7 outline-none`}
                  onClick={handleSize}
                >
                  {sizeCount !== 0 ? `Size (${sizeCount})` : "Size"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {size && (
                    <SizeSelector
                      count={sizeCount}
                      setCount={SetSizeCount}
                      setFilter={props.setFilter}
                      arraySize={props.arraySize}
                      setArraySize={props.setArraySize}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref7} className="inline mr-5 outline-none">
              <div className="relative inline">
                <button
                  type="button"
                  className={`border ${
                    occasionCount !== 0
                      ? "border-[#9c0e43] product_filter_text_bold"
                      : "border-[#E5E5E5] product_filter_text"
                  } rounded-[30px]
                    product_filter_text h-[40px] pl-3 pr-7 outline-none`}
                  onClick={handleOccasion}
                >
                  {occasionCount !== 0
                    ? `Occasion (${occasionCount})`
                    : "Occasion"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {occasion && (
                    <OccasionSelector
                      count={occasionCount}
                      setCount={setOccasionCount}
                      arrayOccasion={props.arrayOccasion}
                      setArrayOccasion={props.setArrayOccasion}
                    />
                  )}
                </li>
              </ul>
            </li>
            <li ref={ref8} className="inline mr-5 outline-none">
              <div className="relative inline">
                <button
                  type="button"
                  className={`border ${
                    fitCount !== 0
                      ? "border-[#9c0e43] product_filter_text_bold"
                      : "border-[#E5E5E5] product_filter_text"
                  } rounded-[30px]
                    product_filter_text h-[40px] pl-3 pr-7 outline-none`}
                  onClick={handleFit}
                >
                  {fitCount !== 0 ? `Fit (${fitCount})` : "Fit"}
                </button>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-end">
                  <MdKeyboardArrowDown className="text-[#9C0E43]" />
                </div>
              </div>
              <ul>
                <li>
                  {fit && (
                    <FitSelector
                      count={fitCount}
                      setCount={SetFitCount}
                      arrayFit={props.arrayFit}
                      setArrayFit={props.setArrayFit}
                    />
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" h-[40px] w-[242px] sm:w-[212px] flex flex-row md:order-[-1] md:mr-5">
          <button
            type="button"
            className={
              !select
                ? `text-[#9C0E43] h-[40px] w-[131px] border border-[#9C0E43]
              bg-[#F5E7EC] rounded-[30px] product_filter_text_bolder`
                : `text-[#9C0E43] h-[40px] w-[131px] border border-[#999999]
               rounded-l-[30px] border-r-0 product_filter_text_bold`
            }
            onClick={handleMyResult}
          >
            My Results
          </button>
          <button
            type="button"
            className={
              select
                ? `text-[#9C0E43] h-[40px] w-[131px] border border-[#9C0E43]
               bg-[#F5E7EC] rounded-[30px] -ml-5 product_filter_text_bolder`
                : `text-[#9C0E43] h-[40px] w-[131px] -ml-5 border border-[#999999]
               rounded-r-[30px] border-l-0 product_filter_text_bold`
            }
            onClick={handleExplore}
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
};
export default Filter;

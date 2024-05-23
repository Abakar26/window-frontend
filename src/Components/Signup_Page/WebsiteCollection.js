/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlphabetList from "./AlphabetList";
import WebsiteSelectionList from "./WebsiteSelctionList";
import {
  getPreferenceBucket,
  getUserPreferenceBucket,
} from "../../services/collection_services";
import { setPreferences } from "../../reducers/preferences";
import { API_URL } from "../../Constants/Constants";
import axios from "axios";
let currentBtn = 0;
const controlButtons = [0, 1, 2];
const Alphabets = [
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export default function WebsiteCollection(props) {
  // const websitesData = useSelector(
  //   (preferences) => preferences.counter.preferences.websites
  // );
  // const websitesList = websitesData.map((website) => {
  //   return { ...website, isSelected: false };
  // });

  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState([]);
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [websitesList, setWebsitesList] = useState([]);
  const dispatch = useDispatch();

  const fetchSites = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}api/v1/home`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      });
      dispatch(
        setPreferences({
          websites: data.websites,
        })
      );
      setWebsitesList(data.websites);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const arraySetup = (mydata) => {
    mydata.map((value) => setArray((oldArray) => [...oldArray, value.website]));
  };

  const fetchData = () => {
    setLoading(true);
    const resp = getUserPreferenceBucket()
      .then((response) => {
        const mydata = response.data;
        arraySetup(mydata);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // const response = getPreferenceBucket();
    // response
    //   .then((data) => {
    //     dispatch(
    //       setPreferences({
    //         websites: data.data.websites,
    //       })
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setArray([]);
    fetchData();
    fetchSites();
  }, []);
  // Carousel Logic Here
  const [carouselControl, setCarouselControl] = useState(0);
  const carouselRef = useRef(null);
  const scroll = () => {
    if (carouselRef.current.scrollLeft >= 467) {
      carouselRef.current.scrollLeft = -500;
      setCarouselControl(0);
      currentBtn = 0;
    } else {
      carouselRef.current.scrollLeft += 250;
    }
  };
  const handleCarouselControl = (index) => {
    if (index === currentBtn) {
      return;
    }
    setCarouselControl(index);
    currentBtn = index;

    // Scroll Now
    scroll();
  };

  return (
    <>
      <div className="flex justify-center flex-col pb-11">
        <div
          ref={carouselRef}
          className="scrol_stylepref_right pt-[12px] pl-[12px] pr-[12px] border border-[#C4C4C4] pb-8 remove_scroll
                        rounded-[20px] flex flex-wrap items-center lg:max-h-[262px]
                         max-h-[413px] max-w-[632px] md:max-w-[303px]"
          style={{ width: 650, overflowX: "scroll" }}
        >
          <div className="flex flex-wrap max-w-[589px] w-full mb-[15px] items-baseline">
            <input
              className="search_stylepref focus:outline-none md:max-w-[279px] max-h-[21px] h-full max-w-[170px] w-full
              border-[1px] border-[#EDEDED] pl-[12px] md:mb-[5px]
                rounded-[20px] collection_search placeholder-search"
              placeholder="search"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div className="flex flex-wrap max-w-[411px] w-full justify-evenly">
              {Alphabets.map((char, index) => (
                <AlphabetList
                  key={index}
                  alphabet={char}
                  setSearch={setSearch}
                  search={search}
                  setToggle={setToggle}
                />
              ))}
            </div>
          </div>
          {!loading && websitesList.length != 0 && (
            <>
              <WebsiteSelectionList
                websitesList={websitesList}
                setWebsitesList={setWebsitesList}
                array={array}
                search={search}
                toggle={toggle}
                count={props.count}
                setCount={props.setCount}
                currentUser={props.currentUser}
                setOver={props.setOver}
                websites={props.websites}
                input={input}
              />
            </>
          )}
        </div>
        <div className="flex flex-row w-full justify-center relative bottom-[15px]">
          {controlButtons.map((value, index) => (
            <span
              key={index}
              className={
                carouselControl === index
                  ? "w-2 h-2 ml-2 bg-[#191919] rounded-full cursor-pointer"
                  : "w-2 h-2 ml-2 bg-[#D9D9D9] rounded-full cursor-pointer"
              }
              onClick={() => {
                handleCarouselControl(index);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

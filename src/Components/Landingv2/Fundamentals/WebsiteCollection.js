// import WebsiteList from "./WebsiteList";
import WebsiteSelectionList from "./WebsiteSelectionList";
import { useEffect, useState } from "react";
import AlphabetList from "./AlphabetList";
import cross from "../../../images/svg/cross.svg";

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
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div
        className={`flex justify-center flex-col w-[632px] bg-[#ffffff] rounded-[8px] mt-2 ${props.mstyle}`}
      >
        <div
          className="scrol_stylepref_right pt-[12px] pl-[12px] pr-[12px] border border-[#E5E5E5] pb-8 remove_scroll
                        rounded-[18px] flex flex-wrap max-h-[262px] h-full w-full sm:max-h-[673px] sm:px-0 sm:pt-0 overflow-auto sm:rounded-t-[18px] sm:rounded-[0px]"
        >
          <div className="flex flex-row max-w-[589px] w-full items-baseline sm:max-w-none sm:rounded-t-[18px] sm:rounded-[0px]">
            <input
              className="search_stylepref focus:outline-none max-w-[170px] w-full
              border-[1px] border-[#EDEDED] h-[30px] pl-3
                rounded-[20px] collection_search sm:hidden"
              placeholder="search"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div className="flex flex-wrap max-w-[411px] w-full justify-evenly sm:hidden">
              {Alphabets.map((char) => (
                <AlphabetList
                  alphabet={char}
                  setSearch={setSearch}
                  search={search}
                  setToggle={setToggle}
                />
              ))}
            </div>
          </div>
          <div className="hidden sm:block p-4">
            <div className="flex flex-row">
              <img
                src={cross}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={() => {
                  props.setOpenBool(false);
                }}
              />
              <label className="nav_input font-bold text-[#9C0E43]">
                Website
              </label>
            </div>
          </div>
          <div className="flex flex-col flex-wrap h-[215px] pb-[26px] sm:pb-0 sm:w-full sm:flex-nowrap">
            {props.websites
              .filter((lst) =>
                lst.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((val, i) => {
                // return <WebsiteList websites={val} search={search} toggle={toggle} count={props.count} setCount={props.setCount} />
                return (
                  <WebsiteSelectionList
                    website={val}
                    search={search}
                    count={props.count}
                    setCount={props.setCount}
                    i={i}
                    arrayWebsite={props.arrayWebsite}
                    setArrayWebsite={props.setArrayWebsite}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

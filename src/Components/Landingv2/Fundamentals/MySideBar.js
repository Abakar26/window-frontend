/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import icon1 from "../../../images/svg/icon1.svg";
import icon2 from "../../../images/svg/icon2.svg";
import icon3 from "../../../images/svg/icon3.svg";
import icon4 from "../../../images/svg/icon4.svg";
import icon11 from "../../../images/svg/icon11.svg";
import icon22 from "../../../images/svg/icon22.svg";
import icon33 from "../../../images/svg/icon33.svg";
import icon44 from "../../../images/svg/icon44.svg";

const MySideBar = ({ selected, setSelected }) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  location.pathname.includes("collection")
    ? setSelected(2)
    : location.pathname === "/personalinfo"
    ? setSelected(1)
    : location.pathname.includes("searches")
    ? setSelected(3)
    : location.pathname.includes("savedwebsites")
    ? setSelected(4)
    : null;

  return (
    <ul className="p-0 w-full pr-2">
      <li
        className={
          selected === 1 || first
            ? "relative flex py-4 pl-6 items-center cursor-pointer bg-[#F5E7EC] rounded-r-[40px] text-[#9C0E43] font-bold"
            : `relative flex py-4 pl-6 items-center cursor-pointer font-normal
           hover:bg-[#F5E7EC] hover:rounded-r-[40px] text-[#4C4C4A] hover:text-[#9C0E43] hover:font-bold`
        }
        onMouseEnter={() => {
          setFirst(true);
        }}
        onMouseLeave={() => {
          setFirst(false);
        }}
        onClick={() => {
          setSelected(1);
          navigate("/personalinfo");
        }}
      >
        {selected === 1 || first ? (
          <img className="absolute" src={icon11} alt="" />
        ) : (
          <img className="absolute" src={icon1} alt="" />
        )}
        <span className="ml-11 nav_input">Personal Info</span>
      </li>
      <li
        className={
          selected === 2 || second
            ? "relative flex py-4 pl-6 items-center cursor-pointer bg-[#F5E7EC] rounded-r-[40px] text-[#9C0E43] font-bold"
            : `relative flex py-4 pl-6 items-center cursor-pointer font-normal
          hover:bg-[#F5E7EC] hover:rounded-r-[40px] text-[#4C4C4A] hover:text-[#9C0E43] hover:font-bold`
        }
        onMouseEnter={() => {
          setSecond(true);
        }}
        onMouseLeave={() => {
          setSecond(false);
        }}
        onClick={() => {
          setSelected(2);
          navigate("/collections");
        }}
      >
        {selected === 2 || second ? (
          <img className="absolute" src={icon22} alt="" />
        ) : (
          <img className="absolute" src={icon2} alt="" />
        )}
        <span className="ml-11 nav_input ">Bookmarks</span>
      </li>
      <li
        className={
          selected === 3 || third
            ? "relative flex py-4 pl-6 items-center cursor-pointer bg-[#F5E7EC] rounded-r-[40px] text-[#9C0E43] font-bold"
            : `relative flex py-4 pl-6 items-center cursor-pointer font-normal
           hover:bg-[#F5E7EC] hover:rounded-r-[40px] text-[#4C4C4A] hover:text-[#9C0E43] hover:font-bold`
        }
        onMouseEnter={() => {
          setThird(true);
        }}
        onMouseLeave={() => {
          setThird(false);
        }}
        onClick={() => {
          setSelected(3);
          navigate("/searches");
        }}
      >
        {selected === 3 || third ? (
          <img className="absolute" src={icon33} alt="" />
        ) : (
          <img className="absolute" src={icon3} alt="" />
        )}
        <span className="ml-11 nav_input ">Your Searches</span>
      </li>
      <li
        className={
          selected === 4 || forth
            ? "relative flex py-4 pl-6 items-center cursor-pointer bg-[#F5E7EC] rounded-r-[40px] text-[#9C0E43] font-bold"
            : `relative flex py-4 pl-6 items-center cursor-pointer font-normal hover:bg-[#F5E7EC]
          hover:rounded-r-[40px] text-[#4C4C4A] hover:text-[#9C0E43] hover:font-bold`
        }
        onMouseEnter={() => {
          setForth(true);
        }}
        onMouseLeave={() => {
          setForth(false);
        }}
        onClick={() => {
          setSelected(4);
          navigate("/savedwebsites");
        }}
      >
        {selected === 4 || forth ? (
          <img className="absolute" src={icon44} alt="" />
        ) : (
          <img className="absolute" src={icon4} alt="" />
        )}
        <span className="ml-11 nav_input  ">Saved Websites</span>
      </li>
    </ul>
  );
};
export default MySideBar;

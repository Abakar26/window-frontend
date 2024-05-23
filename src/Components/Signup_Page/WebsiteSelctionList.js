/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, webistesListNames } from "../../Constants/Constants";

const WebsiteSelectionList = ({
  array,
  websitesList,
  count,
  setCount,
  search,
  setOver,
  input,
  setWebsitesList,
  onButtonPressed = () => {},
}) => {
  const websitesName = webistesListNames;
  const currentUser = localStorage.getItem("user");

  useEffect(() => {
    let alreadySelected = websitesList.map((website) => {
      if (array.includes(website.name)) {
        return { ...website, isSelected: true };
      }
      return { ...website, isSelected: false };
    });
    setWebsitesList(alreadySelected);
    if (array.length !== 0) {
      setOver(true);
      setCount(() => {
        return array.length;
      });
    }
  }, []);

  onButtonPressed = (website) => {
    if (!website.isSelected) {
      // increase Counts
      setCount(count + 1);
      axios
        .post(`${API_URL}api/v1/users/${currentUser}/shopping_preferences`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          preferences: {
            website: website.name,
            user_id: currentUser,
            type: "ShoppingPreference",
          },
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCount(count - 1); // decrease counts
      axios
        .delete(`${API_URL}api/v1/users/${currentUser}/shopping_preferences`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          data: {
            website: website.name,
            type: "ShoppingPreference",
          },
        })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // This function handles selecting website preferences
  const handleClick = (website) => {
    let filteredSites = websitesList.map((web) => {
      if (web.name === website.name) {
        return { ...web, isSelected: !website.isSelected };
      } else {
        return { ...web };
      }
    });
    // Update UI
    setWebsitesList(filteredSites);
    // Let's now remove From DB Too
    onButtonPressed(website);
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-x-[58px] gap-y-[12px] max-h-[262px] h-full">
      {websitesList
        .filter((website) => {
          return website.name.toLowerCase().includes(input.toLowerCase());
        })
        .map((website, index) => {
          return (
            <li
              key={index}
              className={
                website.status === "incomplete"
                  ? "opacity-40 pointer-events-none text-center pt-1 flex flex-col justify-center items-center"
                  : "cursor-pointer text-center pt-1 flex flex-col justify-center items-center"
              }
              data-id={index}
            >
              <button
                onClick={() => {
                  handleClick(website);
                }}
                className="w-[48px] h-[48px]"
                disabled={
                  search.length > 0 &&
                  search.every(
                    (s) => !website.name.toLowerCase().includes(s.toLowerCase())
                  )
                }
              >
                <img
                  src={website.logo}
                  alt="icon"
                  className={`''
          ${
            search.every((searchTerm) =>
              website.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
              ? `opacity-[1]  w-12 h-12 ${
                  website.isSelected && "outline-[#9C0E43] outline-4 outline"
                } rounded-full`
              : `opacity-[0.5] w-12 h-12 rounded-full`
          }`}
                />
              </button>

              <span
                className={` ''
          ${
            search.every((s) =>
              website.name.toLowerCase().includes(s.toLowerCase())
            )
              ? ` text-[#000000] ${
                  website.isSelected && "bg-[#F8E6EC] rounded-lg w-fit"
                } webistename mt-2 w-[82px]`
              : ` text-[#D9D9D9] webistename `
          }`}
              >
                {websitesName[website.name]}
              </span>
            </li>
          );
        })}
    </div>
  );
};
export default WebsiteSelectionList;

// opacity-[1]  w-12 h-12 false rounded-full

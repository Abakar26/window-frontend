import { useState, useEffect } from "react";
import { webistesListNames } from "../../../Constants/Constants";

const WebsiteSelectionList = ({
  website,
  count,
  setCount,
  search,
  toggle,
  i,
  setArrayWebsite,
  arrayWebsite,
  onButtonPressed = () => {},
}) => {
  const [style, setStyle] = useState(false);
  const websiteNames = webistesListNames;
  useEffect(() => {
    if (typeof arrayWebsite !== "undefined") {
      if (arrayWebsite.includes(website.name)) {
        setStyle(true);
      }
    }
  }, [arrayWebsite]);
  const onPressed = (event) => {
    setStyle(!style);
    if (style) {
      setCount(count - 1);
      setArrayWebsite(arrayWebsite.filter((item) => item !== website.name));
    } else {
      setArrayWebsite((old) => [...old, website.name]);
      setCount(count + 1);
    }
    onButtonPressed();
  };
  return (
    <li className="mb-[2px]">
      <button
        className={
          website.status === "incomplete"
            ? "opacity-40 pointer-events-none"
            : search.length !== 0 &&
              search.every(
                (search) =>
                  !website.name.toLowerCase().includes(search.toLowerCase())
              )
            ? " text-[#c4c4c4]"
            : "text-[#000000] " && style
            ? "website_selection_button_li bg-[#F8E6EC] sm:border-[#9C0E43] sm:border rounded-[20px] sm:rounded-[0px] sm:flex sm:h-[42px] sm:justify-start sm:w-full sm:mb-2 outline-none"
            : "website_selection_button_li bg-none sm:border-[#D9D9D9] sm:border sm:flex sm:h-[42px] sm:justify-start sm:w-full sm:mb-2 outline-none"
        }
        disabled={
          !search.length === 0 &&
          search.every(
            (search) =>
              !website.name.toLowerCase().includes(search.toLowerCase())
          )
        }
        data-id={i}
        onClick={onPressed}
      >
        <p className="button_paragraph_style">{websiteNames[website.name]}</p>
      </button>
    </li>
  );
};
export default WebsiteSelectionList;

import "../Styles/App.css";
import React, { useState, useEffect } from "react";
import WebsiteDropdown from "./WebsiteDropdown";
import SearchIconMobile from "../images/svg/search_icon_mobile.svg";
import SearchIconWeb from "../images/svg/search_icon_web.svg";
import SVGDesktop from "../images/svg/svg_desktop.svg";
import SignupLoginIcon from "../images/svg/signup_login_icon.svg";
import DownChevron from "../images/svg/downChevron.svg";
import Seperator from "../images/svg/seperator.svg";

function Search() {
  const [open, setOpen] = useState(null);
  const [openBool, setOpenBool] = useState(false);
  const [websites, setWebsites] = useState([
    "asos.com",
    "zara.com",
    "h&m.com",
    "bonobos.com",
    "ssense.com",
  ]);
  const [selectedWebsites, setSelectedWebsites] = useState([]);
  const [trending, setTrending] = useState([
    "yeezy",
    "nike aj1",
    "acne jeans",
    "zara sale",
    "h&m hoodie",
  ]);
  const [searchBarState, setSearchBarState] = useState(false);
  // testing a logged in user //
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedWebsites, setSavedWebsites] = useState([
    "athleisure",
    "formals",
    "clubby",
    "PJs",
    "essentials",
  ]);
  /*
  useEffect(() => {
    fetch(apiurl)
      .then(response => response.json)
      .then(data => setWebsites(data))
  }, [websites])
  */

  const onSubmit = () => {};

  const onClick = (e) => {
    e.preventDefault();
    websites.map((website) =>
      website === e.target.innerText &&
      !selectedWebsites.includes(e.target.innerText)
        ? setSelectedWebsites([...selectedWebsites, e.target.innerText])
        : null
    );
    // selectedWebsites.includes(e.target.innerText) ? selectedWebsites.filter(websites => websites.id !== id) : null
  };

  const searchBarDropdown = () => {
    return (
      <div className="searchbar_dropdown">
        <div>
          <p className="searchbar_trending">TRENDING</p>
        </div>
        <div className="trending_div">
          <ul className="trending_ul">
            {trending.map((trend) => (
              <button className="trending_website_button_li">
                <img
                  className="searchbar_images"
                  src={require("../images/snkr.png")}
                />
                <li className="website_li">{trend}</li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const openWebsites = () => {
    return (
      <div className="websites_dropdown">
        <input className="dropdown_input" placeholder="search" type="text" />
        {!loggedIn ? (
          <div className="saved_websites_div">
            <p className="saved_websites_p">YOUR SAVED WEBSITES</p>
            <div className="svg_outer_div">
              {window.innerWidth > 700 ? (
                <div className="svg_div_desktop">
                  <img src={SVGDesktop} alt="" />
                  <hr className="hr_website_dropdown" />
                  <img src={SVGDesktop} />
                  <hr className="hr_website_dropdown" />
                </div>
              ) : null}
              <div className="signup_login">
                <div id="svg-container">
                  <img
                    src={SignupLoginIcon}
                    alt=""
                    className="signup_login_icon_svg"
                  />
                </div>
                <div>
                  <p className="signup_login_p">
                    <a className="signup_login_a" href="/">
                      Sign up
                    </a>{" "}
                    or{" "}
                    <a className="signup_login_a" href="/">
                      Login
                    </a>{" "}
                    to view <br /> your saved websites
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="your_saved_websites_p">YOUR SAVED WEBSITES</p>
            <div className="your_saved_websites_div">
              {savedWebsites.map((websites) => (
                <div>{websites}</div>
              ))}
            </div>
          </div>
        )}
        <hr className="hr_separater" />
        <WebsiteDropdown websites={websites} onClick={onClick} />
        <a href="/collection">Search Collection</a>
      </div>
    );
  };

  const openDropDown = (event) => {
    setOpen(event.target.innerText);
    setOpenBool(!openBool);
  };

  const onChange = (e) => {};

  const onFocusState = () => {
    setSearchBarState(!searchBarState);
    setOpenBool(false);
  };

  const onBlurState = () => {
    setSearchBarState(!searchBarState);
  };

  return (
    <div className={openBool ? "container_blur" : "main_container"}>
      <form onSubmit={onSubmit}>
        {window.innerWidth > 700 ? (
          <div>
            <input
              className={openBool ? "main_input_open" : "main_input"}
              placeholder="search"
              type="text"
              onChange={onChange}
              onFocus={onFocusState}
              onBlur={onBlurState}
            />
            <button className="websites_button" type="submit" onClick={onClick}>
              <div onClick={openDropDown} className="website_outer_div_button">
                {/* <img src={Seperator} /> */}
                <div className="website_div_text">website</div>
                <img className="chevron" src={DownChevron} />
              </div>
            </button>
            <button className="search_button_svg" type="submit">
              <img src={SearchIconWeb} />
            </button>{" "}
          </div>
        ) : (
          <div>
            <button className="search_button_svg" type="submit">
              <img src={SearchIconMobile} />
            </button>
            <input
              className={openBool ? "main_input_open" : "main_input"}
              placeholder="search"
              type="text"
              onChange={onChange}
              onFocus={onFocusState}
              onBlur={onBlurState}
            />
            <button className="websites_button" type="submit" onClick={onClick}>
              <div onClick={openDropDown} className="website_outer_div_button">
                <div className="website_div_text">website</div>
              </div>
            </button>
          </div>
        )}
        {openBool ? <div>{openWebsites()}</div> : null}
        {searchBarState ? <div>{searchBarDropdown()}</div> : null}
      </form>
    </div>
  );
}

export default Search;

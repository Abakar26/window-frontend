import React, { useState, Fragment } from 'react';
import SearchBarDropdown from '../Landing/SearchBarDropdown';
import OpenWebsite from '../Landing/OpenWebsite';
import PopularDropdown from '../Landing/PopularDropdown';
import WebsiteDropDownButton from '../Landing/UI/WebsiteItems/WebsiteDropDownButton';
import SearchIconButton from './UI/Search/SearchIconButton';
import MobileSearch from './UI/Search/MobileSearch';
import MobileDropDownButton from '../Landing/UI/MobileDropDownButton';
import MainSearch from './UI/Search/MainSearch';
import '../../Styles/App.css'

function Search() {
  const [openBool, setOpenBool] = useState(false);
  const [popularInput, setPopularInput] = useState(false);
  const [input, setInput] = useState('');
  const [searchBlur, setSearchBlur] = useState(false);
  const [selectedWebsites, setSelectedWebsites] = useState([]);
  const [searchBarState, setSearchBarState] = useState(false);
  const [mobileView, setMobileViews] = useState(false);
  const websites = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com']


  const onSubmit = () => {

  }

  const onClick = (e) => {
    e.preventDefault();
    websites.map(website => (
      website === e.target.innerText && !selectedWebsites.includes(e.target.innerText) ?
        setSelectedWebsites([...selectedWebsites, e.target.innerText])
        : null
    ));
  }

  const openDropDown = (event) => {
    setOpenBool(!openBool)
    setSearchBlur(!searchBlur)
  }

  const onChange = (e) => {
    setInput(e.target.value);
    setPopularInput(true);
    setSearchBarState(false);
  }

  const onFocusState = () => {
    setSearchBarState(!searchBarState)
    setOpenBool(false);
    setSearchBlur(true);
    setMobileViews(true);
  }

  const onBlurState = () => {
    setSearchBarState(!searchBarState);
    setMobileViews(false);
    setOpenBool(false);
    setPopularInput(false);
    setSearchBlur(false);
    setSearchBarState(true);
    setInput('');
  }

  const mobileViewDrop = () => {
    setMobileViews(!mobileView);
  }

  return (
    <Fragment>
      <div className={searchBlur ?
        'w-container_width h-container_height bg-container_image opacity-50 bg-cover bg-center bg-no-repeat m-auto p-0 flex justify-center items-center'
        : 'w-container_width h-container_height bg-container_image bg-cover bg-center bg-no-repeat m-auto p-0 flex justify-center items-center'}>
      </div>
      <div className='flex justify-center p-0 m-auto -mt-29rem blur-none opacity-100'>
        <form onSubmit={onSubmit}>
          {window.innerWidth > 700 ?
            <div className='flex m-1.5 w-full'>
              <MainSearch value={input} onChange={onChange} onFocusState={onFocusState} onBlurState={onBlurState} openBool={openBool} />
              <WebsiteDropDownButton onClick={onClick} openDropDown={openDropDown} />
              <SearchIconButton />
            </div>
            :
            <div className='flex -mt-16 mr-4' onClick={mobileViewDrop}>
              <MobileSearch value={input} onChange={onChange} onFocusState={onFocusState} onBlurState={onBlurState} openBool={openBool} />
              <MobileDropDownButton onClick={onClick} openDropDown={openDropDown} />
            </div>
          }
          {openBool ? <div className={mobileView ? '-ml-1' : 'mr-3.5'}><OpenWebsite onClick={onClick} /></div> : null}
          {searchBarState ? <div className={'-ml-3'}><SearchBarDropdown /></div> : null}
          {popularInput ? <div><PopularDropdown input={input} /></div> : null}
        </form>
      </div>
    </Fragment >
  );
}

export default Search;

import React, { useState } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = (props) => {

  const [search, setSearch] = useState('');
  const collectionPath = window.location.pathname.includes('collection');

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    props.OnSearch(e.target.value);
  }

  const clearSearch = () => setSearch('');

  return (
    <div className='nav'>
      <div className='justify_items'>
        <div className='inline md:hidden d-inline mr-2 h-10'>
          <button onClick={props.handleSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <a className='window_logo' href='/'>window</a>
        {
          collectionPath &&
          <div>
            <div className='relative'>
              <div className='search_icon'>
                <BiSearch />
              </div>
              <input
                type='text'
                onChange={handleChange}
                value={search}
                className='collection_search_box focus:shadow focus:outline-none'
                placeholder='Search'
              />
              {
                search !== '' ? (
                  <div className='clear_btn'>
                    <button
                      onClick={clearSearch}
                    >
                      <BsFillXCircleFill />
                    </button>
                  </div>
                ) : null
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Nav;
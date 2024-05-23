import React, { useState } from 'react';
import CollectionList from './UI/Collection/CollectionList';

const Collection = () => {
  const [open, setOpen] = useState(null);
  const [openBool, setOpenBool] = useState(false);
  const collection = ['Websites', 'Category', 'Size', 'Color', 'Neck Line', 'Length']
  const websites = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'];

  const openList = () => {
    return (
      <ul>
        {websites.map(website => (
          <li>{website}</li>
        ))}
      </ul>
    );
  }

  const openDropDown = (event) => {
    setOpen(event.target.innerText)
    setOpenBool(!openBool)
  }

  return (
    <div>
      <div className='flex justify-between px-5'>
        <div>Filter</div>
        <div>Sort By</div>
      </div>
      <div className='flex p-5'>
        <div className='filters_on_left'>
          {collection.map((val) => {
            return <CollectionList collection={val} openList={openList} onClick={openDropDown} openBool={openBool} open={open} />
          })}
        </div>
        <div>Cards for products</div>
      </div>
    </div>
  );
}
export default Collection;
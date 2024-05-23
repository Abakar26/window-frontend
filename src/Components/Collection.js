import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import { WEBSITES, CATEGORIES, SIZES, COLORS, SORTBY } from '../Constants/Constants';
import ProductCard from './ProductCard';
import RenderMenuFilters from './RenderMenuFilters';

const Collection = () => {
  const [websites, setWebsites] = useState(WEBSITES);
  const [categories, setCategories] = useState(CATEGORIES);
  const [sizes, setSizes] = useState(SIZES);
  const [colors, setColors] = useState(COLORS);
  const [neckline, setNeckline] = useState([]);
  const [length, setLength] = useState([]);
  const [sortBy, setSortBy] = useState(SORTBY);
  const [ids, setIds] = useState([]);

  const handleSelectFilters = (index) => {
    if (ids.includes(index)) {
      setIds(ids.filter(item => item !== index));

    } else {
      setIds([
        ...ids,
        index
      ])
    }
    const element = document.getElementById(index);
    element.classList.toggle('selected_style');
  }

  return (
    <div>
      <div className='filter_sort'>
        <button className='filter_text'><ListIcon className='filter_icon' />Filter</button>
        <div className='filter_text'>
          Sort By :
          <select
            id='sortBy'
            name='sortBy'
            className='filter_text focus:outline-none'
          >
            {
              sortBy.map((sort, index) => (
                <option
                  key={`${sort}-${index}`}
                  value={sort}
                >
                  {sort}
                </option>
              ))
            }
          </select>
        </div>
      </div>

      <div className='hr_line' />

      <div className='collection relative min-h-screen md:flex'>
        <div className='sidebar absolute inset-y-0 left-0 transform -translate-x-full relative md:translate-x-0'>
          <div>
            <RenderMenuFilters
              websites={websites}
              categories={categories}
              sizes={sizes}
              colors={colors}
              handleSelectFilters={handleSelectFilters}
            />
          </div>
        </div>

        <div className='flex-1 content'>
          <div className='grid md:grid-cols-4 gap-7'>
            {
              websites.map((website, index) => (
                <ProductCard
                  index={index}
                  website={website}
                  key={`${website}-${index}`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;

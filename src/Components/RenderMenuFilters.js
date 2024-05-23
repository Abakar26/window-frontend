import React, { useState } from "react";
import FilterMenus from "./FilterMenus";

const RenderMenuFilters = ({ websites, categories, sizes, colors, handleSelectFilters }) => {
  const filterSubMenu = (filters) => (
    <ul className='p-0'>
      {
        filters.map((data, index) => (
          <p className='options_style' key={`${data}-${index}`} id={index} value={data} onClick={() => handleSelectFilters(index)}>{data}</p>
        ))
      }
    </ul>
  );

  const [dropDownData, setDropdownData] = useState([
    {
      filterTitle: 'Websites',
      filterSubMenu: filterSubMenu,
      filters: websites,
    },
    {
      filterTitle: 'Category',
      filterSubMenu: filterSubMenu,
      filters:  categories,
    },
    {
      filterTitle: 'Sizes',
      filterSubMenu: filterSubMenu,
      filters: sizes,
    },
    {
      filterTitle: 'Colors',
      filterSubMenu: filterSubMenu,
      filters: colors,
    }
  ])

  return (
    <>
      {
        dropDownData.map((data, index) => (
          <FilterMenus
            filterTitle={data.filterTitle}
            filterSubMenu={data.filterSubMenu}
            key={`${data}-${index}`}
            filters={data.filters}
          />
        ))
      }
    </>
  );
};

export default RenderMenuFilters;

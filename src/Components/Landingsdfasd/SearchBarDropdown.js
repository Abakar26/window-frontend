import TrendingDropDownBox from './UI/TrendingItems/TrendingDropDownBox';

const SearchBarDropdown = () => {
  return (
    <div className='ml-5'>
      {window.innerWidth > 700 ?
        <TrendingDropDownBox value={'w-drop-down_width xlg:w-website_drop_down_width_xlg btw_lg_and_md:w-website_drop_down_width_lg btw_lg_and_md:ml-24 btw_md:w-website_drop_down_width_btw_md btw_md:ml-7.5'}
          ptrend={'text-xs'} />
        :
        <div className='-ml-2'><TrendingDropDownBox value={'w-96 xsm:w-72 xsm:ml-4 -ml-1'} trendstyle={'text-xs'} ptrend={'text-xs font-normal'} /></div>
      }
    </div>
  );
}

export default SearchBarDropdown;


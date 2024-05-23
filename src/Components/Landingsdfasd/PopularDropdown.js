import PopularDropDownBox from './UI/PopularItems/PopularDropDownBox'

const PopularDropdown = (props) => {
  return (
    <div className='ml-5'>
      {window.innerWidth > 700 ?
        <PopularDropDownBox value={'w-drop-down_width xlg:w-website_drop_down_width_xlg xlg:ml-10 btw_lg_and_md:w-website_drop_down_width_lg btw_lg_and_md:ml-24 btw_md:w-website_drop_down_width_btw_md btw_md:ml-7.5'} input={props.input} />
        :
        <div className='-ml-2'> <PopularDropDownBox value={'w-96 xsm:w-72 xsm:ml-4 -ml-1'} trendstyle={'text-xs'} ptrend={'text-xs'} input={props.input} /></div>
      }
    </div>
  );
}

export default PopularDropdown;
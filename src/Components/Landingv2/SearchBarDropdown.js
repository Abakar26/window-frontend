import TrendingDropDownBox from './UI/TrendingItems/TrendingDropDownBox';

const SearchBarDropdown = (props) => {
  return (
    <div >
      <TrendingDropDownBox value={'w-drop-down_width w-full bg-white shadow-md dropdown-inner'}
        ptrend={'text-xs'} setFocusTrend={props.setFocusTrend} setSearchBarState={props.setSearchBarState} inputEl={props.inputEl} />
    </div>
  );
}

export default SearchBarDropdown;

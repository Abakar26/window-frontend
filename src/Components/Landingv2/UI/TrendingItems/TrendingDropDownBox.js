import MobileRecentWebsites from '../WebsiteItems/MobileRecentWebsites';
import MobileSavedWebsites from '../WebsiteItems/MobileSavedWebsites';
import RecentWebsites from '../WebsiteItems/RecentWebsites';
import SavedWebsites from '../WebsiteItems/SavedWebsites';
import Carousel from '../Carousel';

const TrendingDropDownBox = (props) => {
  const trendingDisplay = () => {
    props.setFocusTrend(true);
  }
  const trendingUnDisplay = () => {
    props.setFocusTrend(false);
  }
  return (
    <div className={`${props.marginleft}`}
      onMouseEnter={trendingDisplay}
      onMouseLeave={trendingUnDisplay}
      onClick={() => { props.inputEl.current.focus() }}>
      <div className={`bg-white p-4 rounded-lg overflow-auto ${props.value}`}>
        <div className="mb-4">
          {/* <RecentWebsites setSearchBarState={props.setSearchBarState} inputEl={props.inputEl} /> */}
          {/* <SavedWebsites setSearchBarState={props.setSearchBarState} inputEl={props.inputEl} /> */}
        </div>
        {/* <Carousel /> */}
      </div>
    </div>
  )
}
export default TrendingDropDownBox;

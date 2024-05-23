import Snacker from '../../../../images/snkr.png';
import MobileRecentWebsites from '../WebsiteItems/MobileRecentWebsites';
import MobileSavedWebsites from '../WebsiteItems/MobileSavedWebsites';
import RecentWebsites from '../WebsiteItems/RecentWebsites';
import SavedWebsites from '../WebsiteItems/SavedWebsites';

const TrendingDropDownBox = (props) => {
  const trending = ['yeezy', 'nike aj1', 'acne jeans', 'zara sale', 'h&m hoodie'];
  return (
    <div className={`${props.marginleft}`}>
      <div className={`bg-white p-0.5 rounded-lg overflow-auto ${props.value}`}>
        {window.innerWidth > 700 ?
          <div>
            <RecentWebsites />
            <SavedWebsites />
          </div> :
          <div>
            <MobileRecentWebsites />
            <MobileSavedWebsites />
          </div>
        }
        <div>
          <p className={`ml-2 mt-2 opacity-100 ${props.ptrend}`}>TRENDING</p>
        </div>
        <div className='p-1 mb-12 mt-2'>
          <ul className='flex -mt-3'>
            {trending.map(trend => (
              <button className='mx-2.5 p-0 border-none cursor-pointer bg-none outline-inherit font-inherit'>
                <img className='w-11/12 h-full rounded-md object-cover'
                  src={Snacker} alt='snaker' />
                <li className={`mb-2.5 mr-2.5 ${props.trendstyle}`}>{trend}</li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default TrendingDropDownBox;

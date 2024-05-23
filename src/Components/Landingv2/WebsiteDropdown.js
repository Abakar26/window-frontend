import WebsitesList from "./UI/WebsitesList";
import wlogo1 from '../../images/svg/wlogo1.svg';
import wlogo2 from '../../images/svg/wlogo2.svg';
import wlogo3 from '../../images/svg/wlogo3.svg';
import wlogo4 from '../../images/svg/wlogo7.svg';
import wlogo5 from '../../images/svg/wlogo5.svg';
import wlogo6 from '../../images/svg/wlogo6.svg';
import { useDispatch, useSelector } from "react-redux";
import preferences from "../../reducers/preferences";

function WebsiteDropdown({ websites, onClick, count, setcount, setWebsiteToggle, arrayWebsites, setArrayWebsites, websitePreference }) {
  // const preferences_dict = useSelector(preferences);
  const websites_list = useSelector((preferences) => {return (preferences.counter.preferences.websites)});
  const isLoggedIn = localStorage.getItem("authorization")

  return (
    <div>
      <div>
        {/* {localStorage.getItem("authorization") && <div className='flex'>
          <ul className='websitename-list websitename-list2'>
            <li>
              <ul className="wlogos-list">
                <li>
                  <img src={wlogo1} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo2} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo3} alt='serach_icon_web' />
                </li>
              </ul>
              <a href="https://www.athleisure.com">
                <span className="webistename">athleisure</span>
              </a>
            </li>
            <li>
              <ul className="wlogos-list">
                <li>
                  <img src={wlogo4} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo5} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo6} alt='serach_icon_web' />
                </li>
              </ul>
              <a href="https://www.formals.com">
                <span className="webistename">formals</span>
              </a>
            </li>
            <li>
              <ul className="wlogos-list">
                <li>
                  <img src={wlogo1} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo2} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo3} alt='serach_icon_web' />
                </li>
              </ul>
              <a href="https://www.clubby.com">
                <span className="webistename">clubby</span>
              </a>
            </li>
            <li>
              <ul className="wlogos-list">
                <li>
                  <img src={wlogo4} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo5} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo6} alt='serach_icon_web' />
                </li>
              </ul>
              <a href="https://www.pjs.com">
                <span className="webistename">PJs</span>
              </a>
            </li>
            <li>
              <ul className="wlogos-list">
                <li>
                  <img src={wlogo4} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo5} alt='serach_icon_web' />
                </li>
                <li>
                  <img src={wlogo6} alt='serach_icon_web' />
                </li>
              </ul>
              <a href="https://www.essentials.com">
                <span className="webistename">essentials</span>
              </a>
            </li>
          </ul>
        </div>} */}
        <div className='flex justify-center'>
          <ul className='flex flex-wrap h-[15rem] overflow-auto'>
            {websites_list?.map((website, i) => {
              return <WebsitesList key={i} arrayWebsites={arrayWebsites} websitePreference={websitePreference} setArrayWebsites={setArrayWebsites} websites={website} onClick={onClick} count={count} setcount={setcount} setWebsiteToggle={setWebsiteToggle} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDropdown;
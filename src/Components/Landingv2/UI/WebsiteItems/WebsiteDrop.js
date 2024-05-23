import { useState } from 'react';
import WebsiteDropdown from '../../WebsiteDropdown';
import LoginBox from './LoginBox';
import WebsiteSearch from '../Search/WebsiteSearch';
import LoginSVG from './LoginSVG';
import SavedLoginWebsites from './SavedLoginWebsites';

const WebsiteDrop = (props) => {
  const { arrayWebsites, setArrayWebsites, websitePreference } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  const websites = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'];
  const isLoggedIn = localStorage.getItem("authorization")


  const onClick = () => {
    setLoggedIn(true);
  }

  return (
    <div className={`rounded-[18px] bg-white  ${props.mstyle}`}>
      {/* {isLoggedIn && <p className='text-[0.625rem] font-[500] pb-2'>YOUR SAVED WEBSITES</p>} */}
      <WebsiteDropdown websites={websites} arrayWebsites={arrayWebsites} setArrayWebsites={setArrayWebsites} websitePreference={websitePreference} onClick={props.onClick} count={props.count} setcount={props.setcount} setWebsiteToggle={props.setWebsiteToggle} />
    </div>
  )
}
export default WebsiteDrop;
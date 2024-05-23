import { useState } from 'react';
import WebsiteDropdown from '../../WebsiteDropdown';
import LoginBox from './LoginBox';
import WebsiteSearch from '../Search/WebsiteSearch';
import LoginSVG from './LoginSVG';
import SavedLoginWebsites from './SavedLoginWebsites';

const WebsiteDrop = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const websites = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'];


  const onClick = () => {
    setLoggedIn(true);
  }

  return (
    <div className={`bg-white p-2.5 rounded mt-1.5 -mr-2.5 float-right w-website_drop_down_width xlg:mr-8 btw_md:w-website_drop_down_width_btw_md btw_lg_and_md:mr-5.5 btw_md:mr-28`}>
      <WebsiteSearch />
      {!loggedIn ?
        <div className='mb-5'>
          <p className='text-xs text-gray-400 mt-3'>YOUR SAVED WEBSITES</p>
          <div className='flex justify-between h-14 mt-4'>
            <LoginSVG />
            <LoginBox onClick={onClick} />
          </div>
          <span className='border-gray-200 border mt-6 flex'></span>
        </div>
        :
        <SavedLoginWebsites />
      }

      <WebsiteDropdown websites={websites} onClick={props.onClick} />
    </div>
  )
}
export default WebsiteDrop;
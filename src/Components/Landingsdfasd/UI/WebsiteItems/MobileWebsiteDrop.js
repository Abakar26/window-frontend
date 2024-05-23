import { useState } from 'react';
import WebsiteDropdown from '../../WebsiteDropdown';
import WebsiteSearch from '../Search/WebsiteSearch';
import LoginButton from './LoginButton';
import MobileLoginSVG from './MobileLoginSVG';
import MobileSavedLoginWebsites from './MobileSavedLoginWebsites';

const MobileWebsiteDrop = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginIcon, setLoginIcon] = useState(false);
  const websites = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'];

  const LoginIcon = () => {
    setLoginIcon(true);
  }

  const LoggedIn = () => {
    setLoggedIn(true);
  }

  return (
    <div className='bg-white p-2.5 rounded w-96 float-right mt-2  xsm:w-60'>
      <WebsiteSearch />
      {!loggedIn ?
        <div className='mb-5'>
          <div>
            <p className='text-xs text-gray-400 mt-3'>YOUR SAVED WEBSITES</p>
            <div className='flex justify-center h-14 mt-4'>
              {loginIcon && <div className='m-auto flex w-2/4 justify-evenly'>
                <MobileLoginSVG onClick={LoggedIn} />
              </div>}
              {!loginIcon && <div className='flex rounded-lg justify-around border-2 border-solid border-gray-400 items-center bg-cyan-50 w-288'>
                <LoginButton LoginIcon={LoginIcon} />
              </div>}
            </div>
            <span className='border-gray-200 border mt-6 flex' />
          </div>
        </div>
        :
        <MobileSavedLoginWebsites />
      }
      <WebsiteDropdown websites={websites} onClick={props.onClick} />
    </div>
  )
};
export default MobileWebsiteDrop;
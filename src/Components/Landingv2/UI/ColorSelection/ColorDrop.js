import { useState } from 'react';
import ColorDropdown from '../../ColorDropdown';
import LoginBox from './LoginBox';
import ColorSearch from '../Search/ColorSearch';
import LoginSVG from './LoginSVG';
import SavedLoginColor from './SavedLoginColor';

const ColorDrop = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const Color = ['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'];


  const onClick = () => {
    setLoggedIn(true);
  }

  return (
    <div className={`bg-white p-2.5 rounded mt-1.5 -mr-2.5 float-right w-Color_drop_down_width xlg:mr-8 btw_md:w-Color_drop_down_width_btw_md btw_lg_and_md:mr-5.5 btw_md:mr-28`}>
      <ColorSearch />
      {!loggedIn ?
        <div className='mb-5'>
          <p className='text-xs text-gray-400 mt-3'>YOUR SAVED ColorS</p>
          <div className='flex justify-between h-14 mt-4'>
            <LoginSVG />
            <LoginBox onClick={onClick} />
          </div>
          <span className='border-gray-200 border mt-6 flex'></span>
        </div>
        :
        <SavedLoginColor />
      }

      <ColorDropdown Colors={Color} onClick={props.onClick} />
    </div>
  )
}
export default ColorDrop;
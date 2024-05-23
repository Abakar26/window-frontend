import img2 from '../../../images/wlogo1.png';
import img from '../../../images/chicandcurvy.png';
import React, { useState, useEffect } from 'react';
import { webistesListNames } from '../../../Constants/Constants';

const WebsitesList = (props) => {
  const { websites, arrayWebsites, setArrayWebsites, websitePreference } = props;
  const [style, setStyle] = useState(false);
  const webistesList = webistesListNames;

  useEffect(() => {
    if (typeof arrayWebsites !== "undefined") {
      if (arrayWebsites.includes(websites.name)) {
        setStyle(true);
      }
    }
    if (typeof websitePreference !== 'undefined') {
      // websitePreference.filter(element => { if (element.website === websites.name) { setStyle(true) } })
    }
  }, [arrayWebsites])

  const onPressed = () => {
    setStyle(!style);
    if (style) {
      props.setcount(props.count - 1);
      setArrayWebsites(arrayWebsites.filter(item => item !== websites.name));
      props.setWebsiteToggle(true);
    } else {
      props.setcount(props.count + 1);
      setArrayWebsites(old => [...old, websites.name]);
      props.setWebsiteToggle(true);
    }
  }

  return (<>
    <li onClick={onPressed} className={websites.status === 'incomplete' ? "opacity-40 pointer-events-none w-[20%] text-center pt-1" : "cursor-pointer w-[20%] text-center pt-1"}>
      <div className='mx-4'>
        <img src={websites.logo} alt='icon' className={`${style ? 'outline outline-[#9C0E43] rounded-full' : ''}`} />
      </div>
      <span className={style ? 'webistename bg-[#F8E6EC] rounded-lg' : 'webistename'}>{webistesList[props?.websites.name]}</span>
    </li>
  </>
  );
}
export default WebsitesList;

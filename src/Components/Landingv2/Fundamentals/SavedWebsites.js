import { useState, useEffect } from "react";
import SavedWebsiteListDown from "./SavedWebsiteListDown";
import { useNavigate } from 'react-router-dom';

const people = [
  { id: '1', items: 'luxury' },
  { id: '2', items: 'athleisure' },
  { id: '3', items: 'party' },
  { id: '4', items: 'Essentials' },
  { id: '5', items: 'jeans' },
  { id: '6', items: 'tees' },
]
const SavedWebsites = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    if(!localStorage.getItem('authorization')){
      navigate('/login')
    }
    props.setFundamentalNav(true);
    props.setSelectSideNav(4);
  }, [])
  const [click, setClick] = useState(false);
  const checkClick = () => {
    setClick(!click);
  }

  return (<div className='flex w-full justify-center flex-col pt-11'>
    <div className='flex flex-col items-center text-center' >
      <p className='dress_search_header'>Coming Soon</p>
    </div>
  </div>
  )

  // return (<div className='flex w-full justify-center flex-col pt-11'>
  //   <div className='flex flex-col items-center text-center' >
  //     <p className='dress_search_header'>Saved Websites</p>
  //     <p className='saved_web_text'>Manage your saved websites here</p>
  //   </div>
  //   <div className='flex w-full justify-center'>
  //     <div className={click ? 'grid grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-center grid_mobile' :
  //       'grid grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-center grid_mobile'} onClick={checkClick}>
  //       {people.map((value) => (
  //         <SavedWebsiteListDown value={value} people={people} />
  //       ))}
  //       <div className=' w-[250px] h-[295px] border border-[#999999] rounded-[8px] flex items-center justify-center'>
  //         <p className='text-[#9C0E43] window_font'>New Website Collection</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // )
}

export default SavedWebsites

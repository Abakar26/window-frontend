import { useState, useEffect } from "react";
import RecentSearches from "./RecentSearches";
import SavedSearches from "./SavedSeraches";
import { useNavigate } from 'react-router-dom';

const YourSearches = (props) => {
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate();

  const myfunction = () => {
    settoggle(!toggle);
  }
  useEffect(() => {
    if(!localStorage.getItem('authorization')){
      navigate('/login')
    }
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    props.setFundamentalNav(true);
    props.setSelectSideNav(3);
  })

  return (
    <div className='flex flex-col items-center bg-[#ffffff] pt-11 h-screen'>
      <p className='dress_search_header'>Coming Soon</p>
    </div>
  )


  // return (
  //   <div className='flex flex-col items-center bg-[#ffffff] pt-11 h-screen'>
  //     <p className='dress_search_header '>Your Searches</p>
  //     <p className='dress_search_text '>Manage your recent and saved searches here</p>
  //     <div className="flex flex-col max-w-[791px] w-full mb-[32px] ">
  //       <div className="flex flex-row">
  //         <div className={'flex flex-col mr-8'}>
  //           <button
  //             className={'flex text-[#9c0e43] bg-[#ffffff] font-bold text-[14px] '}
  //             onClick={myfunction}> RECENT </button>
  //           <div className=" border-[#9c0e43] w-[108px] border  mt-[11px]"></div>
  //         </div>
  //         <div className={'flex flex-col opacity-30 pointer-events-none'}>
  //           <button className={'flex text-[#9c0e43] bg-[#ffffff] font-bold text-[14px]'}
  //             onClick={myfunction}
  //           >SAVED   </button>
  //           <div className="border-[#9c0e43] w-[108px] border  mt-[11px] "></div>
  //         </div>
  //       </div>
  //       {<RecentSearches />}
  //       {/* {!toggle && <SavedSearches />} */}
  //     </div>
  //   </div>
  // )
}
export default YourSearches;

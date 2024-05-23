import { useNavigate } from 'react-router-dom';
import { logout } from "../../../actions/auth";
import { useDispatch } from "react-redux";


const ProfileDropDown = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };


  return (
    <div className={props.profile ? 'w-[235px] h-[300px] border border-[#999999] rounded-lg z-20 bg-[#ffffff] absolute inset-y-0 flex mt-[58px] -mr-2 px-4 justify-center' : 'hidden'}
      onMouseLeave={() => { props.setProfile(false) }}>
      <div className='flex flex-col text-center pb-3 absolute items-center'>

        <span className='nav_profile_dropdown_name mt-[25%]'>{localStorage.getItem("first-name")} {localStorage.getItem("last-name")}</span>
        <span className='nav_profile_dropdown_email'>{localStorage.getItem("email")}</span>
      </div>
      <div className='flex items-baseline mt-[40%] absolute'>
        <span className='nav_profile_dropdown_heading mr-3'>SETTINGS</span>
        <span className='border w-[142px] border-[#C4C4C4] '></span>
      </div>   
      <div className='absolute mt-[50%] left-[1.25rem]'>
        <ul>
          <li className='nav_profile_dropdown_li text-[#000000] pb-4 cursor-pointer hover:text-[#EB6D66]' onClick={() => { navigate('/personalinfo');props.setSelected(1); }}>Personal Info</li>
          <li className='nav_profile_dropdown_li text-[#000000] pb-4 cursor-pointer hover:text-[#EB6D66]' onClick={() => { navigate('/collections');props.setSelected(2); }}>Bookmarks</li>
          <li className='nav_profile_dropdown_li text-[#000000] pb-4 cursor-pointer hover:text-[#EB6D66]' onClick={() => { navigate('/searches');props.setSelected(3); }} >Your Searches</li>
          <li className='nav_profile_dropdown_li text-[#000000] pb-4 cursor-pointer hover:text-[#EB6D66]' onClick={() => { navigate('/savedwebsites');props.setSelected(4); }}>Saved Websites</li>
        </ul>
      </div>
      <div className='flex items-baseline mt-[105%] absolute'>
        <span className='nav_profile_dropdown_heading mr-3'>ACCOUNT</span>
        <span className='border w-[142px] border-[#C4C4C4] '></span>
      </div>
      <span className='nav_profile_dropdown_li text-[#EB6D66] left-[1.25rem] absolute mt-[115%] cursor-pointer font-black'
        onClick={() => { logOut() }}><strong className='font-black'>Sign Out</strong></span>
      {/* <span className=' absolute mt-[417px] nav_profile_dropdown_li'>Support  •  Terms of Service</span> */}
    </div>
  );
}
export default ProfileDropDown;

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactInformation from './ContactInformation';
import Password from './Password';
import SizePreferences from './SizePreferences';
import StylePreferences from './StylePreferences';

const PersonalInfo = (props) => {
  const { setFundamentalNav, setSelectSideNav } = props;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    setFundamentalNav(true);
    setSelectSideNav(1);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col justify-center pt-[42px] pb-[303px] bg-[#ffffff]">
        <span className="flex justify-center fundamental_header mb-[10px]">Personal Info</span>
        <div className="flex w-full justify-center">
          <p className=" fundamental_paragraph mb-[34px] max-w-[368px] w-full text-center">
            Manage your personal information such as name, email, password etc.
          </p>
        </div>
        <ContactInformation />
        <Password />
        <SizePreferences />
        <StylePreferences setFundamentalNav={setFundamentalNav} />
      </div>
    </>
  );
};
export default PersonalInfo;

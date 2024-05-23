/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupWelcome = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
  });
  return (
    <div className=" h-[900px]  flex flex-col items-center  px-0 pt-[171px] ">
      <div className="flex flex-col items-center">
        <p className="signup_welcome_container mb-[13px] window_font">Et Voila.</p>
        <p className="signup_text_aesthetic mb-[82px] window_font">Welcome to Window</p>
      </div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="bg-[#9C0E43] rounded-[60px] signup_welcome_button text-center"
          onClick={() => navigate('/')}
        >
          <p className="signup_button_paragraph">Start Searching on Window!</p>
        </button>
        <a
          onClick={() => { navigate('/personalinfo'); }}
          className="signup_welcome_link hover:cursor-pointer"
        >
          Go to Your Profile
        </a>
      </div>
    </div>

  );
};
export default SignupWelcome;

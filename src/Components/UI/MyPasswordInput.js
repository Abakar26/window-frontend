/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from 'react';
import uncheckpassword from '../../images/svg/password_uncheck.svg';
import checkpassword from '../../images/svg/checkeye.svg';
import EqualValidation from '../Signup_Page/EqualValidation';

const MyPasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(false);
  const [myplaceholder, setMyplaceHolder] = useState(false);
  const [vlc, setVlc] = useState(false);

  useEffect(() => {
    if (props.passwordValue?.length !== 0) {
      setMyplaceHolder(false);
      setIcon(true);
    } else {
      setIcon(false);
      setMyplaceHolder(true);
    }
    if (props.label === 'CONFIRM PASSWORD' && props.passwordValue.length !== 0) {
      setVlc(true);
    } else {
      setVlc(false);
    }
  }, [props.passwordValue]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMyplaceHolder(true);
    // setPassword(e.target.value);
    props.setPasswordValue(e.target.value);
  };
  return (
    <div className={props.label === 'CONFIRM PASSWORD'
      && icon ? 'flex flex-col mb-[2px] max-w-[185px] w-full sm:order-1 sm:mb-6 md:order-1 md:mb-6'
      : 'flex flex-col mb-6 max-w-[185px] w-full sm:order-1 md:order-1'}
    >
      <label className="about_signup_label mb-2" htmlFor={props.id || props.name}>{props.label}</label>
      <div className="flex flex-row max-w-[185px] w-full h-[37px] border-[#C4C4C4]
       border rounded-lg pl-3 bg-white relative"
      >
        <input
          className={myplaceholder
            ? 'max-w-[148px] w-full focus:outline-none'
            : `max-w-[148px] w-full focus:outline-none pt-3 ${showPassword && 'pt-0'}`}
          type={showPassword ? 'text' : 'password'}
          value={props.passwordValue}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={handleChange}
          tabIndex={props.tabIndex}
          onKeyDown={props.onKeyDown}
        // onFocus={() => { setMyplaceHolder(true) }}
        // disabled={props.confirm && !props.validation}
        />
        {icon && (
          <div className="w-[17px] absolute right-[2px] top-[40%]" onClick={handleShowPassword}>
            {showPassword ? <img src={checkpassword} alt="" /> : <img src={uncheckpassword} alt="" />}
          </div>
        )}
      </div>
      {icon && vlc && <EqualValidation equal={props.equal} />}
    </div>
  );
};
export default MyPasswordInput;

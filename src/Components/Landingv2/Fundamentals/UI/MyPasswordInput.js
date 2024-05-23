import { useEffect, useState } from "react";
import uncheckpassword from '../../../../images/svg/password_uncheck.svg'
import checkpassword from '../../../../images/svg/checkeye.svg'
import EqualValidation from "./EqualValidation";

const MyPasswordInput = (props) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (password.length === 0) {
      setIcon(false);
    }
    else {
      setIcon(true);
    }

  }, [password])

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    props.setPasswordValue(e.target.value);
  }
  return (
    <div className={props.label === 'CONFIRM NEW PASSWORD' && icon ? `flex flex-col mb-[22px]` : `flex flex-col mb-11`}>
      <label className='mb-1 fundamental_box_label' htmlFor={props.id || props.name}>{props.label}</label>
      <div className='flex flex-row max-w-[237px] w-full h-[37px] border-[#C4C4C4] border rounded-lg pl-3 bg-white relative'>
        <input className={icon ? 'w-[200px] focus:outline-none' : 'w-[190px] focus:outline-none'}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onClick={props.onClick}
          onBlur={props.onBlur}
          onChange={handleChange}
        />
        {icon && <div className='w-[17px] absolute right-[4px] top-[37%]' onClick={handleShowPassword}>
          {showPassword ? <img src={checkpassword} alt='' /> : <img src={uncheckpassword} alt='' />}
        </div>}
      </div>
      {props.label === 'CONFIRM NEW PASSWORD' && icon && <EqualValidation equal={props.equal} />}
    </div>
  );
};
export default MyPasswordInput;
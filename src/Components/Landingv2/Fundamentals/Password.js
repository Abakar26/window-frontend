/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import MyPasswordInput from './UI/MyPasswordInput';
import PasswordValidation from './UI/Password_Validation';

const Password = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [over, setOver] = useState(false);
  const [validation, setValidation] = useState(false);
  const [equal, setEquiality] = useState(false);
  const [oldpasswordValue, setOldPasswordValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confpasswordValue, setConfPasswordValue] = useState('');
  const [pwdFocus, setPwdFocus] = useState(true);

  const PasswordFocus = () => {
    setPwdFocus(false);
  };

  const BlurHandle = () => {
    setPwdFocus(true);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setOldPasswordValue(event.target.value);
  };

  useEffect(() => {
    const alphabet = /[A-Z]/;
    const numaric = /[0-9]/;
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (passwordValue.length >= 7) {
      setFirst(true);
    } else {
      setFirst(false);
    }
    if (alphabet.test(passwordValue)) {
      setSecond(true);
    } else {
      setSecond(false);
    }
    if (numaric.test(passwordValue)) {
      setThird(true);
    } else {
      setThird(false);
    }
    if (format.test(passwordValue)) {
      setForth(true);
    } else {
      setForth(false);
    }
    if (first && second && third && forth) {
      setValidation(true);
    } else {
      setValidation(false);
    }
    if (passwordValue === confpasswordValue && passwordValue.length !== 0 && confpasswordValue.length !== 0) {
      setEquiality(true);
    } else {
      setEquiality(false);
    }
    if (oldpasswordValue !== '' && passwordValue !== '' && confpasswordValue !== '' && equal) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [oldpasswordValue, passwordValue, confpasswordValue, equal]);
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-[424px] border border-[#999999] rounded-lg max-w-[572px] w-full sm:h-[529px] sm:w-auto
       bg-[#ffffff] mb-10 px-[42px] pt-9 pb-12"
      >
        <div className="flex flex-row justify-between max-w-[488px] w-full sm:flex-col
        sm:justify-center sm:items-center sm:pt-9"
        >
          <span className="fundamental_box_header flex sm:mb-10">Password</span>
          <div className="flex flex-col">
            <div className="flex flex-col mb-11">
              <label className="mb-1 fundamental_box_label">OLD PASSWORD</label>
              <input
                className="max-w-[237px] w-full h-[37px] border border-[#C4C4C4] rounded-lg pl-3 focus:outline-none"
                type="password"
                value={oldpasswordValue}
                onChange={handleChange}
              />
            </div>
            <MyPasswordInput
              label="NEW PASSWORD"
              name="password"
              type="password"
              setPasswordValue={setPasswordValue}
              onClick={PasswordFocus}
              onBlur={BlurHandle}
            />
            {(!pwdFocus && !validation)
              && <PasswordValidation first={first} second={second} third={third} forth={forth} />}
            {(pwdFocus || validation)
              && (
                <MyPasswordInput
                  label="CONFIRM NEW PASSWORD"
                  name="password"
                  type="password"
                  setPasswordValue={setConfPasswordValue}
                  equal={equal}
                />
              )}
            <button
              type="button"
              className={over
                ? 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#9C0E43] fundamental_box_button_text'
                : 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#C4C4C4] fundamental_box_button_text'}
              disabled={!over}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Password;

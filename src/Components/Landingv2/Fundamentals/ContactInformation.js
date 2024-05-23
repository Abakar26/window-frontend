/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import validator from 'validator';
import isMatch from 'date-fns/isMatch';
import Modal from './Modal';
import exclaim2 from '../../../images/svg/exclaim_icon2.svg';

const ContactInformation = () => {
  const [modal, setModal] = useState(false);
  const [over, setOver] = useState(false);
  const [over2, setOver2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [firstname, setFirstName] = useState({
    value: localStorage.getItem('first-name')
      ? localStorage.getItem('first-name') : '',
    bool: false,
  });
  const [lastname, setLastName] = useState({
    value: localStorage.getItem('last-name')
      ? localStorage.getItem('last-name') : '',
    bool: false,
  });
  const [email, setEmail] = useState(localStorage.getItem('email') ? localStorage.getItem('email') : '');
  const [dob, setDOB] = useState(localStorage.getItem('dob') ? localStorage.getItem('dob') : '');
  useEffect(() => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(firstname.value)) {
      setFirstName({ bool: true });
    }
    if (format.test(lastname.value)) {
      setLastName({ bool: true });
    }
    if (email.length === 0) {
      setOver(false);
    }
    if (dob.length === 0) {
      setOver2(false);
    }
    if (firstname.value !== '' && lastname.value !== '' && email !== ''
      && dob !== '' && !over && !over2 && !firstname.bool && !lastname.bool) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [firstname.value, lastname.value, email, dob, over, over2, firstname.bool, lastname.bool]);

  const handleClick = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const handleFirstnameInput = (event) => {
    setFirstName({ value: event.target.value });
  };
  const handleLastnameInput = (event) => {
    setLastName({ value: event.target.value });
  };
  const handleDOBInput = (event) => {
    setDOB(event.target.value);
    if (isMatch(dob, 'mm/dd/yyyy')) {
      setOver2(true);
    } else {
      setOver2(false);
    }
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    if (validator.isEmail(email)) {
      setOver(false);
    } else {
      setOver(true);
    }
  };
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex border border-[#999999] rounded-lg max-w-[572px] w-full h-[525px] sm:h-[630px] sm:w-auto
         bg-[#ffffff] mb-10 px-[42px] pt-9 pb-12"
        >
          <div className="flex flex-row justify-between max-w-[488px] w-full sm:flex-col
          sm:justify-center sm:items-center sm:pt-9"
          >
            <span className="fundamental_box_header flex sm:mb-10 w-full">Contact Information</span>
            <div className="flex flex-col w-full">
              <div className={firstname.bool ? 'flex flex-col mb-[26px]' : 'flex flex-col mb-11'}>
                <label className="mb-1 fundamental_box_label">FIRST NAME</label>
                <input
                  className="max-w-[237px] w-full h-[37px] border border-[#C4C4C4]
                  rounded-lg pl-3 fundamental_input focus:outline-none"
                  type="text"
                  value={firstname.value}
                  onChange={(event) => handleFirstnameInput(event)}
                />
                {firstname.bool && (
                  <div className="flex flex-row mt-1">
                    <img className="mr-1" src={exclaim2} alt="" />
                    {' '}
                    <span className="contact_info_error">Name can't have special characters</span>
                  </div>
                )}
              </div>
              <div className={lastname.bool ? 'flex flex-col mb-[26px]' : 'flex flex-col mb-11'}>
                <label className="mb-1 fundamental_box_label">LAST NAME</label>
                <input
                  className="max-w-[237px] w-full h-[37px] border border-[#C4C4C4]
                  rounded-lg pl-3 fundamental_input focus:outline-none"
                  type="text"
                  value={lastname.value}
                  onChange={(event) => handleLastnameInput(event)}
                />
                {lastname.bool && (
                  <div className="flex flex-row mt-1">
                    <img className="mr-1" src={exclaim2} alt="" />
                    {' '}
                    <span className="contact_info_error">Name can't have special characters</span>
                  </div>
                )}
              </div>
              <div className={over ? 'flex flex-col mb-[26px]' : 'flex flex-col mb-11'}>
                <label className="mb-1 fundamental_box_label">EMAIL</label>
                <input
                  className="max-w-[237px] w-full h-[37px] border border-[#C4C4C4]
                  rounded-lg pl-3 fundamental_input focus:outline-none"
                  type="email"
                  value={email}
                  required
                  onChange={(event) => handleEmailInput(event)}
                />
                {over && (
                  <div className="flex flex-row mt-1">
                    <img className="mr-1" src={exclaim2} alt="" />
                    {' '}
                    <span className="contact_info_error">Please enter a valid email ID</span>
                  </div>
                )}
              </div>
              <div className={over2 ? 'flex flex-col mb-[26px]' : 'flex flex-col mb-11'}>
                <label className="mb-1 fundamental_box_label">DATE OF BIRTH</label>
                <input
                  className="max-w-[237px] w-full h-[37px] border border-[#C4C4C4]
                  rounded-lg pl-3 fundamental_input focus:outline-none"
                  type="date"
                  value={dob}
                  onChange={(event) => handleDOBInput(event)}
                />
                {over2 && (
                  <div className="flex flex-row mt-1">
                    <img className="mr-1" src={exclaim2} alt="" />
                    {' '}
                    <span className="contact_info_error">Incorrect date format</span>
                  </div>
                )}
              </div>
              <button
                type="button"
                className={toggle
                  ? 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#9C0E43] fundamental_box_button_text outline-none'
                  : 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#C4C4C4] fundamental_box_button_text outline-none'
                }
                onClick={handleClick}
                disabled={!toggle}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};
export default ContactInformation;

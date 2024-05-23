/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cross from '../../../images/svg/cross.svg';

export default function Modal(props) {
  const [open, setOpen] = useState(true);
  const [code, setCode] = useState('');
  const [style, setStyle] = useState(false);
  const [buttonVlaue, setButtonValue] = useState('Verify');
  const handleChange = (event) => {
    console.log(event.target.value);
    setCode(event.target.value);
  };
  useEffect(() => {
    // props.setModal(true);
    if (code.length >= 8) {
      setStyle(true);
      setButtonValue('Verifying...')
    } else {
      setStyle(false)
      setButtonValue('Verify')
    }
    // return () => {
    //   props.setModal(false);
    // }
  }, [code]);
  const handleModal = () => {
    props.setModal(false);
  };
  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 modal_background" />
        </Transition.Child>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center h-full w-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white w-[486px] h-[364px] rounded-xl px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:absolute sm:w-full sm:bottom-0 sm:rounded-t-[12px] sm:rounded-none">
                <div>
                  <div className="flex w-full justify-start cursor-pointer" onClick={() => { props.setModal(false); }}>
                    <img src={cross} alt="cross" aria-hidden="true" />
                  </div>
                  <div className="mt-6 pl-4 sm:flex sm:flex-col">
                    <label className="modal_label">Verify New Email</label>
                    <p className="modal_paragraph mt-2 mb-3">
                      Enter the code sent to your new email
                      {' '}
                      <br />
                      {' '}
                      address
                    </p>
                    <label className="modal_code text-[#808080]">CODE</label>
                    <input
                      className="max-w-[422px] w-full h-[37px] border border-[#C4C4C4] rounded-lg mt-2 focus:outline-none px-3 modal_input mb-[72px]"
                      type="text"
                      value={code}
                      onChange={(e) => handleChange(e)}
                    />
                    <div className="flex w-full justify-center sm:justify-end">
                      <button
                        className={style ? 'w-[185px] h-[37px] border rounded-lg border-[#ffffff] modal_code text-[#ffffff] bg-[#9C0E43] sm:rounded-[20px]' : 'w-[185px] h-[37px] border rounded-lg border-[#9C0E43] modal_code text-[#9C0E43] sm:rounded-[20px]'}
                        onClick={() => { props.setModal(false); }}
                        disabled
                      >
                        {buttonVlaue}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

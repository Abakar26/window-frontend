/* eslint-disable react/jsx-boolean-value */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cross from '../../images/svg/cross.svg';

export default function WebsiteRequestModal(props) {
  const [websiteName, setWebsiteName] = useState('');
  const handleChange = (event) => {
    setWebsiteName(event.target.value);
    props.setLink(event.target.value);
  };
  const handleClick = () => {
    props.setModal(false);
  };
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClick}>
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
              <Dialog.Panel className="relative bg-white w-[486px] h-[364px] rounded-xl px-4 pt-3 pb-4 text-left
               overflow-hidden shadow-xl transform transition-all sm:absolute sm:w-full
               sm:bottom-0 sm:rounded-t-[12px] sm:rounded-none"
              >
                <div>
                  <div className="flex w-full justify-start cursor-pointer" onClick={() => { props.setModal(false); }}>
                    <img src={cross} alt="cross" aria-hidden="true" />
                  </div>
                  <div className="mt-6 pl-4 sm:flex sm:flex-col">
                    <label className="modal_label">Website Request</label>
                    <p className="modal_paragraph mt-2 mb-3">
                      Enter the website below to request it to be on Window!
                    </p>
                    <label className="modal_code text-[#808080]">Website</label>
                    <input
                      className="max-w-[422px] w-full h-[37px] border border-[#C4C4C4]
                       rounded-lg mt-2 focus:outline-none px-3 modal_input mb-[72px]"
                      type="text"
                      value={websiteName}
                      onChange={(e) => handleChange(e)}
                    />
                    <div className="flex w-full justify-center sm:justify-end">
                      <button
                        type="button"
                        className="w-[185px] h-[37px] border rounded-[50px] border-[#9C0E43]
                         modal_code text-[#9C0E43] sm:rounded-[20px]"
                        onClick={() => { props.setWebsiteFeedback(); }}
                      >
                        Request
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

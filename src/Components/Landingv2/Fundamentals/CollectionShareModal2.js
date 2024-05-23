/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import cross from "../../../images/svg/collection_cross.svg";

export default function CollectionShareModal(props) {
  const navigate = useNavigate();
  const getStarted = () => {
    if (!localStorage.getItem("authorize")) {
      navigate("/login");
    }
  };

  return (
    <Transition.Root show as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={props.handleShareClick}
      >
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
              <Dialog.Panel
                className="relative max-w-[476px] w-full h-[296px] sm:h-[320px] rounded-[24px] bg-[#ffffff]
              pt-9 pl-8 pr-5 pb-8 text-left shadow-xl transform transition-all"
              >
                <div className="w-full relative">
                  <div className="modalBody flex flex-col items-center">
                    <img
                      src={cross}
                      alt="img"
                      className="absolute top-[-36%] right-[-4%] w-[29px] h-[29px] cursor-pointer"
                      onClick={props.handleShareClick}
                    />
                    <div className="w-full text-center mb-20">
                      <p className="title mb-3">
                        Save your own collection on Window!
                      </p>
                      <p className="collection_share_modal text-[#000000]">
                        Search and discover personalized looks while you’re at
                        it.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center text-center">
                      <button
                        type="button"
                        className="w-[169px] h-[38px] mb-[15px] rounded-[80px] bg-[#9C043A] px-8
                        py-2 text-white shareable_button"
                        onClick={getStarted}
                      >
                        Get Started
                      </button>
                      <span
                        className="collection_share_modal text-[#9C043A] cursor-pointer"
                        // onClick={() => {
                        //   props.setPopup(false);
                        // }}
                        onClick={props.handleShareClick}
                      >
                        May be later
                      </span>
                    </div>
                  </div>
                </div>
                <ToastContainer />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

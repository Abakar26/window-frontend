/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import { FaPaperclip } from "react-icons/fa";
import cross from "../../../images/svg/collection_cross.svg";
import { BASE_URL } from "../../../Constants/Constants";

const notify = () => {
  toast.success("Copied!");
};

export default function CollectionShareModal(props) {
  const shareableLink = `${BASE_URL}collections/${props.collection_token}`;
  const [inputVal] = useState(shareableLink);
  const splitUrl = () => {
    const link = shareableLink.split(":");
    if (link.length > 2) {
      // that means there were more than 1 ':' in url
      return link.slice(1, link.length).join("");
    }
    return link[1];
  };
  return (
    <Transition.Root show={true} as={Fragment}>
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
              <Dialog.Panel className="relative bg-white max-w-[476px] w-full h-[296px] rounded-[24px]
              pt-6 px-8 pb-8 text-left shadow-xl transform transition-all"
              >
                <div className="w-full relative">
                  <div className="modalBody flex flex-col w-full">
                    <img
                      src={cross}
                      alt="img"
                      className="absolute top-[-28%] right-[-7%] w-[29px] h-[29px] cursor-pointer"
                      onClick={props.handleShareClick}
                    />
                    <div className="mb-8">
                      <p className="title mb-2">Share this shortlist!</p>
                      <span className="collection_share_modal text-[#000000]">
                        Copy to the link below to share!
                      </span>
                    </div>
                    {/* Buttons bar */}
                    <div className="w-full flex justify-between items-center mb-[30px]">
                      <div
                        className="share-modal-width h-[37px] rounded-[20px] border border-[#C4C4C4] pr-6 pl-3
                      overflow-hidden py-[10px] flex flex-row"
                      >
                        <p className="text-[#C4C4C4] sharable_link_modal">
                          https:
                          <span className="text-black sharable_link_modal">
                            {splitUrl()}
                          </span>
                        </p>
                      </div>
                      <CopyToClipboard text={inputVal}>
                        <button
                          type="button"
                          onClick={notify}
                          disabled={inputVal === ""}
                          className={`w-[112PX] h-[37px] rounded-[50px] text-[#9c043a] flex justify-center
                          border border-[#9c043a] items-center clip_text ${inputVal === "" ? "grayscale" : ""
                            }`}
                        >
                          <FaPaperclip />
                          Copy
                        </button>
                      </CopyToClipboard>
                    </div>
                    {/* Social Icons */}
                    <div className="flex w-full justify-between">
                      <WhatsappShareButton
                        title="Window-Collection"
                        separator=" "
                        url={shareableLink}
                      >
                        <WhatsappIcon size={56} round />
                      </WhatsappShareButton>
                      <FacebookShareButton
                        quote="Window-Collection"
                        url={shareableLink}
                      >
                        <FacebookIcon size={56} round />
                      </FacebookShareButton>
                      <TwitterShareButton
                        title="Window-Collection"
                        url={shareableLink}
                      >
                        <TwitterIcon size={56} round />
                      </TwitterShareButton>
                      <EmailShareButton
                        subject="Window-Collection"
                        body={`Have a look on my amazing collection: ${shareableLink}`}
                        url={shareableLink}
                      >
                        <EmailIcon size={56} round />
                      </EmailShareButton>
                      <PinterestShareButton
                        description="Have a Look on this amazing collection"
                        url={shareableLink}
                        media="https://www.pinterest.com/pin/12947917671857471/"
                      >
                        <PinterestIcon size={56} round />
                      </PinterestShareButton>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        <ToastContainer />
      </Dialog>
    </Transition.Root>
  );
}

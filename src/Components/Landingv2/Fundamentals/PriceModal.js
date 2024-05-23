/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cross from '../../../images/svg/cross.svg';

export default function PriceModal(props) {
  // const [open, setOpen] = useState(true);
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  const handleOPen = () => {
    if (window.innerWidth <= 750) {
      props.setPrice(false);
    }
  };

  const handleMinChange = (event) => {
    const inputValue = event.target.value;
    if (props.max !== '' && (Number(props.max) < Number(inputValue) || Number(inputValue) < 0)) {
      setMinError(true);
      !inputValue && props.setMin(inputValue);
    } else {
      setMinError(false);
      props.setMin(inputValue);
    }
    setMin(inputValue);
    props.setPriceToggle(true);
  };

  const handleMaxChange = (event) => {
    const inputValue = event.target.value;
    if (props.min !== '' && (Number(props.min) > Number(inputValue) || Number(inputValue) < 0)) {
      setMaxError(true);
      !inputValue && props.setMax(inputValue);
    } else {
      setMaxError(false);
      props.setMax(inputValue);
    }
    setMax(inputValue);
    props.setPriceToggle(true);
  };
  return (
    <Transition.Root show as={Fragment} className={`${props.myStyle}`}>
      <Dialog as="div" className=" relative z-20" onClose={handleOPen}>
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
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center h-full w-full text-center">
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
                className=" bg-white h-[156px] px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform
                transition-all absolute w-full bottom-0 rounded-t-[12px] rounded-none"
              >
                <div className="flex flex-col w-full">
                  <div className="flex w-full flex-row mb-4">
                    <img src={cross} alt="cross" aria-hidden="true" onClick={() => { props.setPrice(false); }} />
                    <span className="ml-3 popup_Modal text-[#9C0E43] font-bold">Price</span>
                  </div>
                  <span className="border border-[#000000] opacity-10 pl-[18px] pr-[18px] mb-3 w-full" />
                  <div className="flex flex-row flex-wrap pl-[6px] justify-center items-center">
                    <div className={`${minError && 'red-border text-red-900'} flex flex-row px-2 pt-[10px] 
                    border border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[82px] w-full mr-[18px]`}
                    >
                      <p className="mr-2 price_dollar">$</p>
                      <input
                        className="w-full outline-none focus:outline-none price_dollar"
                        type="number"
                        placeholder="Min"
                        value={min}
                        onChange={handleMinChange}
                      />
                    </div>
                    <span className="border border-[#000000] opacity-10 max-w-[26px] w-full h-[1px]" />
                    <div className={`${maxError && 'red-border text-red-900'} flex flex-row px-2 pt-[10px] border
                     border-[#C4C4C4] items-center rounded-lg pb-[10px] max-w-[82px] w-full ml-[17px]`}
                    >
                      <p className="mr-2 price_dollar">$</p>
                      <input
                        className="w-full outline-none focus:outline-none price_dollar"
                        type="number"
                        placeholder="Max"
                        value={max}
                        onChange={handleMaxChange}
                      />
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

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import cross from '../../images/svg/cross.svg'
import WebsiteDrop from './UI/WebsiteItems/WebsiteDrop';
import ColorSelectorModal from './ColorSelectorModal';
import PriceSelectorModal from './PriceSelectorModal';

export default function WebsitePopupModal(props) {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState(0);
  const handleOPen = () => {
    setOpen(false);
    props.setIsWebsitePopupModal(false);
    // props.setFilterClic(false);
  }
  useEffect(() => {
    return () => {
      // props.setFilterClic(false);
    }
  })
  return (
    <Transition.Root show={open} as={Fragment} ref={props.filterClicRef}>
      <Dialog as="div" className="relative z-10 hidden sm:block" onClose={handleOPen}>
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
              <Dialog.Panel className=" bg-white h-[440px] px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform transition-all absolute w-full bottom-0 rounded-t-[12px] rounded-none">
                <div>
                  <div className="flex w-full justify-start cursor-pointer" onClick={() => { setOpen(false); props.setIsWebsitePopupModal(false); }}>
                    <img src={cross} alt='cross' aria-hidden="true" />
                  </div>
                  <div className="mt-6 sm:flex sm:flex-col">
                    <ul className='inline p-0'>
                      <li className={selected === 0 ? 'inline mr-3 popup_Modal text-[#9C0E43] font-bold' : 'inline mr-3 popup_Modal text-[#808080]'}
                        onClick={() => { setSelected(0) }}>Website</li>
                      <li className='inline mr-3 popup_Modal text-[#808080]'>|</li>
                      <li className={selected === 1 ? 'inline mr-3 popup_Modal text-[#9C0E43] font-bold' : 'inline mr-3 popup_Modal text-[#808080]'}
                        onClick={() => { setSelected(1) }}>Price</li>
                      <li className='inline mr-3 popup_Modal text-[#808080]'>|</li>
                      <li className={selected === 2 ? 'inline mr-3 popup_Modal text-[#9C0E43] font-bold' : 'inline mr-3 popup_Modal text-[#808080]'}
                        onClick={() => { setSelected(2) }}>Color</li>
                    </ul>
                    {selected === 0 && <WebsiteDrop mstyle={'mt-6 p-0 bottom-0 float-left w-full'} arrayWebsites={props.arrayWebsites} setArrayWebsites={props.setArrayWebsites} />}
                    {selected === 1 && <PriceSelectorModal min={props.min} max={props.max} setMin={props.setMin} setMax={props.setMax} />}
                    {selected === 2 && <ColorSelectorModal arrayColor={props.arrayColor} setArrayColor={props.setArrayColor} />}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}
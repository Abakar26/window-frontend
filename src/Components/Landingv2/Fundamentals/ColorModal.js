import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import cross from '../../../images/svg/cross.svg'
import ColorList from '../UI/ColorList'
import { useDispatch, useSelector } from "react-redux";
import { colorlist } from '../../../Constants/Constants';


export default function ColorModal(props) {
  const colorsNames = useSelector((preferences) => { return (preferences.counter.preferences.colors) });

  const [open, setOpen] = useState(true)
  const handleOPen = () => {
    // setOpen(false);
    if (window.innerWidth <= 750) {
      props.setColor(false);
    }
  }

  useEffect(() => {
    return () => {
    }
  })

  return (
    <Transition.Root show={true} as={Fragment} className={`${props.myStyle}`}>
      <Dialog as="div" className={` relative z-20`} onClose={handleOPen}>
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
          <div className={`flex items-center justify-center h-full w-full text-center`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className=" bg-white h-[360px] px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform transition-all absolute w-full bottom-0 rounded-t-[12px] rounded-none">
                <div className='flex flex-col w-full'>
                  <div className='flex w-full flex-row mb-4'>
                    <img src={cross} alt='cross' aria-hidden="true" onClick={() => { props.setColor(false) }} />
                    <span className={'ml-3 popup_Modal text-[#9C0E43] font-bold'}>Color</span>
                  </div>
                  <span className='border border-[#000000] opacity-10 pl-[18px] pr-[18px] mb-3 w-full'></span>
                  <div className='flex flex-wrap'>
                    <ul className='flex flex-wrap m-0 p-0 list-none color-list w-full justify-start'>
                      {(colorsNames ? colorsNames : colorlist).map((color) => {
                        return <ColorList color={color} count={props.count} setCount={props.setCount} setColorToggle={props.setColorToggle} arrayColor={props.arrayColor} setArrayColor={props.setArrayColor} />
                      })}
                    </ul>
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
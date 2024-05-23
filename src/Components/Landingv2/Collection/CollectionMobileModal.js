/* eslint-disable no-trailing-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-named-as-default
import BookmarkPopup from './Modals/BookmarkPopup';

// eslint-disable-next-line react/function-component-definition
export default function CollectionMobileModal(props) {
  // const [open, setOpen] = useState(true);
  const handleOPen = () => {
    // setOpen(false);
    props.setBOx(false);
  };
  useEffect(() => () => {
    // props.setPrice(true);
  });

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
                className=" bg-[#ffffff] h-[337px] px-4 pt-3 pb-4 text-left overflow-hidden
                shadow-xl ransform transition-all absolute w-full bottom-0 rounded-t-[12px] rounded-none"
              >
                <BookmarkPopup
                  product_id={props.product_id}
                  productCollections={props.productCollections}
                  product={props.product}
                  setBOx={props.setBOx}
                  box={props.box}
                  updateProduct={props.updateProduct}
                />
                {/* <div className='w-full h-[337px] overflow-auto remove_scroll pr-[12px] flex flex-col
                 bg-[#ffffff] bookmark_bottom_radius pl-[9px] pt-[10px]'>
                  {!props.display &&
                    <div className='flex items-center justify-between w-full'>
                      <p className='text-[24px] font-[500] leading-[29px] pl-[5px] mb-[10px]'> Collections</p>
                      <div className={!props.display ? '  ' : '  '}
                        onClick={props.setDisplayText} >
                        <button className='text-[#9C0E43] text-[18px] leading-[21px] font-[700]' >+</button>
                      </div>
                    </div>}
                  {props.display &&
                    <div className='pb-[0px] flex items-center justify-between mb-[10px] w-full' >
                      <div className=''>
                        <input type='text' className=' w-[282px] outline:none outline-[#C4C4C4] border-0 
                        text-[14px] leading-[17px] font-[700] p-[2px]'
                          placeholder='Add '
                          value={props.value} onChange={(e) => props.setValue(e.target.value)} />
                      </div>
                      <div className='flex justify-between pr-[25px]'>
                        {!props.enable && <button className='text-[#9C0E43] text-[18px]  
                        font-[700] leading-[22px] ' onClick={props.addToList}>Save</button>}
                      </div>
                    </div>}
                  <ul className='p-0'>
                    {props.list?.length > 0 && props.list?.map((item, i) => <li className='list-none' key={i} >
                      <BookMarkMobileView 
                      item={item} 
                      display={props.display} 
                      setDisplayText={props.setDisplayText} 
                      list={props.list} 
                      i={i} 
                      reff={props.reff} 
                      removeToList={props.removeToList} />
                    </li>)}
                  </ul>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

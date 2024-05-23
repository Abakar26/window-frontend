import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function BookmarksModal(props) {
  const [open, setOpen] = useState(true)
  const deleteButton = () => {
    props.handleDeletion();
    setOpen(false);
  }
  useEffect(() => {
    return () => {
      props.setPopup(false);
    }
  })
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
              <Dialog.Panel className="relative bg-white w-[406px] h-[158px] rounded-xl pt-6 px-8 pb-8 text-left overflow-hidden shadow-xl transform transition-all">
                <div className="flex w-full justify-center flex-col items-center">
                  <label className='bookmarks_modal_heading mb-9'>Delete "DressCollection"?</label>
                  <div className='flex w-full justify-between'>
                    <button className='w-[159px] h-[37px] border border-[#808080] rounded-[20px] bookmarks_modal_button_text text-[#808080]'
                      onClick={() => { setOpen(false) }}>Take me back</button>
                    <button className='w-[159px] h-[37px] rounded-[20px] bg-[#EB6D66] bookmarks_modal_button_text text-[#ffffff]'
                      onClick={deleteButton}>Delete Collection</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

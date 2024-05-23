import { useState } from "react";
const SavedWebsitesList = (props) => {
  const brands = ['asos.com', 'zara.com', 'h&m.com'];
  const [style, setStyle] = useState(false);
  const [delet, setDelete] = useState(false);
  return (
    <div className={delet ? 'border mb-1 rounded hidden' : 'border mb-1 rounded'} onMouseOver={() => { setStyle(true); }} onMouseOut={() => { setStyle(false) }} >
      <div className='flex flex-row justify-between'>
        <div>
          <span className='font-medium text-xs p-1 ml-2'>{`"${props.value}"`}</span>
          <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
          {brands.map((website) => {
            return <a className='text-xs text-[#9C0E43] sm:hidden' href='/'>{`${website},`}</a>
          })}
          <span className='-mt-0.5 ml-2'>.</span>
          <span className='text-xs text-gray-400 ml-1'>Size</span>
          <span className='-mt-0.5 ml-2'>.</span>
          <span className='text-xs text-gray-400 ml-1'>Color</span>
        </div>
        <div className='inline-block mr-4 mt-1'>
          <div className={style ? 'border-none text-xs text-slate-300 hover:text-red-600 block cursor-pointer' : 'border-none text-xs text-slate-300 hover:text-red-600 hidden cursor-pointer'}
            onClick={() => { setDelete(true); props.inputEl.current.focus(); }}
          >
            Remove
          </div>
        </div>
      </div>
    </div >
  );
}
export default SavedWebsitesList;
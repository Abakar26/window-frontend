import { useState } from "react";
const RecentWebsites = () => {
  const [button, setButton] = useState(false);
  const [button2, setButton2] = useState(false);

  const handelOver = () => {
    setButton(true);
  }
  const handleOut = () => {
    setButton(false);
  }
  const recentSearch = ['skinny jeans', 'black dress'];
  const recentWebsites = ['asos.com', 'zara.com', 'h&m.com'];
  return (
    <div>
      <p className='recent_header mb-1'>RECENT</p>
      <div>
        <div className={button ? 'hidden' : 'border mb-1 rounded'}>
          <div className='flex justify-between'>
            <div className='flex'>
              <p className='font-medium text-xs p-1 ml-2'>“black dress”</p>
              <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
              <div className='flex ml-2 sm:hidden'>
                <div className='inline-block'>
                  <a className='text-xs text-[#9C0E43]' href='/'>asos.com, zara.com, nordstorm.com</a>
                </div>
              </div>
              <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
              <div><span className='text-xs text-gray-400 ml-2 sm:hidden'>Size</span></div>
              <span className='-mt-0.5 ml-2'>.</span>
              <div><span className='text-xs text-gray-400 ml-2'>Color</span></div>
              <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
              <div><span className='text-xs text-gray-400 ml-2 sm:hidden'>Neck Line(1)</span></div>
            </div>
            <div className='mr-4 flex'>
              {<button className='border-none text-xs text-slate-300 hover:text-red-600' onClick={() => { setButton(true) }}>Remove</button>}
            </div>
          </div>
        </div>
        <div className={button2 ? 'hidden' : 'border mb-1 rounded'}>
          <div className='flex justify-between'>
            <div className='flex'>
              <p className='font-medium text-xs p-1 ml-2'>“skinny jeans”</p>
              <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
              <div className='flex ml-2'>
                <div className='inline-block sm:hidden'>
                  <a className='text-xs text-[#9C0E43]' href='/'>asos.com, zara.com, macys.com, h&m.com +6</a>
                </div>
              </div>
              <span className='-mt-0.5 ml-2 sm:hidden'>.</span>
              <div><span className='text-xs text-gray-400 ml-2 sm:hidden'>Size(2)</span></div>
              <span className='-mt-0.5 ml-2'>.</span>
              <div><span className='text-xs text-gray-400 ml-2'>Color(2)</span></div>
              <span className='-mt-0.5 ml-2'>.</span>
              <div><span className='text-xs text-gray-400 ml-2'>Fit(2)</span></div>
            </div>
            <div className='mr-4 flex'>
              <button className='border-none text-xs text-slate-300 hover:text-red-600' onClick={() => { setButton2(true) }}>Remove</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RecentWebsites;

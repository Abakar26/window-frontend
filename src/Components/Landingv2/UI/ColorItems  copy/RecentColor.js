const RecentColor = () => {

  const recentSearch = ['skinny jeans', 'black dress'];
  const recentColor = ['asos.com', 'zara.com', 'h&m.com'];
  return (
    <div>
      <p className='text-xs ml-2 mt-2'>RECENT</p>
      <div>
        {recentSearch.map((value) => {
          return <div className='border mt-0.5 ml-4 mr-2 rounded'>
            <div className='flex justify-between'>
              <div className='flex'>
                <p className='font-medium text-xs p-1 ml-2'>{` "${value}" `}</p>
                <span className='-mt-0.5 ml-2'>.</span>
                <div className='flex ml-2'>
                  {recentColor.map((website) => {
                    return <div className='inline-block'>
                      <a className='text-xs text-blue-600' href='/'>{`${website},`}</a>
                    </div>
                  })}
                </div>
                <span className='-mt-0.5 ml-2'>.</span>
                <div><span className='text-xs text-gray-400 ml-2'>Size</span></div>
                <span className='-mt-0.5 ml-2'>.</span>
                <div><span className='text-xs text-gray-400 ml-2'>Color</span></div>
              </div>
              <div className='mr-4 flex'>
                <button className='border-none text-xs text-slate-300 hover:text-red-600'>Remove</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default RecentColor;

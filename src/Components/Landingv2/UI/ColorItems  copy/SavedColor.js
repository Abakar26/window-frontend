const SavedColor = () => {

  const recentSearch = ['skinny jeans', 'skinny jeans', 'skinny jeans'];
  const savedColor = ['asos.com', 'zara.com', 'h&m.com'];
  return (
    <div>
      <p className='text-xs ml-2 mt-2'>SAVED</p>
      <div>
        {recentSearch.map((value) => {
          return <div className='border mt-0.5 ml-4 mr-2 rounded'>
            <div className='flex justify-start'>
              <p className='font-medium text-xs p-1 ml-2'>{`"${value}"`}</p>
              <span className='-mt-0.5 ml-2'>.</span>
              <div className='flex ml-2'>
                {savedColor.map((website) => {
                  return <div className='inline-block'>
                    <a className='text-xs text-blue-600' href='/'>{`${website},`}</a>
                  </div>
                })}
              </div>
              <span className='-mt-0.5 ml-2'>.</span>
              <div><span className='text-xs text-gray-400 ml-1'>Size</span></div>
              <span className='-mt-0.5 ml-2'>.</span>
              <div><span className='text-xs text-gray-400 ml-1'>Color</span></div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default SavedColor;

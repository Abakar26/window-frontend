
const MobileSavedWebsites = () => {

  const recentSearch = ['black dress', 'white top', 'zara pants'];
  const savedWebsites = ['asos.com', 'zara.com'];
  return (
    <div>
      <p className='ml-2 mt-2 text-xs font-normal'>Saved</p>
      <div>
        {recentSearch.map((value) => {
          return <div className='border mt-0.5 ml-4 mr-2 rounded'>
            <div className='flex justify-start'>
              <div className='font-medium text-xs p-1 ml-1'>{`"${value}"`}</div>
              <span className='-mt-0.5'>.</span>
              <div className='flex ml-1'>
                {savedWebsites.map((website) => {
                  return <div className='inline-block'>
                    <a className='text-xs text-blue-600' href='/'>{`${website},`}</a>
                  </div>
                })}
              </div>
              <span className='-mt-0.5 ml-1'>.</span>
              <span className='text-xs text-gray-400 mt-1.5 ml-1'>Filter</span>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default MobileSavedWebsites;
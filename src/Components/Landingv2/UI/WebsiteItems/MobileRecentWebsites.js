import DeleteSVG from '../../../../images/svg/delete.svg';
const MobileRecentWebsites = () => {

  const recentSearch = ['skinny jeans'];
  const savedWebsites = ['asos.com', 'zara.com'];
  return (
    <div>
      <p className='ml-2 mt-2 text-xs font-normal'>Recent</p>
      <div>
        {recentSearch.map((value) => {
          return <div className='border mt-0.5 ml-4 mr-2 rounded'>
            <div className='flex justify-between'>
              <div className='font-medium text-xs p-1 ml-1'>{`"${value}"`}</div>
              <span className='-mt-0.5 ml-0.5'>.</span>
              <div className='flex ml-0.5'>
                {savedWebsites.map((website) => {
                  return <div className='inline-block'>
                    <a className='text-xs text-blue-600' href='/'>{`${website},`}</a>
                  </div>
                })}
              </div>
              <span className='-mt-0.5 ml-0.5'>.</span>
              <span className='text-xs text-gray-400 mt-1.5 ml-0.5'>Filter</span>
              <div className='ml-14 mr-2 flex'>
                <button className='border-none'>
                  <img src={DeleteSVG} alt='delete_svg' />
                </button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default MobileRecentWebsites;
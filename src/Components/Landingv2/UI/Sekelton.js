const Sekelton = () => {
  return (
    <div className='bg-white shadow-md dropdown-inner p-4 rounded-lg overflow-auto remove_scroll w-full'>
      <div>
        <p className='popular_heading mb-2'>POPULAR RESULTS</p>
      </div>
      <ul className='flex p-0 m-0 trending-list'>
        {[...Array(20)].map(() => {
          return <li className="mr-6">
            <div className="flex flex-col animate-pulse">
              <div className='w-[70px] h-[90px] bg-[#EDEDED] rounded-lg mb-[10px]'></div>
              <div className='w-[72px] h-[10px] bg-[#EDEDED] mb-[2px]'></div>
              <div className='w-[44px] h-[10px] bg-[#EDEDED]'></div>
            </div>
          </li>
        })}
      </ul>
    </div>
  );
}
export default Sekelton;
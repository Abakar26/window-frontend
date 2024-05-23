const NoResults = (props) => {
  return (
    <div className='xs:mt-4 md:mt-0'>
      <p className='no_exact_msg md:mb-1'>No exact matches found for <b>"{props.search}"</b></p>
      <p className='try_changing_msg text-[#808080]'>Try changing your search query or removing filters</p>
      <div className='mt-5 mb-5'>
        <button className='fewer_keywords gap-x-2'>Results matching fewer keywords</button>
      </div>
    </div>
  );
};

export default NoResults;
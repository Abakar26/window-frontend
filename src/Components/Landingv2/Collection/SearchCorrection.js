const SearchCorrection = (props) => {
  return (
    <div className='xs:mt-4 md:mt-0'>
      <p className='md:mb-1 suggestion_text'>Did you mean <b className=' text-[#9C0E43]'>Summer Dress</b></p>
      <p className='md:mb-1 inline try_changing_msg text-[#000000]'>Search for</p><p className=' text-[#9C0E43] inline m-0 ml-1'>{props.search}</p>
    </div>
  );
};

export default SearchCorrection;

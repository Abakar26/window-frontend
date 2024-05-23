import cartSearch from '../../../../images/svg/cartsearch.svg'
const CartSearch = (props) => {
  return (
    <div className={`relative border border-[#999999] rounded-[28px] ${props.value} w-full h-10 md:h-[28px] flex flex-row bg-white pr-6 pointer-events-none`}>
      <img className='absolute ml-[25px] md:ml-[10px] left top-[20%] mr-1 md:w-[14px] md:h-[14px]' src={cartSearch} alt='' />
      <span className='ml-[49px] md:ml-[30px] text-[22px] md:text-[13px] leading-[27px] md:leading-[16px] pt-[6px]'>{props.first}<span className=' text-gray-400'>{props.second}</span><span className='text-[#9C0E43]'>|</span></span>
      {/* <input className={`${props.inputvalue} w-full text-[22px] leading-[27px] ml-[49px] caret-[#9C0E43] focus:outline-none`}
        placeholder='Search'></input> */}
    </div>
  )
}
export default CartSearch;
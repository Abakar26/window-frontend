import DownChevron from '../../../../images/svg/downChevron.svg';
const WebsiteDropDownButton = (props) => {
  return (
    <button
      className='-ml-40 bg-none text-inherit border-none p-0 cursor-pointer outline-inherit'
      type='submit'
      onClick={props.onClick}
    >
      <div onClick={props.openDropDown} className='website_outer_div_button'>
        <span className='border border-gray-400 mr-4 my-1.5'></span>
        <span className='-mr-1 text-lg font-sans'>website</span>
        <img className='ml-4' src={DownChevron} alt='down_chevron' />
      </div>
    </button>
  )
}
export default WebsiteDropDownButton;

import DownChevron from '../../../../images/svg/downChevron.svg';
const ColorDropDownButton = (props) => {
  return (
   
    <button
      className=' bg-none text-inherit border-none p-0 cursor-pointer outline-inherit'
      type='submit'
      onClick={props.onClick}
    >
      <div onClick={props.openDropDown} className='website_outer_div_button'>
        <span className='-mr-1 text-lg font-sans'>website </span>
      </div>
    </button>
  )
}
export default ColorDropDownButton;

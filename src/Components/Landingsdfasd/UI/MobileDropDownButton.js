const MobileDropDownButton = (props) => {
  return (
    <button
      className='-ml-5.5rem'
      type='submit'
      onClick={props.onClick}>
      <div onClick={props.openDropDown} className='flex mt-1.5'>
        <span className='border mr-4 my-2'></span>
        <div className='-mr-1 text-gray-400 font-SF_Pro_Text text-lg font-normal'>website</div>
      </div>
    </button>
  )
}
export default MobileDropDownButton;
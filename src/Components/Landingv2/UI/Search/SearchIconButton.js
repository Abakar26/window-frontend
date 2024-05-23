import filterimg from '../../../../images/svg/filterimg.svg';
const SearchIconButton = (props) => {
  return (
    <div className='ml-4 w-full'>
      <img src={filterimg} alt='serach_icon_web' className='cursor-pointer' onClick={props.onClick} />
    </div>
  )
}
export default SearchIconButton;

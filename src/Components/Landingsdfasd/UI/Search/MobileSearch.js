import SearchIconMobile from '../../../../images/svg/search_icon_mobile.svg';
const MobileSearch = (props) => {
  return (
    <div className='m-0 p-0'>
      <input
        className={props.openBool ? 'w-96 pl-6 pr-24 m-0 rounded-lg h-10 xsm:w-60' : 'w-96 pl-6 pr-24 m-0 rounded-lg h-10 xsm:w-72'}
        placeholder='search'
        type='text'
        value={props.input}
        onChange={props.onChange}
        onFocus={props.onFocusState}
        onBlur={props.onBlurState}
      />
      <img className='w-3.5 h-3.5 bottom-9 ml-2 -mt-26' src={SearchIconMobile} alt='mobile' />
    </div>
  );
}
export default MobileSearch;
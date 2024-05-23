const MainSearch = (props) => {
  return (
    <input
      className={props.openBool ?
        'w-full p-5 pr-40 rounded-lg border-none h-5 shadow-md lg:w-drop-down_width_lg btw_lg_and_md:w-drop-down_width_btw xlg:w-drop-down_width_xlg btw_md:w-drop-down_width_btw_md md:w-drop-down_width_md'
        :
        'w-full p-5 pr-40 rounded-lg border-none h-5 shadow-md lg:w-drop-down_width_lg btw_lg_and_md:w-drop-down_width_btw xlg:w-drop-down_width_xlg btw_md:w-drop-down_width_btw_md md:w-drop-down_width_md'}
      placeholder='search'
      type='text'
      value={props.input}
      onChange={props.onChange}
      onFocus={props.onFocusState}
      onBlur={props.onBlurState}
    />
  )
}

export default MainSearch;
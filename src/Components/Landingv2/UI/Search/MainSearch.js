const MainSearch = (props) => {
  return (
    <input
      className={props.openBool ?
        'w-full search-icon'
        :
        'w-full search-icon'}
      placeholder='search'
      type='text'
      ref={props.inputEl}
      value={props.input}
      onChange={props.onChange}
      onFocus={props.onFocusState}
      onBlur={props.onBlurState}
    />
  )
}

export default MainSearch;
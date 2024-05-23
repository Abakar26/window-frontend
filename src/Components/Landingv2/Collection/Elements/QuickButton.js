const QuickButton = (props) => {
  return <button className={props.focused ? 'text-[#9C0E43] rounded-[20px] max-w-[171px] w-full h-[35px] border-[#9C0E43] border top-[10rem] bg-white absolute z-10 block' :
    'text-blue-900 w-40 h-9 rounded -mt-12 bg-white absolute z-10 hidden'} onClick={props.onClick}
    onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} >
    Quick View
  </button >
}
export default QuickButton;

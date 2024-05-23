/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
const SkipButton = (props) => (
  <div className="flex flex-col justify-center items-center ml-[100px] -mt-8">
    <button
      type="button"
      className="w-[22px] h-[22px] bg-[#9C0E43] rounded-full flex items-center justify-center mb-1"
      onClick={props.onClick}
    >
      <div className="w-[2px] h-[2px] bg-[#ffffff] rounded-full mr-[1px]" />
      <div className="w-[2px] h-[2px] bg-[#ffffff] rounded-full mr-[1px]" />
      <div className="w-[2px] h-[2px] bg-[#ffffff] rounded-full -mr-[1px]" />
      <div className="arrow right" />
    </button>
    <p className="skip_button_text">skip</p>
  </div>
);
export default SkipButton;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

const SidebarText = (props) => (
  <div
    className="w-full about_signup_aside
         flex flex-col pr-6 pointer-events-none mb-[2rem] ml-8 h-[220px]"
  >
    <span>{props.text.firstLine}</span>
    <span className="flex flex-row items-baseline">
      <img className="w-[67px] h-[27px]" src={props.text.image} alt="" />
      {props.text.secondLine}
    </span>
    {props.text.bool && <span>Never Been So</span>}
    <span className="flex flex-row">
      {props.text.thirdLine.substring(0, props.text.thirdLine.length - 1)}
      <span className="text-gray-500">
        {props.text.thirdLine.charAt(props.text.thirdLine.length - 1)}
      </span>
      <span className="text-[#9C0E43]">|</span>
    </span>
  </div>
);
export default SidebarText;

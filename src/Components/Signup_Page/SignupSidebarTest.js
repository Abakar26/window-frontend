/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

const SignupSidebarText = (props) => (
  <div
    className="w-full about_signup_aside_login
         flex flex-col pr-6 pointer-events-none mb-[3rem] px-8 h-[150px]"
  >
    <span>{props.text.firstLine}</span>
    <span className="flex flex-row items-baseline">
      <img className="w-[67px] h-[27px]" src={props.text.image} alt="" />
      {props.text.secondLine}
    </span>
    <span>Has Never Been So</span>
    <span className="flex flex-row">
      Convinen
      <span className="text-gray-400">t</span>
      <span className="text-[#9C0E43]">|</span>
    </span>
  </div>
);
export default SignupSidebarText;

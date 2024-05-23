/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
const MyTextInput = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.setText(e.target.value);
  };

  return (
    <div className={`flex flex-col ${props.ss} mb-6 max-w-[185px] w-full mr-8 sm:mr-0 md:mr-0`}>
      <label className="about_signup_label mb-2" htmlFor={props.id || props.name}>{props.label}</label>
      <input
        className="max-w-[185px] w-full pl-3 py-[5.5px] bg-white border
      shadow-sm border-[#C4C4C4] focus:outline-none block rounded-lg"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        tabIndex={props.tabIndex}
        onChange={handleChange}
      />
    </div>
  );
};
export default MyTextInput;

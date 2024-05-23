import SVGDesktop from '../../../../images/svg/svg_desktop.svg';
const MobileLoginSVG = (props) => {
  return (
    <div>
      <button className='border-none' onClick={props.onClick}>
        <img className='w-10 h-10' src={SVGDesktop} alt='' />
      </button>
      <p className='text-xs font-normal mt-1 ml-1 text-gray-300'>Log in</p>
    </div>
  );
}
export default MobileLoginSVG;
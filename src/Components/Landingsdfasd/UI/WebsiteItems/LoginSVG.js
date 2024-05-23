import SVGDesktop from '../../../../images/svg/svg_desktop.svg';
const LoginSVG = () => {
  return (
    <div className='m-auto flex w-2/4 justify-evenly'>
      <div>
        <img src={SVGDesktop} alt='' />
        <div className='border border-Chevronsolid border-gray-200' />
      </div>
      <div>
        <img src={SVGDesktop} alt='' />
        <div className='border border-Chevronsolid border-gray-200' />
      </div>
    </div>
  )
}
export default LoginSVG;
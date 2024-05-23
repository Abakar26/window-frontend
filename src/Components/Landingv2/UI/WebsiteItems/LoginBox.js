import SignupLoginIcon from '../../../../images/svg/signup_login_icon.svg';
const LoginBox = (props) => {
  return (
    <div className='flex rounded-2xl w-2/4 justify-evenly border-2 border-solid border-gray-400 items-center mr-6 bg-cyan-50'>
      <div id='flex items-center h-full'>
        <img src={SignupLoginIcon} className='mb-2.5' alt='' />
      </div>
      <div>
        <span className='text-xs'>
          <a className='signup_login_a' href="/">Sign up</a> or <a className='signup_login_a' onClick={props.onClick}>Login</a> to view <br /> your saved websites
        </span>
      </div>
    </div>
  )
}
export default LoginBox;
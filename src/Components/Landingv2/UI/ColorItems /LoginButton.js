import SignupLoginIcon from '../../../../images/svg/signup_login_icon.svg';
const LoginButton = (props) => {
  return (
    <div className='flex'>
      <div className='flex items-center h-full'>
        <img src={SignupLoginIcon} className='mb-2.5 ml-3' alt='' />
      </div>
      <div>
        <div className='text-xs font-normal ml-6'>
          <a className='signup_login_a' href='/'>Sign up</a> or <a className='signup_login_a' onClick={props.LoginIcon}>Login</a> to view your saved <br /> Color
        </div>
      </div>
    </div>
  );
}
export default LoginButton;
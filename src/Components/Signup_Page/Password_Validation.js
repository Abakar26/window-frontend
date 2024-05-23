/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import check from '../../images/svg/check_icon.svg';
import uncheck from '../../images/svg/uncheck_icon.svg';

const PasswordValidation = (props) => (
  <div className={` flex flex-col justify-center ${props.ss} -mt-4 -mr-[52px] md:order-1`}>
    <span className="flex flex-row items-center">
      {props.first
        ? (
          <>
            <img className="mr-[2px] h-3 w-3" src={check} alt="green_check" />
            <p className="validation text-[#28A33F]">Should be more than 8 characters</p>
          </>
        )
        : (
          <>
            <img className="mr-[2px] h-3 w-3" src={uncheck} alt="green_check" />
            <p className="validation text-[#808080]">Should be more than 8 characters</p>
          </>
        )}
    </span>
    <span className="flex flex-row items-center">
      {props.second
        ? (
          <>
            <img className="mr-[2px] h-3 w-3" src={check} alt="green_check" />
            <p className="validation text-[#28A33F]">Must contain a letter (A,B,C...)</p>
          </>
        )
        : (
          <>
            <img className="mr-[2px] h-3 w-3" src={uncheck} alt="green_check" />
            <p className="validation text-[#808080]">Must contain a letter (A,B,C...)</p>
          </>
        )}
    </span>
    <span className="flex flex-row items-center">
      {props.third
        ? (
          <>
            <img className="mr-[2px] h-3 w-3" src={check} alt="green_check" />
            <p className="validation text-[#28A33F]">Must contain a Number (1,2,3,...)</p>
          </>
        )
        : (
          <>
            <img className="mr-[2px] h-3 w-3" src={uncheck} alt="green_check" />
            <p className="validation text-[#808080]">Must contain a Number (1,2,3,...)</p>
          </>
        )}
    </span>
    <span className="flex flex-row items-center">
      {props.forth
        ? (
          <>
            <img className="mr-[2px] h-3 w-3" src={check} alt="green_check" />
            <p className="validation text-[#28A33F]">Must contain a special character (!,@,#,...)</p>
          </>
        )
        : (
          <>
            <img className="mr-[2px] h-3 w-3" src={uncheck} alt="green_check" />
            <p className="validation text-[#808080]">Must contain a special character (!,@,#,...)</p>
          </>
        )}
    </span>
  </div>
);
export default PasswordValidation;

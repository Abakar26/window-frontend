/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import exclaim from '../../images/svg/exclaim_icon.svg';
import check from '../../images/svg/check_icon.svg';

const EqualValidation = (props) => (
  <>
    {props.equal ? (
      <span className="flex flex-row items-center">
        <img className="mr-[2px] h-3 w-3" src={check} alt="green_check" />
        <p className="validation text-[#28A33F]"> Passwords Match</p>
        {' '}

      </span>
    )
      : (
        <span className="flex flex-row items-center">
          <img className="mr-[2px]" src={exclaim} alt="exclaim" />
          <p className="validation text-[#FFA14A]"> Passwords Don't Match</p>
          {' '}

        </span>
      )}
  </>
);
export default EqualValidation;

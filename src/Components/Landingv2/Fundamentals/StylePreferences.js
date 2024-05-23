/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
// import box1 from '../../../images/box1.png';

// const items = ['Chic/Classic', 'Sporty/Comfortable',
//   'Urban/Bohemian', 'Preppy/Oversized', 'Dress/Sexy',
//   'Casual/Fluid', 'Business/Casual'];

const StylePreferences = (props) => {
  const { setFundamentalNav } = props;
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-row h-[100px] border border-[#999999]
      rounded-lg max-w-[572px] w-full sm:w-auto sm:h-fit bg-[#ffffff] mb-10 px-[34px] pt-9 pb-12 sm:flex-col"
      >
        <div className="flex flex-row justify-between max-w-[488px] w-full items-center h-[30px]
        mb-6 sm:flex-col sm:justify-start sm:items-baseline sm:mb-10"
        >
          <span className="fundamental_box_header">Style Preferences</span>
          {/* <span className=' fundamental_box_text'></span> */}
        </div>
        {/* <div className='sm:flex sm:justify-center'>
          <div className='grid gap-[8px] grid-cols-4 sm:grid-cols-2  mb-[34px]'>
            {items.map((item) => {
              return (
                <div className='relative'>
                  <img src={box1} alt='' />
                  <div className='bg-[#ffffff] w-[116px] h-[38px] -mt-[40px] ml-[2px]
                   rounded-b-[6px] px-1 py-1 absolute fundamental_box_text justify-center flex items-center'>
                    {item}
                  </div>
                </div>
              )
            })}
          </div>
        </div> */}
        <div className="flex justify-end sm:justify-center">
          <button
            type="button"
            className="w-[185px] h-[37px] rounded-[20px] bg-[#9C0E43] fundamental_box_button_text"
            onClick={() => { setFundamentalNav(false); navigate('/websiteselection'); }}
          >
            Retake Preferences Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
export default StylePreferences;

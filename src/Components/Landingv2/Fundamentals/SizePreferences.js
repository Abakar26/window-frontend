/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { dresses, bottoms } from '../../../Constants/Constants';

const SizePreferences = () => {
  const [dressSize, setDressSize] = useState('');
  const [bottomSize, setBottomSize] = useState('');
  // const [jacketSize, setJacketSize] = useState('');
  const [over, setOver] = useState(false);
  useEffect(() => {
    if (dressSize !== '' && bottomSize !== '') {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [dressSize, bottomSize]);
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-[424px] border border-[#999999] rounded-lg max-w-[572px]
       w-full bg-[#ffffff] sm:h-[529px] sm:w-auto mb-10 px-[42px] pt-9 pb-12"
      >
        <div className="flex flex-row justify-between max-w-[488px] w-full sm:flex-col
        sm:justify-center sm:items-center sm:pt-9"
        >
          <span className="fundamental_box_header flex sm:mb-10 w-full">Size Preferences</span>
          <div className="flex flex-col justify-between w-full sm:h-full">
            <div className="flex flex-col">
              <label className="mb-1 fundamental_box_label">TOPS</label>
              <Select
                options={dresses}
                value={dresses.filter((option) => option.value === dressSize)}
                isSearchable
                onChange={(event) => {
                  setDressSize(event.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 fundamental_box_label">BOTTOMS</label>
              <Select
                options={bottoms}
                value={bottoms.filter((option) => option.value === bottomSize)}
                isSearchable
                onChange={(event) => {
                  setBottomSize(event.value);
                }}
              />
            </div>
            {/* <div className='flex flex-col'>
              <label className='mb-1 fundamental_box_label'>JACKETS</label>
              <input className='max-w-[237px] w-full h-[37px] border border-[#C4C4C4]
              rounded-lg pl-3 fundamental_input focus:outline-none'
                type='text'
                value={jacketSize}
                onChange={(e) => { setJacketSize(e.target.value) }} />
            </div> */}
            <button
              type="button"
              className={over
                ? 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#9C0E43] fundamental_box_button_text'
                : 'max-w-[237px] w-full h-[37px] rounded-[20px] bg-[#C4C4C4] fundamental_box_button_text'}
              disabled={!over}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SizePreferences;
